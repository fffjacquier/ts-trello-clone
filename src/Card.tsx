import { CardContainer } from "./styles";

interface CardProps {
  label: string;
  id: string
}

export const Card = ({ label }: CardProps) => (
  <CardContainer>{label}</CardContainer>
);
