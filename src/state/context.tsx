import { createContext, Dispatch, FC, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { uniqueId } from "../utils/uniqueId";

import { Action } from "./actions";
import { appStateReducer, IAppState, Task } from "./reducer";

const appData: IAppState = {
  lists: [
    {
      id: uniqueId(),
      label: "To Do",
      tasks: [{ id: uniqueId(), label: "Scaffold the chimney app" }],
    },
    {
      id: uniqueId(),
      label: "In Progress",
      tasks: [{ id: uniqueId(), label: "Learning Typescript" }],
    },
    {
      id: uniqueId(),
      label: "Done",
      tasks: [{ id: uniqueId(), label: "Learn React + RTK" }],
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
