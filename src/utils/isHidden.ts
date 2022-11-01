import { DragItem } from "../DragItem";

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
) =>
  Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  );
