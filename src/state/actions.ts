import { DragItem } from "../DragItem";

const ADD_TASK = "ADD_TASK";
const ADD_LIST = "ADD_LIST";
const MOVE_LIST = "MOVE_LIST";
const MOVE_TASK = "MOVE_TASK";
const SET_DRAGGED_ITEM = "SET_DRAGGED_ITEM";

export type Action =
  | { type: typeof ADD_LIST; payload: string }
  | { type: typeof ADD_TASK; payload: { label: string; listId: string } }
  | { type: typeof MOVE_LIST; payload: { draggedId: string; hoverId: string } }
  | { type: typeof MOVE_TASK; payload: { draggedItemId: string; hoveredItemId: string | null; sourceListId: string; targetListId: string } }
  | { type: typeof SET_DRAGGED_ITEM; payload: DragItem | null };

export const addTask = (label: string, listId: string): Action => ({
  type: ADD_TASK,
  payload: {
    label,
    listId,
  },
});

export const addList = (label: string): Action => ({
  type: ADD_LIST,
  payload: label,
});

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: MOVE_LIST,
  payload: {
    draggedId,
    hoverId,
  },
});

export const moveTask = (draggedItemId: string, hoveredItemId: string | null, sourceListId: string, targetListId: string): Action => ({
  type: MOVE_TASK,
  payload: {
    draggedItemId,
    hoveredItemId,
    sourceListId,
    targetListId
  },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: SET_DRAGGED_ITEM,
  payload: draggedItem,
});
