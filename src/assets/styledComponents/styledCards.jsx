import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  padding: 20px;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 1024px) {
    height: 300px;
  }
`;
export const CardTitle = styled.h3`
  font: 500 1.5rem "Montserrat", sans-serif;
  text-align: center;
  margin-bottom: 10px;
  color: var(--letraColor);
`;
export const CardText = styled.p`
  font: 400 1rem "Hind Madurai", sans-serif;
  text-align: center;
  color: var(--letraColor);
`;
export const CardButton = styled.button`
  background-color: ${({ $color }) => $color};
  color: white;
  font: 500 1rem "Alef", sans-serif;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--btnHover);
    color: var(--letraColor);
  }
`;
