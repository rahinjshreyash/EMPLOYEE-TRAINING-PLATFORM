"use client"

import Image from "next/image";

import { useState } from "react";
import {Navbar ,Left, Login} from "@/app/login/login_page";

import {Signup} from "@/app/login/signup";




export default function Page1() {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
      <Navbar />

      <div className="flex">
        <Left />
         {isSignup ? (
        <Signup goLogin={() => setIsSignup(false)} />
      ) : (
        <Login goSignup={() => setIsSignup(true)} />
      )}
      </div>
      

    </>
    
  );
}
