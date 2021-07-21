import axios from "axios"; //import intance from axios component
import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constant";
import "./RowPost.css";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movie, setMovie] = useState([]); // here we save data from axios to movies
  const [urlId, setUrlId] = useState("");
  //id from img is pass to postman an return we get a
  //youtube vedio Id that is store in this state
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
      // console.table(response);
    });
  });
  //video options ,react-youtube plagin
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //this function for get a iframe vedio by axios with id from
  //the image then it covert vedion id sotre in the urlId
  const handleMovieTrailr = (id) => {
    if (urlId) {
      setUrlId("");
    } else {
      // console.log(id);
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        )
        .then((response) => {
          // console.log(response.data);
          //this is for identify there is any vedio in the arry
          if (response.data.results.length !== 0) {
            setUrlId(response.data.results[0]);
          }
        });
    }
  };
  return (
    <div className="row">
      {/* this props data from App.js */}
      <h2>{props.title}</h2>
      <div className="posters">
        {movie?.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovieTrailr(obj.id)} //for collecting id (or other values) form ui
            className={props.isBigger ? "bigPoster" : "Poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt={obj.name}
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
      {/* if urlId is present then show the video from urlId.key in the state urlId , */}
    </div>
  );
}

export default RowPost;
