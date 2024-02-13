import React from 'react';

// import CustomLink from '@/components/CustomLink';
import Form from '@/components/Form';
import ListMovies from '@/components/ListMovies';
import RealTimeMovies from '@/components/RealTimeMovies';
import AddMovie from '@/components/AddMovie';
import EditMovie from '@/components/EditMovie';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <h1 className='mt-5'>Fishing Scoreboard</h1>
            {/* <ListMovies /> */}
            <RealTimeMovies />
            <AddMovie />
            <EditMovie />
            <Form />
            <footer className='my-3'>🐟🐟🐟</footer>
          </div>
        </section>
      </main>
    </>
  );
}
