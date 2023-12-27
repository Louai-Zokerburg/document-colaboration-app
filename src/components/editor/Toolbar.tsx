import { Editor } from "@tiptap/react";
import { ToolbarInlineAdvanced } from "./TextInlineAdvanced";
import { ToolbarAlignment } from "./ToolbarAlignment";
import { ToolbarBlock } from "./ToolbarBlock";
import { ToolbarCommands } from "./ToolbarCommands";
import { ToolbarHeadings } from "./ToolbarHeadings";
import { ToolbarInline } from "./ToolbarInline";
import { ToolbarMedia } from "./ToolbarMedia";

type Props = {
  editor: Editor;
};

export function Toolbar({ editor }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex gap-2">
        <ToolbarCommands editor={editor} />
      </div>
      <div className="flex gap-2">
        <ToolbarHeadings editor={editor} />
      </div>
      <div className="flex gap-2">
        <ToolbarInline editor={editor} />
      </div>
      <div className="flex gap-2">
        <ToolbarInlineAdvanced editor={editor} />
      </div>
      <div className="flex gap-2">
        <ToolbarAlignment editor={editor} />
      </div>
      <div className="flex gap-2">
        <ToolbarBlock editor={editor} />
      </div>
      <div className="flex gap-2">
        <ToolbarMedia editor={editor} />
      </div>
    </div>
  );
}
