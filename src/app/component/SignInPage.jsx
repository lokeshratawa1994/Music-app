'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import LogoSvg from '../../../assests/loginSvg.svg'
import { auth } from "../../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignInPage = () => {
    const router = useRouter()
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const handleLoginDetail = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailUser, passwordUser).then((userCred) => {
            console.log('aa', userCred.user)
            if(userCred?.user){
                localStorage.setItem('user',userCred.user);
                router.push('/dashboard')
                setEmailUser('')
                setPasswordUser('')
            }
        }).catch((err) => console.log('err', err))
    }
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex">
                    <div className="flex items-center justify-center px-6 py-8 mx-auto">
                        <Image src={LogoSvg} alt='logo' />
                    </div>
                    <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" autoComplete="off">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" onChange={(e) => setEmailUser(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" onChange={(e) => setPasswordUser(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <button onClick={(e) => handleLoginDetail(e)} className="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Sign in</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <Link href="/signup" className="font-medium text-slate-600 hover:underline dark:text-slate-500">Sign up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}