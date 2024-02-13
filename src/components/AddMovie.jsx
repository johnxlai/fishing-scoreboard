import React, { useState } from 'react';

const AddMovie = () => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);

    if (name === '') return;

    alert(name);
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
