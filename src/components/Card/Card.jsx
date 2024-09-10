import {
  CardButton,
  CardText,
  CardTitle,
  CardContainer,
} from "../../assets/styledComponents/styledCards";

const Card = ({ title, text, button, color }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardButton $color={color}>{button}</CardButton>
    </CardContainer>
  );
};

export default Card;
