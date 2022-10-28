import { TaskContainer } from "./styles";

interface TaskProps {
  label: string;
  id: string
}

export const Task = ({ label }: TaskProps) => (
  <TaskContainer>{label}</TaskContainer>
);
