import React, { useState } from 'react';
import { db } from '../lib/init-firebase';
import { doc, updateDoc } from 'firebase/firestore';

const fishPtsSystem = {
  walleyeKeeper: 5,
  muskie: 4,
  walleye: 3,
  pike: 2,
  bass: 1,
  rockBass: -2,
  longestFish: 3,
};

const EditPlayer = ({ players }) => {
  const [id, setId] = useState('');
  const [newPoints, setNewPoints] = useState('');
  const [currentPoints, setCurrentPoints] = useState('');
  const [newFishList, setnewFishList] = useState({
    walleye: 21120,
    bass: 1210,
  });

  //find current player point
  function findCurrentPoints(id) {
    const player = players.find((player) => player.id === id);
    setCurrentPoints(player.data.points);
    // console.log(player.data.points, 'current points');
  }

  //find current player and add the new fish the players fish list

  //Update fish list
  function updateFishList(id) {
    const player = players.find((player) => player.id === id);
    console.log(player.data.fishes, 'fishes');
    const testFishList = {
      ...player.data.fishes,
      bass: 19990,
    };
    console.log(testFishList, 'newFishList');
    setnewFishList(testFishList);
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
          onChange={(e) => {
            setId(e.target.value);
            findCurrentPoints(e.target.value);
            updateFishList(e.target.value);
          }}
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
          onChange={(e) => {
            setNewPoints(e.target.value);
          }}
          id='species'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
        >
          <option value=''>Select a fish</option>
          <option value={5}>Walleye Keeper 5</option>
          <option value={4}>Muskie 4</option>
          <option value={3}>Walleye 3</option>
          <option value={2}>Pike 2</option>
          <option value={1}>Bass 1</option>
          <option value={-2}>Rock Bass -2</option>
          <option value={3}>Longest Fish 3</option>
        </select>
        <button
          className='disabled:cursor-not-allowed disabled:opacity-80 disabled:bg-gray-500 disabled:border-gray-600 text-white hover:text-white border border-green-500 bg-green-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full uppercase tracking-wider '
          type='submit'
          disabled={!id || !newPoints}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EditPlayer;
