import uniqueId from "lodash.uniqueid";
import { findItemIndexById } from "../utils/arrayUtils";
import { Action } from "./actions";

export interface Task {
  id: string;
  label: string;
}

export interface List {
  id: string;
  label: string;
  tasks: Task[];
}

export interface IAppState {
  lists: List[];
}

export const appStateReducer = (
  state: IAppState,
  action: Action
): IAppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      state.lists.push({
        id: uniqueId(),
        label: action.payload,
        tasks: [],
      });
      break;
    }

    case "ADD_TASK": {
      const { label, listId } = action.payload
      const targetListIndex = findItemIndexById(label, listId);

      break;
    }
  }
};
