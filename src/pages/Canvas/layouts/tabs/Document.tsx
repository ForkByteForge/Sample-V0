import Editor from "@/components/ui/Editor/Editor";
import { cn } from "@/lib/utils";
import { ETabList } from "@/types/canvasHeader.type";
import { Block } from "@blocknote/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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

  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div
      {...props}
      className={
        (cn("mt-2 px-3"),
        query.get("tab") === ETabList.DOCUMENT
          ? "flex mx-auto items-center justify-center max-w-5xl"
          : props.className)
      }
    >
      <Editor data={data} onChange={(_data) => setData(_data)} />
    </div>
  );
};

export default Document;
