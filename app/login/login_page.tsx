"use client"

import { useState } from "react";
import Image from "next/image";
import {Nav} from "@/components/ui/navbar"




  export  function Navbar(){
        return(
             <>
                 <Nav />
                </>
        );
    }


    export function Left(){
        return(
            <>
                <div className="w-200 h-164 bg-indigo-300 flex justify-center items-center">
                    <div className="h-134 w-160 mt-5 pt-10 pl-10 pr-8">
                        <p className=" pb-3 font-mono text-slate-900 font-semibold">Single source of truth</p>
                        <h1 className=" pb-5 text-5xl font-sans font-bold text-black pr-20">Manage learning and knowledge in one place.</h1>
                        <p className="text-[18px] font-Roboto  text-slate-900 pb-5">A centralized hub for employee onboarding, continuous learning, assessments, skills and reusable organizational knowledge.</p>
                        <div className="grid grid-cols-2 h-40 justify-between text-white">
                            <div className="bg-white w-54 h-13 border border-black pl-4 pt-2 flex">
                                <div className="h-8 w-8 border  border-black"></div>
                                <span className="text-black pt-1 pl-2 font-sans font-bold ">Onboarding</span>
                            </div>
                            <div className="bg-white w-54 h-13 border border-black pl-4 pt-2 flex">
                                <div className="h-8 w-8 border  border-black"></div>
                                <span className="text-black pt-1 pl-2 font-sans font-bold">Learning</span>
                            </div>
                            <div className="bg-white w-54 h-13 border border-black pl-4 pt-2 flex">
                                <div className="h-8 w-8 border  border-black"></div>
                                <span className="text-black pt-1 pl-2 font-sans font-bold">Assessments</span>
                                
                            </div>
                            <div className="bg-white w-54 h-13 border border-black pl-4 pt-2 flex">
                                <div className="h-8 w-8 border  border-black"></div>
                                <span className="text-black pt-1 pl-2 font-sans font-bold">Knowledge Center</span>
                            </div>

                        </div>
                    </div>
                        
                    
                </div>            
            </>
        );
    }

    export function Login({
  goSignup,
}: {
  goSignup: () => void;
}) {
         
        return(
             
            <>
                <div className="w-200 h-164 bg-white flex justify-center items-center">
                    <div className="login h-130 w-110 border border-black rounded-xl p-10 shadow-sm shadow-gray-800">
                        <div className="admin h-8 w-28 border-yellow-700 border rounded-3xl  bg-yellow-200 text-yellow-800 text-[12px] font-bold p-2 font-sans mb-5">
                            ADMIN ACCESS
                        </div>
                        <div className="mb-3">
                            <h1 className="text-black text-3xl font-bold">Welcome back</h1>
                            <p className="text-gray-500">Sign in with your authorized organization account.</p>
                        </div>

                        <div>
                            <form action="" >
                                <p className="text-black font-bold pb-2 text-sm">Work email or Employee ID</p>
                                <input type="text" placeholder="Enter your work email or Id" className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px] "  />

                                 <p className="text-black font-bold pb-2 text-sm">Password</p>
                                <input type="text" placeholder="Enter your password" className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px]"  />

                                <div className="flex w-90">
                                    <input type="checkbox" name="Remember me" id="" /><p className="text-gray-800 text-[13px] pl-2 ">Remember me</p>

                                    <a href="" className="ml-30 text-black text-[12px] font-bold pt-1  hover:underline underline-offset-1">Forget Password?</a>
                                </div>

                                <button type="submit" className="mt-5 mb-5 border border-black w-90 h-12 rounded-lg bg-indigo-900 font-bold text-white">Sign in</button>
                            </form>

                            <div className="w-90 border-b border-gray-400 mb-5"></div>

                            <span className="text-slate-900 text-[15px] pl-3 font-sans font-semibold">Don't have an account ? <a  onClick={goSignup}  className="text-indigo-800 cursor-pointer">Sign up</a></span>

                        </div>
                    </div>
                </div>
            </>
        );
    }
