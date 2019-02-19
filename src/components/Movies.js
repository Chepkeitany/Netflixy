import React, { Fragment } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeader from "./StyledHeader";
import StyledHeaderTitle from "./StyledHeaderTitle";
import Movie from "./Movie";
import StyledHorizontalScroll from "./StyledHorizontalScroll";
import StyledFooter from "./StyledFooter";
import StyledLargeBtn from "./StyledLargeBtn";

const Movies = () => (
  <Fragment>
    <StyledHeader>
      <FontAwesomeIcon icon="bars" text="help" />
      <StyledHeaderTitle> The Movie Recommender </StyledHeaderTitle>
      <FontAwesomeIcon icon="search" />
    </StyledHeader>
    <StyledHorizontalScroll>
      <Movie />
    </StyledHorizontalScroll>
    <StyledFooter>
      <StyledLargeBtn> Get Recommended Movies </StyledLargeBtn>
    </StyledFooter>
  </Fragment>
);

export default Movies;
