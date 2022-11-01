import { AddNewItem } from "./AddNewItem";
import { Task } from "./Task";
import { addTask, moveList } from "./state/actions";
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
  const cards = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "LIST", id, label: title });
  const [, drop] = useDrop({
    accept: "LIST",
    hover: throttle(250, () => {
      if (!draggedItem) return;
      if (draggedItem.type === "LIST") {
        if (draggedItem.id === id) return;

        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  drag(drop(ref));

  return (
    <ListContainer ref={ref} isPreview={isPreview} isHidden={isHidden(draggedItem, "LIST", id, isPreview)}>
      <ListTitle>{title}</ListTitle>
      {cards.map((card) => (
        <Task label={card.label} key={card.id} id={card.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add item"
        onAdd={(text) => dispatch(addTask(text, id))}
        hasDarkFont
      ></AddNewItem>
    </ListContainer>
  );
};
