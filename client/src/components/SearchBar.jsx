import React, { useState } from "react";
import styled from "styled-components";
import { SubTitleOnLight } from "../styled-components/TextElements";
import { ButtonPrimary } from "../styled-components/Buttons";

const SearchContainer = styled.div`
  background-color: var(--bg-light);
  filter: drop-shadow(5px 5px 10px);
  border-radius: 10px;
  width: 70%;
  padding: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const SearchInput = styled.input`
  margin-top: 1rem;
  flex-grow: 2;
  min-width: 200px;
  height: 50px;
  padding: 0;
  margin-right: 0.5rem;
  border-radius: 2px;
  border: none;
  padding-left: 1rem;
  font-family: var(--primary-font-family);
  font-weight: 300;
  font-size: var(--font-size-medium);
  filter: drop-shadow(5px 5px 3px #ddd) drop-shadow(-5px -5px 3px #eee);
`;

const BuyRentButton = styled(ButtonPrimary)`
  margin: 0.3rem;
  margin-left: 0;
`;

/**
 * @type {React.FC}
 */
const SearchBar = () => {
  const [rentToggle, setRentToggle] = useState(true);
  const onClickBuy = () => setRentToggle(true);
  const onClickRent = () => setRentToggle(false);
  return (
    <SearchContainer>
      <SubTitleOnLight style={{ marginTop: 0 }}>
        Search For Properties
      </SubTitleOnLight>
      <BuyRentButton
        selected={rentToggle}
        onClick={onClickBuy}
        style={{ marginRight: ".3rem" }}
      >
        Buy
      </BuyRentButton>
      <BuyRentButton selected={!rentToggle} onClick={onClickRent}>
        Rent
      </BuyRentButton>
      <br />
      <SearchForm action="//tlgmgmt.idxbroker.com/idx/results/listings">
        <SearchInput
          id="search"
          autocomplete="off"
          className="IDX-input input tooltipstered ui-autocomplete-input"
          type="text"
        />
        <label
          htmlFor="search-button"
          style={{
            marginBottom: 0,
            marginTop: "1rem"
          }}
        >
          <ButtonPrimary>
            <img
              src="search.png"
              style={{
                height: "24px",
                width: "24px",
                zIndex: 2
              }}
              alt="search button"
            />
          </ButtonPrimary>
        </label>
        <input type="submit" name="search-button" style={{ display: "none" }} />
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;
