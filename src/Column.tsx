import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  title: string;
}

export const Column = ({ title }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <Card label="First" />
      <Card label="Second" />

      <AddNewItem
        toggleButtonText="+ Add item"
        onAdd={(text) => console.log("item added:", text)}
        hasDarkFont
      ></AddNewItem>
    </ColumnContainer>
  );
};
