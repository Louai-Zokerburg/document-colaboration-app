import { Editor } from "@tiptap/react";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "@/icons";
import { Button } from "@/primitives/Button";

type Props = {
  editor: Editor;
};

export function ToolbarAlignment({ editor }: Props) {
  return (
    <>
      <Button
        variant="subtle"
        className="p-4"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        disabled={!editor.can().chain().focus().setTextAlign("left").run()}
        data-active={
          editor.isActive({ textAlign: "left" }) ? "is-active" : undefined
        }
        aria-label="Align left"
      >
        <AlignLeftIcon className="w-5 h-5" />
      </Button>

      <Button
        variant="subtle"
        className="p-4"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        disabled={!editor.can().chain().focus().setTextAlign("center").run()}
        data-active={
          editor.isActive({ textAlign: "center" }) ? "is-active" : undefined
        }
        aria-label="Align center"
      >
        <AlignCenterIcon className="w-5 h-5" />
      </Button>

      <Button
        variant="subtle"
        className="p-4"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        disabled={!editor.can().chain().focus().setTextAlign("right").run()}
        data-active={
          editor.isActive({ textAlign: "right" }) ? "is-active" : undefined
        }
        aria-label="Align right"
      >
        <AlignRightIcon className="w-5 h-5" />
      </Button>

      <Button
        variant="subtle"
        className="p-4"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        disabled={!editor.can().chain().focus().setTextAlign("justify").run()}
        data-active={
          editor.isActive({ textAlign: "justify" }) ? "is-active" : undefined
        }
        aria-label="Justify"
      >
        <AlignJustifyIcon className="w-5 h-5" />
      </Button>
    </>
  );
}
