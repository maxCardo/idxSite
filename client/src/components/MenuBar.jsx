import React from "react";
import styled from "styled-components";
import { HeroTitle, Text, NavLink } from "./TextElements";

const MenuBar = styled.nav`
  min-height: 64px;
  padding: 0.25rem;
  background-color: var(--bg-dark);
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
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
    <Group>
      <HeroTitle>MaxCardo</HeroTitle>
      <Text>ltd</Text>
    </Group>
    <Group>
      <NavLink>Menu Link 1</NavLink>
      <NavLink>Menu Link 2</NavLink>
      <NavLink>Menu Link 3</NavLink>
    </Group>
  </MenuBar>
);
