import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
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

  function deleteMovie(id) {
    const docRef = doc(db, 'movies', id);
    deleteDoc(docRef)
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error.message);
      });
  }

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
