"use client"

import Image from "next/image";

import { useState } from "react";
import {Navbar ,Left, Login} from "@/app/login/login_page";

import {Signup} from "@/app/login/signup";
import { Forget_Pass } from "./login/forget_pass";




export default function Page1() {
  const [isSignup, setIsSignup] = useState(false);
  const [forgotPass, setforgotPass] = useState(false);
  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        <Left />
        {isSignup ? (
          <Signup goLogin={() => setIsSignup(false)} />
          ) : forgotPass ? (
          <Forget_Pass goLogin={() => setforgotPass(false)} />
          ) : (
          <Login goSignup={() => setIsSignup(true)} 
          Forgot_Pass={() => setforgotPass(true)} />
 
        )}

      
      </div>
      

    </>
    
  );
}
