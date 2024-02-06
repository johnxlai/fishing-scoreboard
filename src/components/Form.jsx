import React from 'react';
import { useState } from 'react';

//fishing scoreboard will contain a form to add points to a player
//form will contain a select dropdown to select a player and a fish
//form will contain a button to submit the form
//Scoreboard will contain a list of players and their points
//Scoreboard will contain a total points for all players
//Add local storage to store the players and their points
//Add a reset button to reset the players and their points

const Form = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'che',
      points: 0,
    },
    {
      id: 2,
      name: 'sam',
      points: 0,
    },
    {
      id: 3,
      name: 'john',
      points: 0,
    },
    {
      id: 4,
      name: 'dre',
      points: 0,
    },
    {
      id: 5,
      name: 'dennis',
      points: 0,
    },
    {
      id: 6,
      name: 'jackal',
      points: 0,
    },
  ]);
  const [points, setPoints] = useState(0);
  const [formData, setFormData] = useState({
    selectedName: '',
    selectedOption: '', // default value for the select dropdown
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

    updatePoints(formData.selectedName, formData.selectedOption);
  };

  const updatePoints = (player, fish) => {
    setPoints(0);

    switch (fish) {
      case 'walleye':
        setPoints(5);
        break;

      case 'perch':
        setPoints(2);
        break;

      case 'mudPuppy':
        setPoints(-5);
        break;

      default:
        break;
    }

    updateScoreBoard(player);
  };

  const updateScoreBoard = (player) => {
    //find the correct player and update their points
    const updatePlayers = players.map((p) => {
      if (p.name === player) {
        return {
          ...p,
          points: p.points + points,
        };
      } else {
        return p;
      }
    });

    setPlayers(updatePlayers);

    console.log(players, 'players');
  };

  return (
    <div>
      <ul className='flex gap-3 mt-3'>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} : {player.points}
          </li>
        ))}
      </ul>

      <h4>Player points: {points}</h4>

      {formData.selectedName && (
        <h5>
          {formData.selectedName}: {formData.selectedOption}
        </h5>
      )}

      <form
        onSubmit={handleSubmit}
        className='max-w-sm mx-auto bg-green-600 p-5 mt-5 rounded-md'
      >
        <label
          htmlFor='playerName'
          className='block my-2 text-sm font-medium text-white'
        >
          Player Name
        </label>
        <select
          name='selectedName'
          value={formData.selectedName}
          onChange={handleChange}
          id='playerName'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3'
        >
          <option value='john'>John</option>
          <option value='che'>Che</option>
          <option value='sam'>Sam</option>
        </select>

        <label
          htmlFor='species'
          className='block my-2 text-sm font-medium text-white'
        >
          Fish Caught
        </label>
        <select
          name='selectedOption'
          value={formData.selectedOption}
          onChange={handleChange}
          id='species'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
        >
          <option value='walleye'>Walleye</option>
          <option value='perch'>Perch</option>
          <option value='mudPuppy'>Mud Puppy</option>
          <option value='whiteFish'>White Fish</option>
        </select>
        <input
          className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full uppercase tracking-wider'
          type='submit'
          value='Add'
        />
      </form>
    </div>
  );
};

export default Form;
