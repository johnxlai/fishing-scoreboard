import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import { playersCollectionRef } from '../lib/firestore.collections';

// import CustomLink from '@/components/CustomLink';
import Leaderboard from '@/components/Leaderboard';
// import ListMovies from '@/components/ListMovies';
// import RealTimePlayers from '@/components/RealTimePlayers';
// import AddPlayer from '@/components/AddPlayer';
import UpdatePlayerPointsForm from '@/components/UpdatePlayerPointsForm';
import TotalPoints from '@/components/TotalPoints';

export default function Home() {
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
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout max-w-lg'>
            <h1 className='mt-6'>Fishing Tournament</h1>
            <UpdatePlayerPointsForm players={players} />
            <Leaderboard players={players} />
            <TotalPoints players={players} />
            {/* <RealTimePlayers /> */}
            {/* <AddPlayer /> */}
            {/* <Form /> */}
            {/* <footer className='my-3'>🐟🐟🐟</footer> */}
          </div>
        </section>
      </main>
    </>
  );
}
