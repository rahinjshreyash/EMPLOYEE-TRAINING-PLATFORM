export function Signup(
    {
  goLogin,
}: {
  goLogin: () => void;
}
){

    return(
        <><div className="w-200 h-164 bg-white flex justify-center items-center">
                    <div className="signup h-130 w-110 border border-black rounded-xl p-10 shadow-sm shadow-gray-800">
                        <div className="admin h-8 w-28 border-yellow-700 border rounded-3xl  bg-yellow-200 text-yellow-800 text-[12px] font-bold p-2 font-sans mb-5">
                            ADMIN ACCESS
                        </div>
                        <div className="mb-3">
                            <h1 className="text-black text-3xl font-bold">Welcome</h1>
                            <p className="text-gray-500">Sign up with your authorized organization account.</p>
                        </div>

                        <div>
                            <form action="Post" >
                                <p className="text-black font-bold pb-2 text-sm">Work email or Employee ID</p>
                                <input type="text" placeholder="Enter your work email or Id" className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px] "  />

                                 <p className="text-black font-bold pb-2 text-sm">Password</p>
                                <input type="password" placeholder="Enter your password"  className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px]"  />

                                

                                <button type="submit" className="mt-5 mb-5 border border-black w-90 h-12 rounded-lg bg-indigo-900 font-bold text-white">Sign up</button>
                            </form>

                            <div className="w-90 border-b border-gray-400 mb-5"></div>

                            <span className="text-slate-900 text-[15px] pl-3 font-sans font-semibold">Already have an account ? <a onClick={goLogin}  className="text-indigo-800 cursor-pointer">Log in</a></span>

                        </div>
                    </div>
                </div>
            </>
    )
}