import { Editor } from "@tiptap/react";
import { Button } from "../ui/button";

import { LuUndo2, LuRedo2 } from "react-icons/lu";


type Props = {
  editor: Editor;
};

export function ToolbarCommands({ editor }: Props) {
  return (
    <>
      <Button
        variant="ghost"
        size='icon'
        onClick={() => editor.chain().undo().run()}
        disabled={!editor.can().chain().undo().run()}
        data-active={editor.isActive("bulletList") ? "is-active" : undefined}
        aria-label="Undo"
      >
        <LuUndo2 size={16} />
      </Button>

      <Button
        variant="ghost"
        size='icon'
        onClick={() => editor.chain().redo().run()}
        disabled={!editor.can().chain().redo().run()}
        data-active={editor.isActive("orderedList") ? "is-active" : undefined}
        aria-label="Redo"
      >
        <LuRedo2 size={16}/>
      </Button>
    </>
  );
}
