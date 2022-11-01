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
}

export const List = ({ title, id }: ListProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const cards = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { dragRef } = useItemDrag({ type: "LIST", id, label: title });
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

  dragRef(drop(ref));

  return (
    <ListContainer ref={ref} isHidden={isHidden(draggedItem, "LIST", id)}>
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
