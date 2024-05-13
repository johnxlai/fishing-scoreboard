import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import { playersCollectionRef } from '../lib/firestore.collections';

// import CustomLink from '@/components/CustomLink';
// import Form from '@/components/Form';
// import ListMovies from '@/components/ListMovies';
// import RealTimePlayers from '@/components/RealTimePlayers';
// import AddPlayer from '@/components/AddPlayer';
import UpdatePlayerPoints from '@/components/UpdatePlayerPoints';
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
            <h1 className='mt-5'>Fishing Scoreboard</h1>
            <UpdatePlayerPoints players={players} />

            <div className='w-full'>
              <ul className='flex flex-col flex-wrap justify-center gap-3 mt-3'>
                {players
                  .sort((a, b) => b.data.points - a.data.points)
                  .map((player, i) => (
                    <li
                      key={player.id}
                      className='bg-gray-700 flex gap-3 justify-between items-center p-3 rounded-lg text-white text-sm '
                    >
                      <div className='w-full'>
                        <span className=''>{i + 1}</span>
                        <span className='font-bold uppercase'>
                          {player.data.name}
                        </span>

                        <div className='flex flex-col justify-center items-center bg-purple-800 p-2 rounded-sm'>
                          <span className='text-purple-100 font-bold text-xs'>
                            Pts:
                          </span>
                          <span className='font-bold'>
                            {player.data.points}
                          </span>
                        </div>
                      </div>
                      <div className='fishes w-full flex flex-col'>
                        <span className='font-bold uppercase mr-2'>
                          perch: {player.data.perch}
                        </span>
                        <span className='font-bold uppercase mr-2'>
                          whitefish: {player.data.whitefish}
                        </span>{' '}
                        <span className='font-bold uppercase mr-2'>
                          walleyeSm: {player.data.walleyeSm}
                        </span>{' '}
                        <span className='font-bold uppercase mr-2'>
                          walleyeMd: {player.data.walleyeMd}
                        </span>{' '}
                        <span className='font-bold uppercase mr-2'>
                          walleyeLg: {player.data.walleyeLg}
                        </span>{' '}
                        <span className='font-bold uppercase mr-2'>
                          pikeBass: {player.data.pikeBass}
                        </span>{' '}
                        <span className='font-bold uppercase mr-2'>
                          ling: {player.data.ling}
                        </span>{' '}
                        <span className='font-bold uppercase mr-2'>
                          trout: {player.data.trout}
                        </span>{' '}
                        <span className='font-bold uppercase mr-2'>
                          mudpuppy: {player.data.mudpuppy}
                        </span>{' '}
                      </div>
                      {/* <button onClick={() => deletePlayer(player.id)}>
                        delete
                      </button> */}
                    </li>
                  ))}
              </ul>
              <TotalPoints players={players} />
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
