import "./movie-card.scss";

import Button from "../button/Button";
import { Link } from "react-router-dom";
import React from "react";
import apiConfig from "../../api/apiConfig";
import { category } from "../../api/tmdbApi";

const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  
  const formatPopularity = (popularity) => {
    if (popularity >= 1000) {
      return (popularity / 1000).toFixed(1) + " jt";
    } return popularity.toFixed(0) + " rb";
    
  };
  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
      <p>{formatPopularity(item.popularity)} x ditonton</p>
      <p>Rating : {item.vote_average}</p>
    </Link>
  );
};

export default MovieCard;
