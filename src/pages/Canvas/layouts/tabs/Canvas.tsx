import React from "react";

const Canvas: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return <div {...props}>Canvas</div>;
};

export default Canvas;
