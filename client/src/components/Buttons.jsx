import styled from "styled-components";

const slectedSelctor = props => (props.selected ? "brightness(130%)" : "");

export const ButtonPrimary = styled.button`
  padding: 1rem;
  border-radius: 2px;
  border: none;
  font-family: var(--primary-font-family);
  background-color: var(--accent-primary-light);
  color: var(--bg-dark);
  transition: 0.2s;
  min-width: 10em;
  height: 50px;
  cursor: pointer;
  filter: ${slectedSelctor} drop-shadow(2px 2px 2px #ddd);

  &:hover {
    filter: brightness(110%) drop-shadow(4px 4px 2px #ddd);
  }
  &:active {
    background-color: var(--accent-primary);
  }
  &:focus {
    outline: none;
  }
`;
