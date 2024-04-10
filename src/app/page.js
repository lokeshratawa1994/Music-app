"use client"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useEffect } from "react";
import { auth } from "../../lib/firebase";
import { SignInPage } from "./component/SignInPage";
import { Warning } from "./component/Warning";

export default function Home() {

  return (
   <>
    <SignInPage />
   </>
  );
}
