import React from 'react';

// import CustomLink from '@/components/CustomLink';
import Form from '@/components/Form';
// import ListMovies from '@/components/ListMovies';
import RealTimePlayers from '@/components/RealTimePlayers';
import AddPlayer from '@/components/AddPlayer';
import EditPlayer from '@/components/EditPlayer';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <h1 className='mt-5'>Fishing Scoreboard</h1>
            {/* <ListMovies /> */}
            <RealTimePlayers />
            <AddPlayer />
            <EditPlayer />
            <Form />
            <footer className='my-3'>🐟🐟🐟</footer>
          </div>
        </section>
      </main>
    </>
  );
}
