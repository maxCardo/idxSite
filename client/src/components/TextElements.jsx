import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroTitle = styled.h1`
  font-family: var(--primary-font-family);
  font-weight: 400;
  font-size: 36pt;
  color: var(--bg-lighter);
  padding: 0;
  margin: 1rem;
  margin-right: 0;
`;

export const SubTitle = styled.h2`
  font-family: var(--primary-font-family);
  font-weight: 300;
  font-size: 24pt;
  color: var(--bg-lighter);
`;

export const Text = styled.p`
  font-family: var(--primary-font-family);
  font-weight: 100;
  font-size: 14pt;
  color: var(--bg-lighter);
`;

export const NavLink = styled(Link)`
  font-family: var(--primary-font-family);
  font-weight: 300;
  font-size: 14pt;
  color: var(--bg-lighter);
  margin: 1rem;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: var(--accent-primary-light);
    text-decoration: underline;
  }

  &:visited {
  }
`;

export const NoStyleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const onLight = elm => styled(elm)`
  color: var(--bg-darker);
`;

export const SubTitleOnLight = onLight(SubTitle);
export const TextOnLight = onLight(Text);
