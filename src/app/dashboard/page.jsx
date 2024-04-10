'use client'
import React, { useState } from "react";
import  {useRouter} from 'next/navigation'
import { useAppSelector } from "../redux/hooks";
import { ListingData } from "../component/ListingData";
import AddModal from "../component/AddModal";
import AddSong from "../component/AddSong";
const Dashboard = ()=> {
    const router = useRouter();
    const userState = useAppSelector((state) => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const [searchText,setSearchedText] = useState('')

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleLogout = ()=> {
        localStorage.clear()
        router.push('/')
    }
    
    return (
        <>
         <section className="bg-gray-50 dark:bg-gray-900">
           <div className="flex px-4 py-4 ">
           <input type="text" value={searchText} className="border border-slate-600 rounded w-full p-2" placeholder="search song" onChange={(e)=> setSearchedText(e.target.value)} />
           <div className="flex justify-center w-full">
           <button className="border border-slate-600 bg-slate-800 text-[#fff] rounded p-2" onClick={openModal} >Add Song</button>
           </div>
           <div className="flex justify-end w-full"> <button className="border border-slate-600 bg-slate-800 text-[#fff] rounded p-1" onClick={handleLogout}>Logout</button></div>
           {/* <button className="border border-slate-600 bg-slate-800 text-[#fff] rounded p-1" >Search</button> */}
           </div>
            <ListingData data={userState.userData} searchText={searchText} />
            <AddModal isOpen={isOpen} onClose={closeModal}>
               <AddSong />
            </AddModal>
        </section>
        </>
    )
}

export default Dashboard