const ADD_TASK = "ADD_TASK";
const ADD_LIST = "ADD_LIST";
const MOVE_LIST = "MOVE_LIST";

export type Action =
  | { type: typeof ADD_LIST; payload: string }
  | { type: typeof ADD_TASK; payload: { label: string; listId: string } }
  | { type: typeof MOVE_LIST; payload: { draggedId: string; hoverId: string } };

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
