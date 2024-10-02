import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { HTMLAttributes } from "react";
import { Block } from "@blocknote/core";

export type BlockNoteViewProps = {
  editable?: boolean;
  onSelectionChange?: () => void;
  onChange?: () => void;
  formattingToolbar?: boolean;
  linkToolbar?: boolean;
  sideMenu?: boolean;
  slashMenu?: boolean;
  emojiPicker?: boolean;
  filePanel?: boolean;
  tableHandles?: boolean;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type EditorProps = {
  data: Block[];
  onChange: (data: Block[]) => void;
  editorProps?: BlockNoteViewProps;
};

export default function Editor(props: EditorProps) {
  const editor = useCreateBlockNote({
    initialContent: props.data,
  });

  return (
    <BlockNoteView
      editor={editor}
      className="w-full h-full overflow-auto"
      theme={
        localStorage.getItem("vite-ui-theme") === "dark" ? "dark" : "light"
      }
      onChange={() => props.onChange(editor.document)}
      {...props.editorProps}
    />
  );
}
