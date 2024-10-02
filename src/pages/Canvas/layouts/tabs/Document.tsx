import Editor from "@/components/ui/Editor/Editor";
import useTheme from "@/hooks/useSelectTheme";
import { cn } from "@/lib/utils";
import { Block } from "@blocknote/core";
import { useState } from "react";

const initialContent = [
  {
    type: "heading",
    content: "Untitled Document",
    props: {
      level: 2,
    },
  },
  {
    type: "paragraph",
  },
] as unknown as Block[];

const Document: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const [data, setData] = useState<Block[]>(initialContent);

  return (
    <div {...props} className={cn("mt-2 px-3", props.className)}>
      <Editor data={data} onChange={(_data) => setData(_data)} />
    </div>
  );
};

export default Document;
