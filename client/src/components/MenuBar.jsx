import React from "react";
import styled from "styled-components";
import { HeroTitle, Text, NavLink, NoStyleLink } from "./TextElements";

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

/**
 * @type {React.FC}
 */
export default () => (
  <MenuBar>
    <NoStyleLink to="/">
      <Group>
        <HeroTitle>MaxCardo</HeroTitle>
        <Text>ltd</Text>
      </Group>
    </NoStyleLink>
    <Group>
      <NavLink to="/map-search">Map Search</NavLink>
      <NavLink>Menu Link 2</NavLink>
      <NavLink>Menu Link 3</NavLink>
    </Group>
  </MenuBar>
);
