import React, { useState } from 'react';
import { db } from '../lib/init-firebase';
import { doc, updateDoc } from 'firebase/firestore';

const EditPlayer = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);

    if (name === '' || id === '') return;

    const docRef = doc(db, 'players', id);
    updateDoc(docRef, { name })
      .then((res) => {
        console.log(res);
        //clear input fields
        setName('');
        setId('');
      })
      .catch((err) => console.error('Error updating document: ', err.message));
  }

  return (
    <div>
      <h4>Edit movie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>Movie id</label>
        <input
          id='id'
          className='text-green-600'
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor='name'>Movie Name</label>
        <input
          id='name'
          className='text-green-600'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Update movie</button>
      </form>
    </div>
  );
};

export default EditPlayer;
