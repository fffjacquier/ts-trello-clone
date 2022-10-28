import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

export const App = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {
        lists.map(list => (
          <Column title={list.label} key={list.id} id={list.id} />
        ))
      }
      <AddNewItem
        toggleButtonText="+ Add item"
        onAdd={(text) => console.log("item added: ", text)}
      ></AddNewItem>
    </AppContainer>
  );
};
