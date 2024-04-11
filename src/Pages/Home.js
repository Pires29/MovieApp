import React from 'react';
import '../styles/movieCard.css';
import SearchBar from '../components/SearchBar';
import Upcoming from '../components/Upcoming';
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';
import Caroussel from '../components/Caroussel';

function Home() {

  return (
    <div style={{backgroundColor:"#0D0D0D"}}>
      <Caroussel/>
      <Popular/>
      <Upcoming/>
      <TopRated/>
    </div>
  );
}

export default Home;
