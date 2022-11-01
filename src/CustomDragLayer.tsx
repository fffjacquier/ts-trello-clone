import { useDragLayer } from "react-dnd";
import { List } from "./List";
import { useAppState } from "./state/context";
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";
import { Task } from "./Task";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "LIST" ? (
          <List id={draggedItem.id} title={draggedItem.label} isPreview></List>
        ) : (
          <Task
            listId={draggedItem.listId}
            id={draggedItem.id}
            label={draggedItem.label}
            isPreview
          ></Task>
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
