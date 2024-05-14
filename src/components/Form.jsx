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
      <h2 className='text-xl font-bold bg-gray-700 mt-5 p-5 rounded-t-lg'>
        LEADERBOARD
      </h2>
      <ul className='flex flex-col flex-wrap justify-center gap-3 '>
        {players
          .sort((a, b) => b.data.points - a.data.points)
          .map((player, i) => (
            <li
              key={player.id}
              className=' flex flex-col gap-3 justify-between items-center  text-white text-sm '
            >
              <div className='w-full'>
                <div className='rounded-lg bg-green-600'>
                  <span className='font-bold'>{i + 1}</span>
                  <span className='font-bold uppercase'>
                    {player.data.name}
                  </span>
                  <div className=''>
                    <span className='text-purple-100 font-bold text-xs'>
                      Pts:
                    </span>
                    <span className='font-bold'>{player.data.points}</span>
                  </div>
                </div>
              </div>
              <div className='fishes w-full flex flex-col overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left rtl:text-right  dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th className='px-6 py-3'>Fish</th>
                      <th className='px-6 py-3'>Quantity</th>
                    </tr>
                  </thead>

                  {Object.keys(player.data.fishes).map((fish) => {
                    return (
                      <tbody key={fish}>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                          <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                            {fish}
                          </th>
                          <td className='text-gray-900 px-6 py-4'>
                            {player.data.fishes[fish]}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
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
