




  function Nav(){
        return(
             <>
                  <div className="Nav h-15  bg-white pt-3 pb-3 pl-15 pr-15 flex justify-between border-b border-gray-500">
                  
                    <div className="flex justify-between  w-100 h-12 mr-4">
                      <div className="flex-none m-0 w-15  ">
                        <img
                          src="app/images/logo.png"
                          alt=""
                          width={10}
                          height={10}
                         />
                      </div>
                      <div className=" w-83 ">
                        <h1 className="text-black text-[18px] font-semibold font-sans text-md">Employee Learning & Knowledge Hub</h1>
                        
                      </div>
            
                      
                    </div>
            
                    <div className="flex justify-center items-center w-35 h-10 mr-4 mt-0 text-gray-500 text-sm">
                      <svg className=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M17 5v3.5" />
                        <path d="M7 6.5a5 5 0 0110 0" />
                        <path d="M7 8.5v-3" />
                        <rect x="3.5" y="8.5" width="17" height="12.5" />
                      </svg>
                      Secure Sign-in
                    </div>
            
                  
                  </div>
            
                </>
        );
    }

    export{Nav}