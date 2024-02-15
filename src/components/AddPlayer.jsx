import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { playersCollectionRef } from '../lib/firestore.collections';

const AddPlayer = () => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);

    if (name === '') return;

    addDoc(playersCollectionRef, {
      name,
      points,
    })
      .then((res) => {
        console.log(res.id);
        //clear input fields
        setName('');
      })
      .catch((err) => {
        console.error('Error writing document: ', err.message);
      });
  }

  return (
    <div>
      <h4>Add Player</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Player Name</label>
        <input
          id='name'
          className='text-green-600'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Add Player</button>
      </form>
    </div>
  );
};

export default AddPlayer;
