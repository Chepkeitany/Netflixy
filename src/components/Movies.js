import React, { Fragment } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeader from "./StyledHeader";
import StyledHeaderTitle from "./StyledHeaderTitle";
import Movie from "./Movie";

const Movies = () => (
  <Fragment>
    <StyledHeader>
      <FontAwesomeIcon icon="bars" text="help" />
      <StyledHeaderTitle> The Movie Recommender </StyledHeaderTitle>
      <FontAwesomeIcon icon="search" />
    </StyledHeader>
  </Fragment>
);

export default Movies;
