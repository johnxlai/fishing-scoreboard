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
      <h2 className='text-xl font-bold text-purple-300 mt-8 mb-4 text-center'>
        HOUSEBOAT LEADERBOARD
      </h2>
      <ul className='flex flex-col flex-wrap justify-center gap-3 '>
        {players
          .sort((a, b) => b.data.points - a.data.points)
          .map((player, i) => (
            <li key={player.id} className=''>
              <div className='w-full'>
                <div className='flex bg-gray-600 text-purple-300 font-bold'>
                  <span className='flex justify-center items-center py-3 w-1/4 border-r border-purple-300'>
                    {i + 1}
                  </span>
                  <span className='flex justify-start ml-5 py-3 uppercase w-2/4 border-r border-purple-300 font-bold'>
                    {player.data.name}
                  </span>

                  <span className='w-1/4 flex justify-center items-center py-3 '>
                    Pts: {player.data.points}
                  </span>
                </div>
              </div>
              <div className='fishes w-full flex flex-col overflow-x-auto shadow-md '>
                <table className='w-full text-sm'>
                  <thead className='text-xs text-gray-200 bg-purple-400'>
                    <tr>
                      <th className='p-3 w-3/4'>Species</th>
                      <th className='p-3 text-center w-1/4 uppercase'>Qty</th>
                    </tr>
                  </thead>

                  {Object.keys(player.data.fishes).map((fish) => {
                    return (
                      <tbody key={fish}>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                          <th className='px-3 py-1 font-medium text-gray-900 whitespace-nowrap'>
                            {fish}
                          </th>
                          <td className='text-gray-900 text-center w-1/4 px-3 py-1'>
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
