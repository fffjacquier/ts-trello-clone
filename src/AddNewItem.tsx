import { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  hasDarkFont?: boolean;
}

export const AddNewItem = ({ onAdd, toggleButtonText, hasDarkFont }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <NewItemForm onAdd={(text) => { onAdd(text); setShowForm(false);} } />
  }

  return <AddItemButton hasDarkFont={hasDarkFont} onClick={() => setShowForm(true)}>
    {toggleButtonText}
  </AddItemButton>
};
