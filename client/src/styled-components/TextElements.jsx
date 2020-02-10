import styled from "styled-components";

export const HeroTitle = styled.h1`
  font-family: var(--primary-font-family);
  font-weight: 400;
  font-size: var(--font-size-large);
  color: var(--bg-lighter);
  padding: 0;
  margin: 1rem;
  margin-right: 0;
`;

export const SubTitle = styled.h2`
  font-family: var(--primary-font-family);
  font-weight: 300;
  font-size: var(--font-size-medium);
  color: var(--bg-lighter);
`;

export const Text = styled.p`
  font-family: var(--primary-font-family);
  font-weight: 100;
  font-size: var(--font-size-small);
  color: var(--bg-lighter);
`;

export const NavLink = styled.a`
  font-family: var(--primary-font-family);
  font-weight: 300;
  font-size: var(--font-size-small);
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

export const NoStyleNavLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const onLight = elm => styled(elm)`
  color: var(--bg-darker);
`;

export const SubTitleOnLight = onLight(SubTitle);
export const TextOnLight = onLight(Text);
