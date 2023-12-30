import { Editor } from "@tiptap/react";
import { FaAlignJustify, FaAlignLeft, FaAlignRight, FaAlignCenter } from "react-icons/fa";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

type Props = {
  editor: Editor;
};

export function ToolbarAlignment({ editor }: Props) {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem
        value="align_left"
        variant="default"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        disabled={!editor.can().chain().focus().setTextAlign("left").run()}
        data-active={
          editor.isActive({ textAlign: "left" }) ? "is-active" : undefined
        }
        aria-label="Align left"
      >
        <FaAlignLeft size={16} />
      </ToggleGroupItem >

      <ToggleGroupItem
        value="align_center"
        variant="default"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        disabled={!editor.can().chain().focus().setTextAlign("center").run()}
        data-active={
          editor.isActive({ textAlign: "center" }) ? "is-active" : undefined
        }
        aria-label="Align center"
      >
        <FaAlignCenter size={16} />
      </ToggleGroupItem >

      <ToggleGroupItem
        value="align_right"
        variant="default"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        disabled={!editor.can().chain().focus().setTextAlign("right").run()}
        data-active={
          editor.isActive({ textAlign: "right" }) ? "is-active" : undefined
        }
        aria-label="Align right"
      >
        <FaAlignRight size={16} />
      </ToggleGroupItem >

      <ToggleGroupItem
        value="align_justify"
        variant="default"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        disabled={!editor.can().chain().focus().setTextAlign("justify").run()}
        data-active={
          editor.isActive({ textAlign: "justify" }) ? "is-active" : undefined
        }
        aria-label="Justify"
      >
        <FaAlignJustify size={16} />
      </ToggleGroupItem >
    </ToggleGroup>
  );
}
