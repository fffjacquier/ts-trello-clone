import { AddNewItem } from "./AddNewItem";
import { Task } from "./Task";
import { addTask, moveList, moveTask, setDraggedItem } from "./state/actions";
import { useAppState } from "./state/context";
import { ListContainer, ListTitle } from "./styles";
import { useRef } from "react";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "./utils/isHidden";

interface ListProps {
  title: string;
  id: string;
  isPreview?: boolean;
}

export const List = ({ title, id, isPreview }: ListProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: "LIST", id, label: title });

  const [, drop] = useDrop({
    accept: ["LIST", "TASK"],
    hover: throttle(250, () => {
      if (!draggedItem) return;
      if (draggedItem.type === "LIST") {
        if (draggedItem.id === id) return;

        dispatch(moveList(draggedItem.id, id));
      } else if (draggedItem.type === "TASK") {
        if (draggedItem.listId === id) return;
        if (tasks.length) return;

        dispatch(moveTask(draggedItem.id, null, draggedItem.listId, id));
        dispatch(setDraggedItem({ ...draggedItem, listId: id }));
      }
    }),
  });

  drag(drop(ref));

  return (
    <ListContainer ref={ref} isPreview={isPreview} isHidden={isHidden(draggedItem, "LIST", id, isPreview)}>
      <ListTitle>{title}</ListTitle>
      {tasks.map((card) => (
        <Task label={card.label} key={card.id} id={card.id} listId={id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add item"
        onAdd={(text) => dispatch(addTask(text, id))}
        hasDarkFont
      ></AddNewItem>
    </ListContainer>
  );
};
