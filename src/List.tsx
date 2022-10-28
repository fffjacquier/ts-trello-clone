import { AddNewItem } from "./AddNewItem";
import { Task } from "./Task";
import { addTask } from "./state/actions";
import { useAppState } from "./state/context";
import { ListContainer, ListTitle } from "./styles";

interface ListProps {
  title: string;
  id: string;
}

export const List = ({ title, id }: ListProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const cards = getTasksByListId(id);

  return (
    <ListContainer>
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
