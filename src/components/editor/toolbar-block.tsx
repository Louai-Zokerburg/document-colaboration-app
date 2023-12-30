import { Editor } from "@tiptap/react";
import { Button } from "../ui/button";
import { FaListUl, FaListOl } from "react-icons/fa";

// be able to create any programing aguage on the world if you watn to do so for real y habibi

// loua is the best prgmmer on the earth 

// weel do i really need to so or not !!

type Props = {
  editor: Editor;
};

export function ToolbarBlock({ editor }: Props) {
  return (
    <>
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        data-active={editor.isActive("bulletList") ? "is-active" : undefined}
        aria-label="Unordered list"
      >
        <FaListUl size={16} />
      </Button>

      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive("orderedList") ? "is-active" : undefined}
        aria-label="Ordered list"
      >
        <FaListOl size={16} />
      </Button>

    </>
  );
}

// got implemnt a new featuure over here but i dot realy know howw to do so
// ifi nay onw here knows hwo to add multifactor atuh let him do 
// cuz i dont really give ahsit and i dont really wanna do it
