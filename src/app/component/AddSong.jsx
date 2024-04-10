import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { useAppDispatch } from "../redux/hooks";
import { addSongData } from "../redux/userSlice";

const AddSong = () => {
    const dispatch = useAppDispatch();
    const [musicData, setMusicData] = useState({
        singerName: '',
        songName: '',
    });

    const handleLoginDetail = (e) => {
        e.preventDefault();
        let data ={
            name: musicData.songName,
            cover:
              "https://source.unsplash.com/random/?music",
            artist: musicData.singerName,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: Math.floor((Math.random()*20)*100),
            active: false,
          }
        // Handle form submission or other logic here
        dispatch(addSongData(data));
    };

    return (
        <>
            <form className="space-y-4 md:space-y-6" autoComplete="off">
                <div>
                    <label htmlFor="singerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Singer Name</label>
                    <input type="text" onChange={(e) => setMusicData({ ...musicData, singerName: e.target.value })} name="singerName" id="singerName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Singer Name" required="" />
                </div>
                <div>
                    <label htmlFor="songName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song</label>
                    <input type="text" name="songName" id="songName" onChange={(e) => setMusicData({ ...musicData, songName: e.target.value })} placeholder="Song Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
            </form>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button onClick={(e) => handleLoginDetail(e)} className="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Submit</button>

                <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
        </>
    );
}

export default AddSong;
