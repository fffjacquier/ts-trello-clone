import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #3080ab;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) => (props.isPreview) ? "rotate(12deg)" : null };
  opacity: ${(props) => (props.isHidden) ? 0.05 : 1 };
`;

export const ListContainer = styled(DragPreviewContainer)`
  background-color: #ebecee;
  width: 300px;
  padding: 8px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  flex-grow: 0;
`;

export const ListTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const TaskContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
  max-width: 300px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  box-shadow: #091e4240 0 1px 0 0;
`;

type AddItemButtonProps = {
  hasDarkFont?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.hasDarkFont ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px;
  text-align: inherit;
  transition: background 100ms ease-in-out;
  width: 100%;
  &:hover {
    background-color: #ffffff51;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
export const NewItemButton = styled.button`
  background-color: #5a4;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0 1px 0 0;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  width: 100%;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

type DragPreviewWrapperProps = {
  position: {
    x: number
    y: number
  }
}

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y }}) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`
    }
  })
)<DragPreviewWrapperProps>``;