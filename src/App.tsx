import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer } from "./styles";

export const App = () => (
  <AppContainer>
    <Column title="To Do:" />
    <AddNewItem
      toggleButtonText="+ Add item"
      onAdd={(text) => console.log("item added: ", text)}
    ></AddNewItem>
  </AppContainer>
);
