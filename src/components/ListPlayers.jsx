import React, { useEffect, useState } from 'react';
import { doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import { playersCollectionRef } from '../lib/firestore.collections';

const ListPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  useEffect(() => {
    console.log(players);
  }, [players]);

  function getPlayers() {
    getDocs(playersCollectionRef)
      .then((res) => {
        console.log(res);

        const playerssData = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));

        setPlayers(playerssData);
      })
      .catch((error) => console.error(error.message));
  }

  return (
    <div>
      <h4>ListPlayers</h4>
      <button onClick={() => getPlayers()}>Refresh Players</button>
    </div>
  );
};

export default ListPlayers;
