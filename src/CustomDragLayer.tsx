import { useDragLayer } from "react-dnd";
import { List } from "./List";
import { useAppState } from "./state/context";
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
    <DragPreviewWrapper position={currentOffset}>
      <List id={draggedItem.id} title={draggedItem.label} isPreview></List>
    </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
