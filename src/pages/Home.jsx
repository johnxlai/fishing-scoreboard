import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import { playersCollectionRef } from '../lib/firestore.collections';

// import CustomLink from '@/components/CustomLink';
// import Form from '@/components/Form';
// import ListMovies from '@/components/ListMovies';
// import RealTimePlayers from '@/components/RealTimePlayers';
import AddPlayer from '@/components/AddPlayer';
import EditPlayer from '@/components/EditPlayer';

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(playersCollectionRef, (snapshot) => {
      const playersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPlayers(playersData);
      console.log(playersData);
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
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <h1 className='mt-5'>Fishing Scoreboard</h1>
            <EditPlayer />

            <div className='w-full'>
              <ul className='flex flex-col flex-wrap justify-center gap-3 mt-3'>
                {players
                  .sort((a, b) => b.data.points - a.data.points)
                  .map((player, i) => (
                    <li
                      key={player.id}
                      className='bg-purple-500 flex gap-3 justify-between items-center p-3 rounded-lg text-white text-sm '
                    >
                      <span className=''>{i + 1}</span>
                      <span className='font-bold uppercase'>
                        {player.data.name}
                      </span>
                      <div className='flex flex-col justify-center items-center bg-purple-800 p-2 rounded-sm'>
                        <span className='text-purple-100 font-bold text-xs'>
                          Points:
                        </span>
                        <span className='font-bold'>{player.data.points}</span>
                      </div>
                      {/* <button onClick={() => deletePlayer(player.id)}>
                        delete
                      </button> */}
                    </li>
                  ))}
              </ul>

              <div className='flex items-center justify-center m-3'>
                <span className='bg-purple-800 text-purple-300 py-1 px-2 uppercase font-bold text-sm'>
                  Total Points:
                </span>
                <span className='bg-purple-400 text-white py-1 px-2 uppercase font-bold text-sm'>
                  {players.reduce(
                    (acc, player) => acc + parseInt(player.data.points),
                    0
                  )}
                </span>
              </div>
            </div>
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
