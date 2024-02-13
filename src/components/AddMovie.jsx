import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/init-firebase';

const AddMovie = () => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);

    if (name === '') return;

    const moviesCollectionRef = collection(db, 'movies');

    addDoc(moviesCollectionRef, {
      name,
    })
      .then((res) => {
        console.log(res.id);
      })
      .catch((err) => {
        console.error('Error writing document: ', err.message);
      });
  }

  return (
    <div>
      <h4>Add movie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Movie Name</label>
        <input
          id='name'
          className='text-green-600'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Add movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
