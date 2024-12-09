import { toggleTheme } from '@src/toggleTheme';

void toggleTheme();

//
// console.log('content script');
//
// let prev_x = 0;
// let prev_y = 0;
//
// const createCursor = email => {
//   const cursor = document.createElement('div');
//   cursor.append(email);
//   cursor.style.position = 'absolute';
//   cursor.style.left = '0';
//   cursor.style.top = '0';
//   cursor.style.width = '50px';
//   cursor.style.height = '10px';
//   cursor.style.backgroundColor = 'red';
//   cursor.style.zIndex = '1000';
//
//   cursor.id = 'cursor';
//   document.body.prepend(cursor);
//   return cursor;
// };
//
// supabaseStorage.get().then(async supabase => {
//   const channel = supabase.channel('room1');
//   const user = await supabase.auth.getUser();
//   console.log(user);
//   if (!user.data) return;
//
//   document.addEventListener('mousemove', event => {
//     const x = event.clientX;
//     const y = event.clientY;
//
//     if (prev_x + prev_y - (x + y) < 25)
//       channel.send({
//         type: 'broadcast',
//         event: 'cursor-pos',
//         payload: { x, y, user: user.data.user },
//       });
//
//     prev_x = x;
//     prev_y = y;
//   });
//
//   channel
//     .on('broadcast', { event: 'cursor-pos' }, payload => {
//       const email = payload.payload.user.email || 'noEmail';
//       const cursor = document.getElementById(`cursor-${email}`) || createCursor(email);
//       cursor.style.transform = `translate(${payload.payload.x - 10}px, ${payload.payload.y - 10}px)`;
//
//       console.log('Cursor position received!', payload);
//     })
//     .subscribe(status => {
//       if (status === 'SUBSCRIBED') {
//         console.log('Subscribed');
//       }
//     });
// });
