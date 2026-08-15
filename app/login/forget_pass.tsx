import { Navbar } from "./login_page";

import {Left, Login} from "@/app/login/login_page";

import {Signup} from "@/app/login/signup";

import OtpInput from "@/app/login/otp";




export function Forget_Pass( 

     {
  goLogin, 
}: {
  goLogin: () => void;

  
} 
){

    return(
        <>
            

                <div className="w-200 h-164 bg-white flex justify-center items-center">
                    <div className="signup h-120 w-110 border border-black rounded-xl p-10 shadow-sm shadow-gray-800">
                        
                        

                        <div>
                            <form action="dashboard" >
                                
                                <p className="text-black font-bold pb-2 text-sm">Work email or Employee ID</p>
                                <input type="text" placeholder="Enter your work email or Id" className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px] "    />

                                
                                <button type="submit"  className="mt-5 mb-5 border border-black w-90 h-12 rounded-lg bg-indigo-800 font-bold text-white cursor-pointer" onClick={goLogin} >Send verification code</button>

                                <div className="w-90 border-b border-gray-400 mb-5"></div>

                                <span className="text-black font-bold pb-2 text-sm">Enter Verification Code</span>
                                 
                                <input type="number" placeholder="" className="border border-gray-500 h-10 w-60 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px] text-center text-[18px]
                                 font-semibold "    />
                                

                                 <button type="submit"  className=" verification ml-5 border border-black w-20 h-8 rounded-lg bg-indigo-700 font-bold text-white cursor-pointer " >Verify </button>

                                <p className="text-black font-bold pb-2 text-sm">Reset Password </p>
                                <input type="password" placeholder="Password" className="border border-gray-500 h-10 w-60 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px] "    />

                                <button type="submit"  className="mt-5 mb-5 border border-black w-90 h-12 rounded-lg bg-indigo-800 font-bold text-white cursor-pointer" onClick={goLogin} >Set Password</button>
                            </form>

                            <div className="w-90 border-b border-gray-400 mb-5"></div>

                            

                        </div>
                    </div>
                </div>
                  
         


        </>
    )
}