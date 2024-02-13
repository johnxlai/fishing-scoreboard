import React, { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { moviesCollectionRef } from '../lib/firestore.collections';

const RealTimeMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(moviesCollectionRef, (snapshot) => {
      const moviesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setMovies(moviesData);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <h4>Real time movies</h4>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.id} : {movie.data.name}
            <button onClick={() => deleteMovie(movie.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeMovies;
