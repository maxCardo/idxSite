import styled from "styled-components";

export const ParalaxContainer = styled.main`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`;

const Section = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const urlSelector = props => props.imageUrl;
const filterSelector = props => props.imageFilter;

export const ParalaxSection = styled(Section)`
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1px) scale(1.5);
    background-image: url(${urlSelector});
    background-size: cover;
    z-index: -1;
    filter: ${filterSelector};
  }
`;

const backgroundSelector = props => props.background;

export const StaticSection = styled(Section)`
  background: ${backgroundSelector};
`;
