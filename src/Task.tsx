import { useRef } from "react";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { moveTask, setDraggedItem } from "./state/actions";
import { useAppState } from "./state/context";
import { TaskContainer } from "./styles";
import { isHidden } from "./utils/isHidden";
import { useItemDrag } from "./utils/useItemDrag";

interface TaskProps {
  label: string;
  id: string;
  listId: string;
  isPreview?: boolean;
}

export const Task = ({ label, id, listId, isPreview }: TaskProps) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({
    type: "TASK",
    id,
    label,
    listId,
  });

  const [, drop] = useDrop({
    accept: "TASK",
    hover: throttle(250, () => {
      if (!draggedItem) return;
      if (draggedItem.type !== "TASK") return;
      if (draggedItem.id === id) return;

      dispatch(moveTask(draggedItem.id, id, draggedItem.listId, listId));
      dispatch(setDraggedItem({ ...draggedItem, listId }));
    }),
  });

  drag(drop(ref))

  return (
    <TaskContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden(draggedItem, "TASK", id, isPreview)}
    >
      {label}
    </TaskContainer>
  );
};
