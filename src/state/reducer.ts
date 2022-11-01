import { DragItem } from "../DragItem";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
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
  draggedItem: DragItem | null;
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
      const { label, listId } = action.payload;
      const targetedListIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetedListIndex].tasks.push({
        id: uniqueId(),
        label,
      });
      break;
    }

    case "MOVE_LIST": {
      const { draggedId, hoverId } = action.payload;
      const draggedIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);
      draft.lists = moveItem(draft.lists, draggedIndex, hoverIndex);

      break;
    }

    case "MOVE_TASK": {
      const { draggedItemId, hoveredItemId, sourceListId, targetListId } =
        action.payload;

      const sourceListIndex = findItemIndexById(draft.lists, sourceListId);
      const targetedListIndex = findItemIndexById(draft.lists, targetListId);
      const dragIndex = findItemIndexById(
        draft.lists[sourceListIndex].tasks,
        draggedItemId
      );
      const hoverIndex = hoveredItemId
        ? findItemIndexById(draft.lists[targetedListIndex].tasks, hoveredItemId)
        : 0;

      const tasks = draft.lists[sourceListIndex].tasks;
      const item = tasks[dragIndex];
      // remove task from source list
      tasks.splice(dragIndex, 1);
      // add task to target list
      draft.lists[targetedListIndex].tasks.splice(hoverIndex, 0, item);

      break;
    }

    case "SET_DRAGGED_ITEM": {
      draft.draggedItem = action.payload;

      break;
    }

    default: {
      break;
    }
  }
};
