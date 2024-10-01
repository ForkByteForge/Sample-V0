import React from "react";

const Document: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return <div {...props}>Document</div>;
};

export default Document;
