import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/init-firebase';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function getMovies() {
    const moviesCollectionRef = collection(db, 'movies');
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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
