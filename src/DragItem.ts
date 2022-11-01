export interface ListDragItem {
  id: string;
  label: string;
  type: "LIST";
}
export interface TaskDragItem {
  id: string;
  label: string;
  listId: string
  type: "TASK";
}

export type DragItem = TaskDragItem | ListDragItem