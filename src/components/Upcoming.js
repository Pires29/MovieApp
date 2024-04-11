import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import '../styles/movieCard.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGExN2MzOTBmMjNmZjFkYTU1NGY2NzMwMjljYjhjMSIsInN1YiI6IjY0NTQxYWI1MDkxZTYyMDEyMzRmZTU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHcmUbUyOOkasKFDT-D88uFiAs70KuG02q0AxpiC-_M'; // Substitua pelo seu próprio token de API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        const options = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
        console.log("OLHOOOO BACALHAU", movies)
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow:3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow:2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div style={{marginTop:"2rem"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "95%" }}>
          <h3 style={{color:"white"}}>Upcoming</h3>
          <hr style={{color:"#FC7417", opacity:"1", width:"20%"}}></hr>
          <Slider {...settings}>
            {movies.map(movie => (
              <Link to="/moviepage"
              state={{ movieTitle: movie.title }}>
                <div className="DIV-ESTA" key={movie.id}>
                  <img style={{ objectFit: "cover", width: "100%", height: "auto" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  {/*<h3>{movie.title}</h3>*/}
                </div>
                </Link>  
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
