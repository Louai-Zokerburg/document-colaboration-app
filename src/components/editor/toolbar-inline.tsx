import { Editor } from "@tiptap/react";
import { FaBold, FaItalic, FaStrikethrough  } from "react-icons/fa";
import { Toggle } from "../ui/toggle";

type Props = {
  editor: Editor;
};

export function ToolbarInline({ editor }: Props) {
  return (
    <>
      <Toggle
        variant="default"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold") ? "is-active" : undefined}
        aria-label="Bold"
      >
        <FaBold size={16} />
      </Toggle>

      <Toggle
        variant="default"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic") ? "is-active" : undefined}
        aria-label="Italic"
      >
        <FaItalic size={16} />

      </Toggle>

      <Toggle
        variant="default"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        data-active={editor.isActive("strike") ? "is-active" : undefined}
        aria-label="Strikethrough"
      >
        <FaStrikethrough   size={16} />

      </Toggle>
    </>
  );
}
