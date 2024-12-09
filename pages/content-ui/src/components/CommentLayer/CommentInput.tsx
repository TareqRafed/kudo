import { Button } from '@extension/ui';
import { Crop, Send } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onCreate: (val: string) => void;
}

const CommentInput = ({ onCreate }: Props) => {
  const [comment, setComment] = useState('');

  return (
    <div className="dark relative flex w-64 flex-col overflow-hidden rounded-md border">
      <textarea
        onChange={e => setComment(e.target.value)}
        value={comment}
        placeholder="Leave a comment..."
        className="w-full resize-none px-2 py-3"
      />
      <div id="toolbar" className="bg-background flex justify-end space-x-2 border-t p-1">
        <Button size={'sm'} variant={'ghost'}>
          <Crop />
        </Button>

        <Button onClick={() => onCreate(comment)} size={'sm'} variant={'ghost'}>
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default CommentInput;
