import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  title: string;
  id: string;
}

export const Column = ({ title, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState()
  const cards = getTasksByListId(id)

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {
        cards.map(card => (
            <Card label={card.label} key={card.id} id={card.id} />
        ))
      }

      <AddNewItem
        toggleButtonText="+ Add item"
        onAdd={(text) => console.log("item added:", text)}
        hasDarkFont
      ></AddNewItem>
    </ColumnContainer>
  );
};
