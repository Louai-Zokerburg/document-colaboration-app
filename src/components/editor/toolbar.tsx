import { Editor } from "@tiptap/react";
import { ToolbarAlignment } from "./toolbar-alignment";
import { ToolbarBlock } from "./toolbar-block";
import { ToolbarCommands } from "./toolbar-commands";
import { ToolbarHeadings } from "./toolbar-headings";
import { ToolbarInline } from "./toolbar-inline";

type Props = {
  editor: Editor;
};

export function Toolbar({ editor }: Props) {
  return (
    <div className='flex items-center flex-wrap flex-shrink gap-1'>
      <div className='toolbarSection'>
        <ToolbarCommands editor={editor} />
      </div>
      <div className='toolbarSection'>
        <ToolbarHeadings editor={editor} />
      </div>
      <div className='toolbarSection'>
        <ToolbarInline editor={editor} />
      </div>

      <div className='toolbarSection'>
        <ToolbarAlignment editor={editor} />
      </div>
      <div className='toolbarSection'>
        <ToolbarBlock editor={editor} />
      </div>
   
    </div>
  );
}
