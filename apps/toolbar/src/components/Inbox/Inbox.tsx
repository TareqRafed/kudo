import useToolbarStore from '@src/store/toolbar';

const Inbox = () => {
  const { toolbar } = useToolbarStore();

  if (!toolbar.inbox.inUse) return <></>;
  return (
    <div className="z-max bg-background dark fixed right-10 top-10 h-[90%] rounded border p-2">
      This is the inbox, can you see it?
    </div>
  );
};

export default Inbox;
