import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";
import { addList } from './state/actions'

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {
        lists.map(list => (
          <Column title={list.label} key={list.id} id={list.id} />
        ))
      }
      <AddNewItem
        toggleButtonText="+ Add new list"
        onAdd={(text) => dispatch(addList(text))}
      ></AddNewItem>
    </AppContainer>
  );
};
