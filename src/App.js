import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";

import {
  Action,
  ComedyMovies,
  Originals,
  HorrorMovies,
  RomanceMovies,
  Documentaries,
  OtherMovies,
} from "./Constants/urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* url,title,size of the post are diffrent so pass saparate urls,title and
      size(boolean(small and normal)) to the component RowPost  */}
      <RowPost url={Originals} title="Netflix Originals" isBigger/>
      <RowPost url={Action} title="Action"  />
      <RowPost url={ComedyMovies} title="Comedy"  />
      <RowPost url={HorrorMovies} title="Horror"  />
      <RowPost url={RomanceMovies} title="Romance"  />
      <RowPost url={Documentaries} title="Documentaries"  />
      <RowPost url={OtherMovies} title="Others"  />
    </div>
  );
}

export default App;
