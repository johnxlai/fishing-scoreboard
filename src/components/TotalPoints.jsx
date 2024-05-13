import React from 'react';

const TotalPoints = ({ players }) => {
  return (
    <div className='flex items-center justify-center m-3'>
      <span className='bg-gray-600 text-purple-300 py-1 px-2 uppercase font-bold text-sm'>
        Total Points:
      </span>
      <span className='bg-purple-400 text-white py-1 px-2 uppercase font-bold text-sm'>
        {players.reduce((acc, player) => acc + parseInt(player.data.points), 0)}
      </span>
    </div>
  );
};

export default TotalPoints;
