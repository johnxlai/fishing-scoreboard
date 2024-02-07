import React from 'react';

// import CustomLink from '@/components/CustomLink';
import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <h1 class='mt-5'>Fishing Scoreboard</h1>
            <Form />
            <footer className='my-3'>🐟🐟🐟</footer>
          </div>
        </section>
      </main>
    </>
  );
}
