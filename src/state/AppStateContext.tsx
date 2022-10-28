import { createContext, Dispatch, FC, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { Action } from "./actions";
import { appStateReducer, IAppState, Task } from "./appStateReducer";

const appData: IAppState = {
  lists: [
    {
      id: "0",
      label: "To Do",
      tasks: [{ id: "a0", label: "Scaffold the chimney app" }],
    },
    {
      id: "1",
      label: "In Progress",
      tasks: [{ id: "a1", label: "Learning Typescript" }],
    },
    {
      id: "2",
      label: "Done",
      tasks: [{ id: "a2", label: "Learn React + RTK" }],
    },
  ],
};

interface AppStateContextProps extends IAppState {
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) =>
    lists.find((list) => list.id === id)?.tasks || [];

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
