import Document from "./Document";
import Canvas from "./Canvas";
import { useResizable } from "react-resizable-layout";
import { cn } from "@/lib/utils";

/**
 * -------------------------------------------------------------------------------
 * TODO: Implement the following improvements later
 *
 ** - Blur effect to the panel that is being resized
 ** - Hover effect of the separator to indicate that it can be dragged
 ** - Usability of the resizable layout by adding a drag handle to the separator
 ** - Transition effect to the separator when it is dragged
 ** - Add a tooltip to the separator to indicate that the panel can be resized
 ** - Save the last position coordinates of the separator in the local storage
 ** - Add a button to reset the layout to the default position
 * -------------------------------------------------------------------------------
 */

const ResizableWorkflowLayout = () => {
  const { position, isDragging, separatorProps } = useResizable({
    axis: "x",
    initial: document.body.offsetWidth / 1.5,
    min: 150,

    reverse: true,
  });

  return (
    <div className="flex flex-column h-screen bg-dark font-mono color-white overflow-hidden grow">
      <Document className="grow bg-darker grid place-items-center min-w-40" />
      {/* Separator between the two panels which can be dragged to resize the panels */}
      <div
        className={cn(
          "flex-shrink-0 border-r-2 dark:border-neutral-950 border-gray-100 rounded-full transition-colors duration-150 delay-150 ease-in-out hover:bg-blue-400 hover:cursor-col-resize",
          isDragging && "bg-blue-400"
        )}
        {...separatorProps}
      />
      <Canvas
        className={cn(
          "shrink-0 grid place-items-center",
          isDragging && "filter blur-sm dark:bg-[#555555] bg-[#f5f5f5]"
        )}
        style={{ width: position }}
      />
    </div>
  );
};

export default ResizableWorkflowLayout;
