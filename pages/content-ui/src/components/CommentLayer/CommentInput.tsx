import { Button, cn } from '@extension/ui';
import { BoldIcon, ItalicIcon, Send } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import { createButton, Editor, EditorProvider, Toolbar } from 'react-simple-wysiwyg';

const BtnItalic = createButton('Italic', <ItalicIcon />, 'italic');
const BtnBold = createButton('Bold', <BoldIcon />, 'bold');

interface Props extends ComponentPropsWithoutRef<'div'> {
  onCreate: (val: string) => void;
}

const CommentInput = ({ onCreate, ...rest }: Props) => {
  const [comment, setComment] = useState('');

  return (
    <div className={cn(['dark relative flex w-96 flex-col overflow-hidden', rest.className])}>
      <EditorProvider>
        <Editor
          onKeyDown={e => {
            if (e.key === 'Escape') return;
            e.stopPropagation();
          }}
          autoFocus
          containerProps={{ className: 'flex flex-col-reverse cursor-text' }}
          value={comment}
          placeholder="Leave a comment..."
          onChange={e => setComment(e.target.value)}
          className="bg-background w-full resize-none px-3 pt-3 text-sm outline-none">
          <Toolbar>
            <div className="bg-background flex flex-row items-center justify-between space-x-1 px-2 pb-2 pt-1">
              <div className="flex space-x-1">
                <Button size={'xs'} variant={'ghost'} asChild>
                  <BtnBold />
                </Button>

                <Button size={'xs'} variant={'ghost'} asChild>
                  <BtnItalic />
                </Button>
              </div>
              <Button
                disabled={comment.length < 1}
                onClick={() => {
                  setComment('');
                  onCreate(comment);
                }}
                size={'xs'}
                variant={'ghost'}>
                <Send className="!size-4" />
              </Button>
            </div>
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default CommentInput;
