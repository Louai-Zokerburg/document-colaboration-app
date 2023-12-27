import { Editor } from "@tiptap/react";
import { BoldIcon, ItalicIcon, StrikethroughIcon } from "@/icons";
import { Button } from "@/primitives/Button";

type Props = {
  editor: Editor;
};

export function ToolbarInline({ editor }: Props) {
  return (
    <>
      <Button
        variant="subtle"
        className="p-4"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold") ? "is-active" : undefined}
        aria-label="Bold"
      >
        <BoldIcon className="w-5 h-5" />
      </Button>

      <Button
        variant="subtle"
        className="p-4"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic") ? "is-active" : undefined}
        aria-label="Italic"
      >
        <ItalicIcon className="w-5 h-5" />
      </Button>

      <Button
        variant="subtle"
        className="p-4"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        data-active={editor.isActive("strike") ? "is-active" : undefined}
        aria-label="Strikethrough"
      >
        <StrikethroughIcon className="w-5 h-5" />
      </Button>
    </>
  );
}
