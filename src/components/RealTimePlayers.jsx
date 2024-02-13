import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import { playersCollectionRef } from '../lib/firestore.collections';

const RealTimePlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(playersCollectionRef, (snapshot) => {
      const playersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPlayers(playersData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function deletePlayer(id) {
    const docRef = doc(db, 'players', id);
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
      <h4>Real time Players</h4>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.id} : {player.data.name}
            <span className='mx-3'>points: {player.data.points}</span>
            <button onClick={() => deletePlayer(player.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimePlayers;
