import { AddNewItem } from "./AddNewItem";
import { List } from "./List";
import { useAppState } from "./state/context";
import { AppContainer } from "./styles";
import { addList } from './state/actions'

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {
        lists.map(list => (
          <List title={list.label} key={list.id} id={list.id} />
        ))
      }
      <AddNewItem
        toggleButtonText="+ Add new list"
        onAdd={(text) => dispatch(addList(text))}
      ></AddNewItem>
    </AppContainer>
  );
};
