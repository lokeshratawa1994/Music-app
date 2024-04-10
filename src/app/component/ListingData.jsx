import React, { useState } from 'react';
import Image from 'next/image';
import Play from '../../../assests/play.svg'

export const ListingData = ({ data ,searchText}) => {
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchText.toLowerCase())
    );
    const [currentPlaying, setCurrentPlaying] = useState(null);

    const playAudio = (id) => {
        if (currentPlaying === id) {
            // If the same item is clicked again, pause it
            setCurrentPlaying(null);
        } else {
            // Play the clicked item
            setCurrentPlaying(id);
        }
    };

    return (
        <div className='flex flex-wrap justify-center'>
            {filteredData.map((item, index) => {
                return (
                    <div key={index} className="bg-gray-100 p-4 flex items-center">
                        <div className="bg-white p-8 rounded-lg shadow-md w-80">
                            {/* Album Cover */}
                            <Image src={item?.cover} width={200} height={200} alt="Album Cover" className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50" />
                            {/* Song Title */}
                            <h2 className="text-xl font-semibold text-center">{item?.name}</h2>
                            {/* Artist */}
                            <h6 className="text-x text-center"> Artist - {item?.artist}</h6>
                            {/* Audio Playback Controls */}
                            <div className="text-center">
                                {/* <button onClick={() => playAudio(item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    {currentPlaying === item.id ? 'Pause' : 'Play'}
                                </button> */}
                                <button  onClick={() => playAudio(item.id)} className="p-4 mt-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
                                {currentPlaying === item.id ?(
                                     <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                     <g id="SVGRepo_iconCarrier">
                                         <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#000000"></path>
                                         <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#000000"></path>
                                     </g>
                                 </svg>
                                ) : (
                                     <Image width={20} height={20} src={Play} alt='play' />
                                )}
                                   
                                </button>
                                {currentPlaying === item.id && (
                                    <audio controls autoPlay className="w-full mt-4">
                                        <source src={item.audio} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
