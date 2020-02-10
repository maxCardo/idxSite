import React, { Fragment } from "react";
import { CenteredContainer } from "../styled-components/Containers";
import SearchBar from "../components/SearchBar";

/**
 * @type {React.FC}
 */
const Landing = () => (
  <CenteredContainer>
    <SearchBar />
  </CenteredContainer>
);

export default Landing;
