import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Recommendation from '../components/Reccomendations';
import Actors from '../components/Actors';
import '../styles/MoviePage.css';
import { FaStar,FaRegStar,FaCircle } from "react-icons/fa";

function MoviePage() {
    const [dataMovie, setDataMovie] = useState([]);
    const location = useLocation();
    const movieTitle = location.state?.movieTitle;
    const inputText = location.state?.inputText;

    useEffect(() => {
      const fetchMovieData = async () => {
          try {
              console.log("PASSOU")
              const response = await fetch(
                  `http://www.omdbapi.com/?apikey=7848316c&t=${inputText}`
              );
              const data = await response.json();
              setDataMovie(data);
              console.log("OLA", data);
          } catch (error) {
              setDataMovie([])
              console.log("Ja comeca", error);
          }
      };
  
      fetchMovieData();
  }, [inputText]);

    useEffect(() => {
        const fetchMovieData2 = async () => {
            try {
              if(inputText){
                return inputText
              }
                console.log("PASSOU AQUI")
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=7848316c&t=${movieTitle}`
                );
                const data = await response.json();
                setDataMovie(data);
                console.log("OLA2", data);
            } catch (error) {
                setDataMovie([])
                console.log("Ja comeca", error);
            }
        };
    
        fetchMovieData2();
    }, [movieTitle]);


    

    const title = dataMovie.Title
    const actors = dataMovie.Actors
    const actorsE = actors ? actors.split(', ') : [];
    const genre = dataMovie.Genre
    const genres = genre ? genre.split(', ') : [];
    const plot = dataMovie.Plot
    const poster = dataMovie.Poster
    const rating = dataMovie.imdbRating
    const type = dataMovie.Type
    const duration = dataMovie.Runtime
    const release = dataMovie.Year
    const seasons = dataMovie.totalSeasons
    const director = dataMovie.Director
    const writer = dataMovie.Writer

    function getStarCount(rating) {
        if (rating >= 8.6) {
          return 5;
        } else if (rating >= 7) {
          return 4;
        } else if (rating >= 5) {
          return 3;
        } else if (rating >= 3) {
          return 2;
        } else {
          return 1;
        }
      }

  return (
    <div className='movie-page-position'>
    <div className='movie-card'>
        <div className='position-div'>
            <img src={poster} className='movie-image'></img>
            <div className='button-div'>
                <button class="wishlist-button">
                <span class="icon">➕</span>
                Add to Wish List
                </button>
            </div>
        </div>
        <div className='text-div' style={{padding:"0.5rem 2rem 2rem 5rem", width:"100%"}}>
            <h1 style={{marginBottom:"2.5rem"}} className='movie-title'>{title}</h1>
            <div className='div-spacing' style={{display:"flex"}}>
                <h5 className='movie-info' style={{textTransform:"capitalize"}}>{type}</h5>
                <h5 className='movie-info'>{release}</h5>
                {type === 'movie' && <h5 className='movie-info'>{duration}</h5>}
                {type === 'series' && <h5 className='movie-info'>{seasons} seasons</h5>}
            </div>
            <div className='div-spacing' style={{display:"flex", position:"relative"}}>
              <div>
                {Array.from({ length: getStarCount(rating) }, (_, index) => (
                  <FaStar key={index} style={{ color: 'gold' , fontSize:"2rem"}} />
                ))}
                {Array.from({ length: 5 - getStarCount(rating) }, (_, index) => (
                  <FaRegStar key={index} style={{ color: 'white' , fontSize:"2rem" }} />
                ))}
              </div>
              <div style={{display:"flex",alignItems:"center", marginLeft:"1rem"}}>
                <p style={{fontSize:"1.3rem"}}>{rating} / 10</p>
              </div>
            </div>
            <div className='div-spacing'>
                <h3>Summary</h3>
                <p className='movie-plot'>{plot}</p>
            </div>
            <div className='movie-genres div-spacing'>
                {genres.map((genre, index) => (
                    <p key={index}>{genre}</p>
                ))}
            </div>
            <div className='div-spacing'>
                <h3>Directors</h3>
                <p>{director}</p>
            </div>
            <hr></hr>
            <div className='div-spacing'>
                <h3>Writers</h3>
                <p>{writer}</p>
            </div>
            <hr></hr>
            <div className='movie-principals div-spacing'>
                <h3>Actors</h3>
                <Actors actorsE={actorsE}/>
            </div>
            <hr></hr>
        </div>       
    </div>

    <div style={{textAlign:"center"}}>
    <Link to= "/home">
        <button>
          Voltar
        </button>
      </Link>
    </div>

    {/*<Recommendation movieTitle={movieTitle}/>*/}
    </div>
  )
}

export default MoviePage
