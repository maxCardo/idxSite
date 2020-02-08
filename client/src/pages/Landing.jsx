import React, { Fragment } from "react";
import {
  ParalaxContainer,
  ParalaxSection,
  StaticSection
} from "../components/ParalaxContainer";
import { SubTitle } from "../components/TextElements";
import SearchBar from "../components/SearchBar";

/**
 * @type {React.FC}
 */
const Landing = () => (
  <ParalaxContainer>
    <ParalaxSection
      imageUrl={"ht_pit_11.jpg"}
      imageFilter={"hue-rotate(-30deg);"}
    >
      <SearchBar />
    </ParalaxSection>
    <StaticSection background={"#000"}>
      <SubTitle>test 2</SubTitle>
    </StaticSection>
  </ParalaxContainer>
);

export default Landing;
