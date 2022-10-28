import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #3080ab;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const ColumnContainer = styled.div`
  background-color: #ebecee;
  width: 300px;
  padding: 8px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
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
