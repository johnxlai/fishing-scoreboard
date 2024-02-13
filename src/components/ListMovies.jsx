import React, { useEffect, useState } from 'react';
import { doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
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

  function deleteMovie(id) {
    const docRef = doc(db, 'movies', id);
    deleteDoc(docRef)
      .then(() => {
        console.log('Document successfully deleted!');
        // getMovies();
      })
      .catch((error) => {
        console.error('Error removing document: ', error.message);
      });
  }
  return (
    <div>
      <h4>ListMovies</h4>
      <button onClick={() => getMovies()}>Refresh Movies</button>
    </div>
  );
};

export default ListMovies;
