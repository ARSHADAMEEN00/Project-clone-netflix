const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";

export const Originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const Action =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const ComedyMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const HorrorMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const OtherMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`;
export const RomanceMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const Documentaries =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`;

//api key is from tmdb website it is an uniq key to access th database

//his are the urls for rowpost images with a api key 

//https://api.themoviedb.org/3/ this is the base url

//&with_networks=28 this represents the catogory of film in this case it is Action

//this urls are export to the App.js and it render in rowpost 

