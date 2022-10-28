import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  title: string;
  id: string;
}

export const Column = ({ title, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const cards = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {cards.map((card) => (
        <Card label={card.label} key={card.id} id={card.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add item"
        onAdd={(text) => dispatch(addTask(text, id))}
        hasDarkFont
      ></AddNewItem>
    </ColumnContainer>
  );
};
