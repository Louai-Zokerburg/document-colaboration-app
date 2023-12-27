import { Editor } from "@tiptap/react";
import { useState } from "react";
import { CodeBlockIcon, ImageIcon, YouTubeIcon } from "@/icons";
import { Button } from "@/primitives/Button";
import { Input } from "@/primitives/Input";
import { Popover } from "@/primitives/Popover";

type Props = {
  editor: Editor;
};

export function ToolbarMedia({ editor }: Props) {
  function addImage(url: string) {
    if (!url.length) {
      return;
    }

    editor.chain().setImage({ src: url }).run();
  }

  function addYouTube(url: string) {
    if (!url.length) {
      return;
    }

    editor.chain().setYoutubeVideo({ src: url }).run();
  }

  return (
    <>
      <Button
        className="p-4"
        variant="subtle"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        data-active={editor.isActive("codeBlock") ? "is-active" : undefined}
        aria-label="Code block"
      >
        <CodeBlockIcon className="w-5 h-5" />
      </Button>

      <Popover content={<MediaPopover variant="image" onSubmit={addImage} />}>
        <Button
          className="p-4"
          variant="subtle"
          disabled={!editor.can().chain().setImage({ src: "" }).run()}
          data-active={editor.isActive("image") ? "is-active" : undefined}
          aria-label="Image"
        >
          <ImageIcon className="w-5 h-5" />
        </Button>
      </Popover>

      <Popover content={<MediaPopover variant="youtube" onSubmit={addYouTube} />}>
        <Button
          className="p-4"
          variant="subtle"
          disabled={!editor.can().chain().setImage({ src: "" }).run()}
          data-active={editor.isActive("youtube") ? "is-active" : undefined}
          aria-label="YouTube"
        >
          <YouTubeIcon className="w-5 h-5" />
        </Button>
      </Popover>
    </>
  );
}

type MediaPopoverProps = {
  variant: "image" | "youtube";
  onSubmit: (url: string) => void;
};

function MediaPopover({ variant, onSubmit }: MediaPopoverProps) {
  const [value, setValue] = useState("");

  return (
    <form
      className="p-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <label className="text-sm font-medium pb-1" htmlFor="">
        Add {variant === "image" ? "image" : "YouTube"} URL
      </label>
      <div className="flex items-center gap-3">
        <Input
          className="w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="whitespace-nowrap">Add {variant === "image" ? "image" : "video"}</Button>
      </div>
    </form>
  );
}
