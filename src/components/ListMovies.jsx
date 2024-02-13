import React, { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { moviesCollectionRef } from '../lib/firestore.collections';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function getMovies() {
    getDocs(moviesCollectionRef)
      .then((res) => {
        console.log(res);

        const moviesData = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));

        setMovies(moviesData);
      })
      .catch((error) => console.error(error.message));
  }

  return (
    <div>
      <h4>ListMovies</h4>
      <button onClick={() => getMovies()}>Refresh Movies</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.id} : {movie.data.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
