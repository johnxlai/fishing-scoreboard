import React from 'react';
import { useState } from 'react';

const Form = () => {
  //create one user
  // create a form with dropdown for fish type
  //display user with points
  const [player, setPlayer] = useState('John');
  const [points, setPoints] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    selectedOption: 'option1', // default value for the select dropdown
  });

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>{player}</h2>
      <h4>Player points: {points}</h4>

      <form onSubmit={handleSubmit} className='max-w-sm mx-auto'>
        <label
          for='species'
          className='block mb-2 text-sm font-medium text-white'
        >
          Player Name
        </label>
        <select
          name='selectedOption'
          value={formData.selectedOption}
          onChange={handleChange}
          id='species'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option value='john'>John</option>
          <option value='che'>Che</option>
          <option value='sam'>Sam</option>
        </select>

        <label
          for='species'
          className='block mb-2 text-sm font-medium text-white'
        >
          Select your fish
        </label>
        <select
          name='selectedOption'
          value={formData.selectedOption}
          onChange={handleChange}
          id='species'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option value='Walleye'>Walleye</option>
          <option value='perch'>Perch</option>
          <option value='Mud Puppy'>Mud Puppy</option>
          <option value='white'>White Fish</option>
        </select>
        <input
          className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
          type='submit'
          value='add'
        />
      </form>
    </div>
  );
};

export default Form;
