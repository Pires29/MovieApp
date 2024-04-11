import React, { useEffect, useState } from 'react';
import '../styles/MoviePage.css';

function Actors({ actorsE }) {
  const [actors, setActors] = useState([]);
  const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGExN2MzOTBmMjNmZjFkYTU1NGY2NzMwMjljYjhjMSIsInN1YiI6IjY0NTQxYWI1MDkxZTYyMDEyMzRmZTU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHcmUbUyOOkasKFDT-D88uFiAs70KuG02q0AxpiC-_M'; // Substitua pela sua chave de API

  useEffect(() => {
    const fetchActorData = async (actorName) => {

      const url = `https://api.themoviedb.org/3/search/person?query=${actorName}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const actorData = data.results[0];
        return actorData;
      } catch (error) {
        console.error(`Erro ao buscar dados do ator ${actorName}:`, error);
        return null;
      }
    };

    const fetchActors = async () => {
      const actorsData = await Promise.all(actorsE.map(actor => fetchActorData(actor)));
      const filteredActorsData = actorsData.filter(data => data !== null);
      console.log(filteredActorsData);
      setActors(filteredActorsData);
    };

    fetchActors();
  }, [actorsE, apiKey]);

  console.log("AQUI", actors);

  return (
    <div className='actor-div-img' style={{ display: "flex" }}>
      {actors.map((actor, index) => (
        <div style={{textAlign:"center", paddingRight:"1.5rem"}} key={index}>
          {actor && actor.name && (
            <>
              {actor.profile_path && (
                <img className='actor-img'
                style={{width:"150px", height:"200px"}}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={`Imagem de ${actor.name}`}
                />
              )}
              <p>{actor.name}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Actors;
