import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Caroussel.css';
import image from '../assets/Joker.jpg'
import image2 from '../assets/Deadpool.jpg'
import image3 from '../assets/Oppenheimer.jpg'
import image4 from '../assets/Aquaman.jpg'
import image5 from '../assets/top-gun-maverick.jpeg'
import { useState, useEffect } from 'react';
import { FaStar,FaRegStar,FaCircle } from "react-icons/fa";


function Caroussel() {

  const movies = [
    {
      name: 'Joker',
      image: image,
      rating: "8.5",
      releaseDate: '2022',
      genres: ['Drama', 'Fantasy', 'Horror'],
      actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
      description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He embarks on a downward spiral of revolution and crime, leading him to become the infamous Joker.',
      duration: '2h 02min',
    },
    {
      name: 'Deadpool',
      image: image2,
      rating: "7.8",
      releaseDate: '2022',
      genres: ['Action', 'Adventure'],
      actors: ['Ryan Reynolds', 'Morena Baccarin', 'T.J. Miller'],
      description: 'A wisecracking mercenary with accelerated healing powers embarks on a mission for revenge.',
      duration: '1h 48min',
    },
    {
      name: 'Oppenheimer',
      image: image3,
      rating: "9.0",
      releaseDate: '2023',
      genres: ['Biography', 'Drama', 'History'],
      actors: ['Actor7', 'Actor8', 'Actor9'],
      description: 'The life story of J. Robert Oppenheimer, the physicist who led the development of the atomic bomb.',
      duration: '3h',
    },
    {
      name: 'Aquaman',
      image: image4,
      rating: "7.2",
      releaseDate: '2018',
      genres: ['Action', 'Adventure', 'Fantasy'],
      actors: ['Jason Momoa', 'Amber Heard', 'Willem Dafoe'],
      description: 'A superhero film featuring Aquaman as he navigates his dual identity and battles foes beneath the sea.',
      duration: '2h 23min',
    },
    {
      name: 'Top Gun: Maverick',
      image: image5,
      rating: "7.5",
      releaseDate: '2023',
      genres: ['Action', 'Drama'],
      actors: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
      description: 'A sequel to the classic Top Gun, Maverick returns to train a new generation of fighter pilots.',
      duration: '2h 11min',
    }
  ];

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
    <div className="background-container">
        <div
          style={{
            height: "100%",
            backgroundColor: "#0070f3",
          }}
        />
      <Carousel>
        {movies.map(movie => (
        <Carousel.Item>
          <img
            src={movie.image}
            alt="Image One"
          />
          <Carousel.Caption>
            <div className='back-div'>
              <div className='back-div-text'>
                <div className='info-div'>
                <h1>{movie.name}</h1>
                </div>
                <div className='info-div' style={{display:"flex"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <div className='info-details'>
                    <h5>{movie.duration}</h5>
                  </div>
                  <div className='info-details'>
                    <h5>{movie.releaseDate}</h5>
                  </div>
                </div>
                </div>
                <div className='info-div'>
                  <p>{movie.description}</p>
                </div>
                <div className='info-div' style={{display:"flex"}}>
                {movie.genres.map((genre, index) => (
                  <div className='genre-card' key={index}>{genre}</div>
                ))}
                </div>
                <div className='margin-star' style={{display:"flex"}}>
                <div className='info-details-star'>
                {Array.from({ length: getStarCount(movie.rating) }, (_, index) => (
                  <FaStar key={index} style={{ color: 'gold' , fontSize:"2rem"}} />
                ))}
                {Array.from({ length: 5 - getStarCount(movie.rating) }, (_, index) => (
                  <FaRegStar key={index} style={{ color: 'white' , fontSize:"2rem" }} />
                ))}
                </div>
                <div className='info-details-rating'>
                  <p>{movie.rating}</p>
                </div>
                </div>
                <div>
                  <button className='primary-button'>See details</button>
                  <button className='secondary-button'>My wishlist</button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
                        ))}
  </Carousel>
    </div>
  )
}

export default Caroussel
