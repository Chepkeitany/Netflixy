import React, { Fragment } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeader from "./StyledHeader";
import StyledHeaderTitle from "./StyledHeaderTitle";
import StyledMovie from "./StyledMovie";
import StyledPoster from "./StyledPoster";
import StyledMovieTitle from "./StyledMovieTitle";
import StyledMovieLengthYear from "./StyledMovieLengthYear";

const Movies = ({ poster, name, duration, year }) => (
  <Fragment>
    <StyledHeader>
      <FontAwesomeIcon icon="bars" text="help" />
      <StyledHeaderTitle> The Movie Recommender </StyledHeaderTitle>
      <FontAwesomeIcon icon="search" />
    </StyledHeader>
    <StyledMovie>
      <StyledPoster src={poster} alt={`Movie: ${name}`} />
      <StyledMovieTitle>{name}</StyledMovieTitle>
      <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
    </StyledMovie>
  </Fragment>
);

export default Movies;
