import React, { Fragment } from "react";
import { CenteredContainer } from "../styled-components/Containers";
import { SubTitle } from "../styled-components/TextElements";
import SearchBar from "../components/SearchBar";

/**
 * @type {React.FC}
 */
const Landing = () => (
  <ParalaxContainer>
    <SearchBar />
  </ParalaxContainer>
);

export default Landing;
