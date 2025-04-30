import type { WebSocket } from 'ws';
import { WebSocketServer } from 'ws';
import { BUILD_COMPLETE, DO_UPDATE, DONE_UPDATE, LOCAL_RELOAD_SOCKET_PORT, LOCAL_RELOAD_SOCKET_URL } from '../constant';
import MessageInterpreter from '../interpreter';

const clientsThatNeedToUpdate: Set<WebSocket> = new Set();

function initReloadServer() {
  const wss = new WebSocketServer({ port: LOCAL_RELOAD_SOCKET_PORT });

  wss.on('listening', () => {
    console.log(`[HMR] Server listening at ${LOCAL_RELOAD_SOCKET_URL}`);
  });

  wss.on('connection', (ws) => {
    console.log('[Reload-Server]: Add new client: ', ws.url);
    clientsThatNeedToUpdate.add(ws);

    ws.addEventListener('close', () => {
      console.log('[Reload-Server]: Client removed');
      clientsThatNeedToUpdate.delete(ws);
    });

    ws.addEventListener('message', (event) => {
      if (typeof event.data !== 'string') return;
      console.log('[Reload-Server]: Recived a message: ', event.data);

      const message = MessageInterpreter.receive(event.data);

      if (message.type === DONE_UPDATE) {
        ws.close();
      }

      if (message.type === BUILD_COMPLETE) {
        console.log('[Reload-Server]: Build complete, trigger an update');
        for (const ws of clientsThatNeedToUpdate) {
          ws.send(MessageInterpreter.send({ type: DO_UPDATE, id: message.id }));
        }
      }
    });
  });

  wss.on('error', (error) => {
    console.error(`[HMR] Failed to start server at ${LOCAL_RELOAD_SOCKET_URL}`);
    throw error;
  });
}

initReloadServer();
