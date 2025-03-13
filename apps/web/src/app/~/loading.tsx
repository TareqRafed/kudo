import { Loader } from '@kudo/ui';

const Loading = () => (
  <div className="h-[30vh] w-full flex justify-center items-center">
    <Loader variant={'spinner'} />
  </div>
);

export default Loading;
