import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Recommendation = ({movieTitle}) => {
    const [movieId, setMovieId] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGExN2MzOTBmMjNmZjFkYTU1NGY2NzMwMjljYjhjMSIsInN1YiI6IjY0NTQxYWI1MDkxZTYyMDEyMzRmZTU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHcmUbUyOOkasKFDT-D88uFiAs70KuG02q0AxpiC-_M'; // Substitua com sua chave de API

  useEffect(() => {
    
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieTitle)}&api_key=${apiKey}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGExN2MzOTBmMjNmZjFkYTU1NGY2NzMwMjljYjhjMSIsInN1YiI6IjY0NTQxYWI1MDkxZTYyMDEyMzRmZTU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHcmUbUyOOkasKFDT-D88uFiAs70KuG02q0AxpiC-_M'
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(searchUrl, options);

        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }

        const data = await response.json();
        const movieID = data.results[0].id
        setMovieId(movieID)
        console.log("OLHA AQUI",movieID)
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
      }
    };

    fetchData();
  }, []); // Certifique-se de fornecer uma lista vazia de dependências se você só deseja executar isso uma vez

    useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=pt-BR&page=1`;
        const options = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        const dados = data.results
        console.log("Dados de Recomendação:", dados);

        setRecommendations(dados);
      } catch (error) {
        console.error('Erro ao buscar recomendações da API:', error);
      }
    };

    fetchRecommendations();
  }, [movieId]);

  const handlePageChange = () => {
    setCurrentPage(prevPage => (prevPage < 2 ? prevPage + 1 : 2));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "90%" }}>
        <h1 style={{color:"white"}}>For You</h1>
          <Slider {...settings} afterChange={handlePageChange}>
      {recommendations && recommendations.map(recommendation => (
      <Link to="/moviepage" state={{ movieTitle: recommendation.title }} key={recommendation.id}>
        <div className="DIV-ESTA">
          <img style={{ objectFit: "cover", width: "100%", height: "auto" }} src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`} alt={recommendation.title} />
        </div>
      </Link>  
    ))}
    </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
