import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { BoldIcon, ItalicIcon, Send } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import { createButton, Editor, EditorProvider, Toolbar } from 'react-simple-wysiwyg';

const BtnItalic = createButton('Italic', <ItalicIcon />, 'italic');
const BtnBold = createButton('Bold', <BoldIcon />, 'bold');

interface Props extends ComponentPropsWithoutRef<typeof Editor> {
  onCreate: (val: string) => void;
}

const CommentInput = ({ onCreate, ...rest }: Props) => {
  const [comment, setComment] = useState('');

  return (
    <div className={cn(['relative flex w-full flex-col overflow-hidden', rest.className])}>
      <EditorProvider>
        <Editor
          containerProps={{
            className: 'flex !flex-col-reverse cursor-text !border-none',
          }}
          value={comment}
          placeholder="Leave a comment..."
          onChange={(e) => setComment(e.target.value)}
          className="focus:!outline-none bg-background w-full resize-none px-2 pt-3 text-sm"
          {...rest}
        >
          <Toolbar className="!border-none" style={{ border: 0, backgroundColor: 'transparent' }}>
            <div className="w-full bg-background flex flex-row items-center justify-between space-x-1 px-2 pb-2 pt-1">
              <div className="flex space-x-1">
                <Button size={'sm'} variant={'ghost'} asChild>
                  <BtnBold className="hover:bg-none" />
                </Button>

                <Button size={'sm'} variant={'ghost'} asChild>
                  <BtnItalic className="hover:bg-none" />
                </Button>
              </div>
              <Button
                disabled={comment.length < 1}
                onClick={() => {
                  setComment('');
                  onCreate(comment);
                }}
                size={'sm'}
                variant={'ghost'}
              >
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
