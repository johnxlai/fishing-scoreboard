import React from 'react';

// import CustomLink from '@/components/CustomLink';
import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <h1>Fishing ScoreBoard</h1>
            <Form />
            <footer className=''>© {new Date().getFullYear()} </footer>
          </div>
        </section>
      </main>
    </>
  );
}
