export interface ListDragItem {
  id: string;
  label: string;
  type: "LIST";
}

export interface DragItem extends ListDragItem {}