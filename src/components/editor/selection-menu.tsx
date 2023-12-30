import { BubbleMenu, Editor } from "@tiptap/react";
import { ToolbarInline } from "./toolbar-inline";

type Props = {
  editor: Editor;
};

export function SelectionMenu({ editor }: Props) {
  return (
    <BubbleMenu editor={editor} tippyOptions={{ zIndex: 99 }}>
      {shouldShowBubbleMenu(editor) ? (
        <div className='flex bg-background gap-1 p-1 shadow-md border border-border rounded-md'>
          <ToolbarInline editor={editor} />
        </div>
      ) : null}
    </BubbleMenu>
  );
}

export function shouldShowBubbleMenu(editor: Editor) {
  const canBold = editor.can().chain().focus().toggleBold().run();
  const canItalic = editor.can().chain().focus().toggleItalic().run();
  const canStrike = editor.can().chain().focus().toggleStrike().run();
  return canBold || canItalic || canStrike;
}
