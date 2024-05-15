import React from 'react';

//fishing scoreboard will contain a form to add points to a player
//form will contain a select dropdown to select a player and a fish
//form will contain a button to submit the form
//Scoreboard will contain a list of players and their points
//Scoreboard will contain a total points for all players
//Add local storage to store the players and their points
//Add a reset button to reset the players and their points

import che from '../assets/imgs/che.jpg';
import sam from '../assets/imgs/sam.jpg';
import john from '../assets/imgs/john.jpg';

function insertSpace(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

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
              <div className='w-full bg-gray-600 text-white rounded-lg'>
                <div className='flex flex-col justify-center items-center relative'>
                  {player.data.points > 0 && (
                    <span className='absolute z-10 right-0 top-0 p-3 bg-purple-100 rounded-tr-lg rounded-bl-lg'>
                      {i === 0 ? (
                        <span className='text-3xl'>🏆</span>
                      ) : i === 1 ? (
                        <span className='text-3xl'>🥈</span>
                      ) : (
                        <span className='text-3xl'>🥉</span>
                      )}
                    </span>
                  )}
                  <img
                    src={
                      player.data.name === 'Che'
                        ? che
                        : player.data.name === 'Sam'
                        ? sam
                        : john
                    }
                    alt={player.data.name}
                    className='w-[80px] rounded-full mt-4'
                  />
                  <span className='uppercase mt-2 text-lg font-extrabold'>
                    {player.data.name}
                  </span>

                  <span className='font-semibold mb-3'>
                    Total Points: {player.data.points}
                  </span>

                  {Object.keys(player.data.fishes).length > 0 && (
                    <div className='fishes w-full flex flex-col overflow-x-auto shadow-md '>
                      <table className='w-full text-sm'>
                        <thead className='text-xs text-gray-200 bg-purple-400'>
                          <tr>
                            <th className='p-3 w-3/4'>Species</th>
                            <th className='p-3 text-right w-1/4 uppercase'>
                              Qty
                            </th>
                          </tr>
                        </thead>

                        {Object.keys(player.data.fishes).map((fish) => {
                          return (
                            <tbody key={fish}>
                              <tr className='bg-purple-200  border-b'>
                                <th className='px-3 py-1 font-medium text-gray-600 whitespace-nowrap capitalize'>
                                  {insertSpace(fish)}
                                </th>
                                <td className='text-gray-600 text-right w-1/4 pr-5 py-1'>
                                  {player.data.fishes[fish]}
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                  )}
                </div>
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
