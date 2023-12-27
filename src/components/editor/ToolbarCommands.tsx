import { Editor } from "@tiptap/react";
import { RedoIcon, UndoIcon } from "@/icons";
import { Button } from "@/primitives/Button";

type Props = {
  editor: Editor;
};

export function ToolbarCommands({ editor }: Props) {
  return (
    <>
      <Button
        className="p-4"
        variant="subtle"
        onClick={() => editor.chain().undo().run()}
        disabled={!editor.can().chain().undo().run()}
        data-active={editor.isActive("bulletList") ? "is-active" : undefined}
        aria-label="Undo"
      >
        <UndoIcon className="w-5 h-5" />
      </Button>

      <Button
        className="p-4"
        variant="subtle"
        onClick={() => editor.chain().redo().run()}
        disabled={!editor.can().chain().redo().run()}
        data-active={editor.isActive("orderedList") ? "is-active" : undefined}
        aria-label="Redo"
      >
        <RedoIcon className="w-5 h-5" />
      </Button>
    </>
  );
}
