import { findItemIndexById } from "../utils/arrayUtils";
import { uniqueId } from "../utils/uniqueId";
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
  draft: IAppState,
  action: Action
): IAppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({
        id: uniqueId(),
        label: action.payload,
        tasks: [],
      });
      break;
    }

    case "ADD_TASK": {
      const { label, listId } = action.payload
      const targetedListIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetedListIndex].tasks.push({
        id: uniqueId(),
        label
      });

      break;
    }
  }
};
