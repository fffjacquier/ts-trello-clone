import { useDrag } from "react-dnd";
import { DragItem } from "../DragItem";
import { setDraggedItem } from "../state/actions";
import { useAppState } from "../state/context";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, dragRef] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });

  return { dragRef };
};
