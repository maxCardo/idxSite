import React from "react";
import styled from "styled-components";
import { TextOnLight } from "./TextElements";

const ContainerStyles = styled.div`
  grid-column: span 1;
  grid-row: span 1;
  background-color: var(--bg-light);
  border-radius: 10px;
  filter: drop-shadow(5px 5px 5px #111);
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    padding: 10px;
  }
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: contain;
  border-bottom: 1px solid #000;
`;

const PropertyText = styled(TextOnLight)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PropertyCard = ({
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image = "house.png"
}) => (
  <ContainerStyles>
    <PropertyImage src={image} />
    <PropertyText style={{ margin: "10px" }}>{text}</PropertyText>
  </ContainerStyles>
);

export default PropertyCard;
