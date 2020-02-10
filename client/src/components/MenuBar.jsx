import React from "react";
import styled from "styled-components";
import {
  HeroTitle,
  Text,
  NavLink,
  NoStyleNavLink
} from "../styled-components/TextElements";

const MenuBar = styled.nav`
  min-height: 64px;
  padding: 0.25rem;
  background-color: var(--bg-dark);
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: content;
  border-bottom: 1px solid #000;
`;

const Group = styled.span`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const LandingUrl =
  process.env.NODE_ENV === "production"
    ? process.env.PUBLIC_URL
    : process.env.LOCAL_URL;


/**
 * @type {React.FC}
 */
export default () => (
  <MenuBar>
    <NoStyleNavLink href={LandingUrl}>
      <Group>
        <HeroTitle>MaxCardo</HeroTitle>
        <Text>ltd</Text>
      </Group>
    </NoStyleNavLink>
    <Group>
      <NavLink>Map Search</NavLink>
      <NavLink>Menu Link 2</NavLink>
      <NavLink>Menu Link 3</NavLink>
    </Group>
  </MenuBar>
);
