import React, { useState } from 'react';
import { db } from '../lib/init-firebase';
import { doc, updateDoc } from 'firebase/firestore';
import fishPtsSystem from '../data/fishList';

const EditPlayer = ({ players }) => {
  const [id, setId] = useState('');
  const [newPoints, setNewPoints] = useState('');
  const [currentPoints, setCurrentPoints] = useState('');
  const [newFishList, setnewFishList] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState();

  const initialFormData = {
    selectedName: '',
    selectedOption: '',
  };
  const [formData, setFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    findCurrentPlayer();
  };

  const findCurrentPlayer = () => {
    console.log('current player', formData.selectedName);
  };

  // a list of players
  // on player name change find the current player, update current points and player

  // on fish caught change update the fish list
  // on submit update the player points and fish list

  //Update fish list
  function updateFishList() {
    //Update fish list

    const updateFishPts = {
      ...player.data.fishes,
      beast: newPoints,
    };

    setnewFishList(updateFishPts);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const docRef = doc(db, 'players', id);
    updateDoc(docRef, {
      points: parseInt(currentPoints) + parseInt(newPoints),
      fishes: newFishList,
    })
      .then((res) => {
        // console.log(res);
        //clear input fields
        setId('');
        setNewPoints('');
      })
      .catch((err) => console.error('Error updating document: ', err.message));
  }

  return (
    <div className='w-full'>
      <form
        className='mx-auto bg-purple-800 p-5 mt-5 rounded-md w-full'
        onSubmit={handleSubmit}
      >
        <label htmlFor='id'>Player Name</label>
        <select
          name='selectedName'
          value={id}
          onChange={handleChange}
          // setId(e.target.value);
          // findCurrentPoints(e.target.value);
          // findCurrentPlayer(e.target.value);
          // updateFishList(e.target.value);

          id='id'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3'
        >
          <option value=''>Select player Id</option>
          {players.map((player) => {
            return (
              <option key={player.id} value={player.id}>
                {player.data.name}
              </option>
            );
          })}
        </select>

        <label
          htmlFor='species'
          className='block my-2 text-sm font-medium text-white'
        >
          Fish Caught
        </label>
        <select
          name='selectedOption'
          value={newPoints}
          onChange={handleChange}
          id='species'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
        >
          <option value=''>Select a fish</option>
          {Object.keys(fishPtsSystem).map((fish) => {
            return (
              <option key={fish} value={fishPtsSystem[fish]}>
                {fish} {fishPtsSystem[fish]}
              </option>
            );
          })}
        </select>
        <button
          className='disabled:cursor-not-allowed disabled:opacity-80 disabled:bg-gray-500 disabled:border-gray-600 text-white hover:text-white border border-green-500 bg-green-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full uppercase tracking-wider '
          type='submit'
          // disabled={!id || !newPoints}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EditPlayer;
