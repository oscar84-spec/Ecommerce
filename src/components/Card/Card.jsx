import { Link } from "react-router-dom";
import {
  CardButton,
  CardText,
  CardTitle,
  CardContainer,
} from "../../assets/styledComponents/styledCards";

const Card = ({ title, text, button, color, route }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
    <CardButton $color={color}>
      <Link to={route}>{button}</Link>
    </CardButton>
  </CardContainer>
);

export default Card;
