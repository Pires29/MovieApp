import React, { useEffect, useState } from 'react';
import { useSearch } from '../components/SearchContext';

function MovieData() {
    const [dataMovie, setDataMovie] = useState([]);
    const { searchValue } = useSearch();
    const url = '7848316c'
    const show = 'Game of Thrones';

    useEffect(() => {
    const fetchMovieData = async () => {
        try {
            console.log("PASSOU")
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=7848316c&t=${searchValue}`
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
}, [searchValue]);


    return {dataMovie};
}

export default MovieData;
