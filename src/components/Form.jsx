import React from 'react';

//fishing scoreboard will contain a form to add points to a player
//form will contain a select dropdown to select a player and a fish
//form will contain a button to submit the form
//Scoreboard will contain a list of players and their points
//Scoreboard will contain a total points for all players
//Add local storage to store the players and their points
//Add a reset button to reset the players and their points

const Form = ({ players }) => {
  return (
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
                <span className='font-bold uppercase'>{player.data.name}</span>

                <div className='flex flex-col justify-center items-center bg-purple-800 p-2 rounded-sm'>
                  <span className='text-purple-100 font-bold text-xs'>
                    Pts:
                  </span>
                  <span className='font-bold'>{player.data.points}</span>
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
    </div>
  );
};

export default Form;
