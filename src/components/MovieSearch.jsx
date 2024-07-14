import React, { useState } from 'react';
import axios from 'axios';
import './MovieSearch.css'; // Assurez-vous de créer un fichier CSS si nécessaire

const API_KEY = process.env.REACT_APP_OMDB_API_KEY; // Remplacez par votre clé API OMDb

function MovieSearch() {
    const [movieName, setMovieName] = useState('');
    const [movieData, setMovieData] = useState(null);

    const handleInputChange = (event) => {
        setMovieName(event.target.value);
    };

    const handleSearch = async () => {
        if (movieName) {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`);
                setMovieData(response.data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        }
    };

    return (
        <div className="movie-search">
            <h1>Rechercher un film</h1>
            <input
                type="text"
                value={movieName}
                onChange={handleInputChange}
                placeholder="Tapez le nom du film"
            />
            <button onClick={handleSearch}>Rechercher</button>

            {movieData && movieData.Response === "True" ? (
                <div className="movie-details">
                    <h2>{movieData.Title}</h2>
                    <img src={movieData.Poster} alt={`${movieData.Title} poster`} />
                    <p>Année de sortie: {movieData.Year}</p>
                    <p>Box Office: {movieData.BoxOffice}</p>
                </div>
            ) : movieData && movieData.Response === "False" ? (
                <p>Film non trouvé</p>
            ) : null}
        </div>
    );
}

export default MovieSearch;
