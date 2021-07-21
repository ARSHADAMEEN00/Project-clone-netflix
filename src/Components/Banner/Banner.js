import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constant";
import axios from "../../Constants/axios";
import "./Banner.css";
 
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    //tranding url
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        //here that data from the api is pass to response.data
        // console.log(response.data.results[0]);
        // console.log(response.data);
        //then it store movie state by setMovie
        setMovie(
          response.data.results[Math.floor(Math.random() * response.data.results.length -1)]
          // response.data.results[Math.floor(Math.random() * (20 - 0 + 1)) + 0]
          // this code will pick a random number and it pass to the arry
          // that arry cantains 20 movies names,title and description
          // that change every reload
        );
      });
  }, []);
  return (
    <div
      //banner  image , if movie is available then show the image from movie.backdrop_path with
      //the base url imageUrl, movie is not available jest pass emptj string
      style={{
        backgroundImage: `url(${imageUrl + movie?.backdrop_path})`,
      }}
      className="banner"
    >
      <div className="content">
        {/* the state movie cantain the all data we can call
         saparatly like movie.title ,movie.discription... */}
        <h1 className="title">{movie?.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play </button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription"> {movie?.overview}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
