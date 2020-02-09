import React from "react";
import styled from "styled-components";
import MapSearch from "../components/IdxBrokerMapWidget";
import HomeCard from "../components/PropertyCard";

const MapSearchContainer = styled.div`
  @media screen and (max-device-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-device-width: 500px) {
    grid-template-columns: repeat(auto-fit, 220px);
  }
  background-color: var(--bg-darkish);
  padding: 1rem;
  display: grid;
  grid-auto-rows: 250px;
  grid-auto-flow: row dense;
  grid-gap: 20px;
  min-height: 100vh;
`;

const MapSearchPage = () => (
  <MapSearchContainer>
    <MapSearch />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </MapSearchContainer>
);

export default MapSearchPage;
