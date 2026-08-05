import {Progress} from "@/components/ui/progress"
import {Admin} from "@/components/ui/admin"


export function Side(){
    return(
        <>
            <div className="sidebar min-h-100 max-h-181 w-55 bg-indigo-50 overflow-y-scroll overflow-x-hidden fixed">
                <div className="head flex  h-20 flex-row pl-5 pt-5 gap-2 border-b border-b-indigo-200 w-61">
                    <img src="s" alt="" className="h-10 w-10 border border-white rounded-md" />
                    <div>
                        <div className="text-[14px] text-slate-900 font-sans font-bold m-0 p-0">Employee Learning</div>
                        <div className=" font-sans text-[12px] text-slate-900">& Knowledge Hub</div>
                    </div>
                </div>

                <nav className="nav pl-2.5 pt-3 pr-2.5 w-61 mb-25 ">
                    <div className="nav_item h-[57.2px]  rounded-md mb-4.25">
                        <p className="text-slate-900 text-[12px] font-bold ml-2.25 mr-2.25 mb-1.75">OVERVIEW</p>

                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">DB</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Dashboard</span>
                            </button>
                        </div>
                        
                    </div>



                    <div className="nav_item h-[97.2px]  rounded-md mb-4.25">
                        <p className="text-slate-900 text-[12px] font-bold ml-2.25 mr-2.25 mb-1.75">ADMINISTRATION</p>

                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">UM</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">User Management</span>
                            </button>
                        </div>
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">RP</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Roles and Permissions</span>
                            </button>
                        </div>
                        
                    </div>



                    <div className="nav_item h-[177.2px]  rounded-md mb-4.25">
                        <p className="text-slate-900 text-[12px] font-bold ml-2.25 mr-2.25 mb-1.75">LEARNING</p>

                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">LN</span>
                                <span className="text-slate-900 font-semibold text-[13px] pt-0.5 font-sans">Learning</span>
                            </button>
                        </div>
                        
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">LP</span>
                                <span className="text-slate-900 font-semibold text-[13px] pt-0.5 font-sans">Learning Paths</span>
                            </button>
                        </div>
                        
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">AS</span>
                                <span className="text-slate-900 font-semibold text-[13px] pt-0.5 font-sans">Assessments</span>
                            </button>
                        </div>
                        
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">SM</span>
                                <span className="text-slate-900 font-semibold text-[13px] pt-0.5 font-sans">Skill Matrix</span>
                            </button>
                        </div>
                        
                    </div>



                    <div className="nav_item h-[257.2px]  rounded-md mb-4.25">
                        <p className="text-slate-900 text-[12px] font-bold ml-2.25 mr-2.25 mb-1.75">KNOWLEDGE</p>

                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">KC</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Knowledge Center</span>
                            </button>
                        </div>
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">FQ</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">FAQs</span>
                            </button>
                        </div>
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">Ds</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Documents and SOPs</span>
                            </button>
                        </div>
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">CS</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Case Studies</span>
                            </button>
                        </div>
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">RC</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Root Cause Analysis</span>
                            </button>
                        </div>
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">MT</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Mistake Tracker</span>
                            </button>
                        </div>
                        
                    </div>



                    <div className="nav_item h-[57.2px]  rounded-md mb-4.25">
                        <p className="text-slate-900 text-[12px] font-bold ml-2.25 mr-2.25 mb-1.75">INSIGHTS</p>

                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">RA</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Reports and Analytics</span>
                            </button>
                        </div>
                        
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">NT</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Notifications</span>
                            </button>
                        </div>
                        
                        <div className="hover:bg-indigo-200">
                            <button className="btn flex w-[190.8px] h-[40.8] pl-2.25 pr-2.25 pt-1.75 pb-1.75 gap-2">
                                <span className="border border-indigo-200 h-6.25 w-6.25 text-slate-900 text-[10px] grid justify-center items-center rounded-sm">ST</span>
                                <span className="text-slate-900 font-semibold text-[12px] pt-0.5 font-sans">Settings</span>
                            </button>
                        </div>
                        
                    </div>
                </nav>

                <div className="head flex  h-20 flex-row pl-5 pt-5 gap-2 border-b border-t-indigo-200 w-61">
                    <span className="h-10 w-10 border border-indigo-200 rounded-md text-slate-900 p-2" >AD</span>
                    <div>
                        <div className="text-[14px] text-slate-900 font-sans font-bold m-0 p-0">Admin User</div>
                        <div className=" font-sans text-[12px] text-slate-900">Admin role</div>
                    </div>
                </div>

                

            </div>

        </>
    );
}


export  function Nav(){
        return(
             <>
                  <div className="Nav h-20 w-330 bg-white pt-5 pb-3 pl-12 pr-15 flex justify-between ">
                  
                    <div className="flex justify-between  w-100 h-15 mr-4">
                      
                      <div className=" w-253 h-10 border border-amber-950 bg-gray-50 flex">
                        
                        <input type="text"  placeholder="Search FAQs, documents, test cases, courses and SOPs" className=" w-160 text-[13px] placeholder:p-3 placeholder:text-black  text-black pl-2" />
                        
                      </div>
            
                      
                    </div>
            

                    <div className="head flex  h-20 flex-row pl-3  gap-2   w-61">
                        <span className="h-10 w-10 border border-gray-600 rounded-3xl text-slate-900 pt-3 text-[11px] text-center font-bold " >AD</span>
                    <div>
                        <div className="text-[13px] text-slate-900 font-sans font-bold m-0 p-0">Admin User</div>
                        <div className=" font-sans text-[11px] text-slate-500">Content and Learning Admin</div>
                    </div>

                    </div>
            
                  
                  </div>
            
                </>
        );
    }

    export function Right(){
        return(
            <>
               <div className="w-330 h-194 bg-indigo-100 flex overflow-x-hidden ">
                    <div className="h-134 w-160 mt-5  pl-10 pr-8">
                        <p className=" pb-3 font-mono text-slate-900 font-semibold text-sm">ADMIN / DASHBOARD</p>
                        <h1 className=" pb-2 text-4xl font-sans font-bold text-slate-900  flex">Admin Dashboard

                            <p className="text-[10px] h-7 w-30 font-mono ml-5 mt-2 border border-dashed pt-2 pl-2 bg-indigo-200 text-indigo-700">Illustrative Data</p>
                        </h1>

                        <div className="flex justify-between w-300">
                            <p className="text-[16px] font-Roboto  text-slate-900 pb-10">Manage employee learning, knowledge contributions, skills and access.</p>

                            <div className="flex gap-4">
                                <button className="text-[14px] text-slate-900 bg-white h-10 w-25 border border-slate-900 rounded-sm cursor-pointer ">Export
                                </button>

                                <button className="text-[14px] text-white bg-indigo-700 h-10 w-30 border border-slate-900 rounded-sm cursor-pointer font-semibold font-sans">+ Add content
                                </button>
                                
                            </div>
                        </div>

                        
                        <div className="grid grid-cols-4 h-40 justify-between w-300 text-white ">
                            <div className="bg-white w-70 h-45 border border-gray-400 pl-4 pt-2  rounded-md">
                                <div className="flex w-60 p-1 h-10 justify-between">
                                    <span className="bg-slate-300 rounded-md h-8 w-10 text-slate-900 pl-2 pt-1">TP</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className ="border border-gray w-6 h-5"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg>
                                </div>

                                <div className="text-slate-700 pt-2 font-sans font-semibold">Team Progress</div>
                                <h1 className="text-black text-4xl font-semibold">72%</h1>

                                <span className="text-slate-500 text-[11px] pt-2">18 of 25 roadmaps on track</span>

                            </div>
                            <div className="bg-white w-70 h-45 border border-gray-400 pl-4 pt-2  rounded-md">
                                <div className="flex w-60 p-1 h-10 justify-between">
                                    <span className="bg-slate-300 rounded-md h-8 w-10 text-slate-900 pl-2 pt-1">PA</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className ="border border-gray w-6 h-5"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg>
                                </div>

                                <div className="text-slate-700 pt-2 font-sans font-semibold">Pending Approvals</div>
                                <h1 className="text-black text-4xl font-semibold">08</h1>
                                <span className="text-slate-500 text-[11px] pt-2">Knowledge contributions</span>

                            </div>
                            <div className="bg-white w-70 h-45 border border-gray-400 pl-4 pt-2  rounded-md">
                                <div className="flex w-60 p-1 h-10 justify-between">
                                    <span className="bg-slate-300 rounded-md h-8 w-10 text-slate-900 pl-2 pt-1">LC</span>
                                     <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className ="border border-gray w-6 h-5"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg>
                                </div>

                                <div className="text-slate-700 pt-2 font-sans font-semibold">Learning Completion</div>
                                <h1 className="text-black text-4xl font-semibold">68%</h1>
                                <span className="text-slate-500 text-[11px] pt-2">Across assigned learning</span>

                            </div>
                            <div className="bg-white w-70 h-45 border border-gray-400 pl-4 pt-2  rounded-md">
                                <div className="flex w-60 p-1 h-10 justify-between">
                                    <span className="bg-slate-300 rounded-md h-8 w-9 text-slate-900 pl-2 pt-1">IS</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className ="border border-gray w-6 h-5"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg>
                                </div>
                                <div className="text-slate-700 pt-2 font-sans font-semibold">Identified Skill Gaps</div>

                                <h1 className="text-black text-4xl font-semibold">14</h1>
                                <span className="text-slate-500 text-[11px] pt-2">Across active employees</span>


                                
                            </div>

                        </div>
                        <div className="flex justify-between w-300">
                             <section className="bg-white w-180 h-80 mt-10 border border-slate-700 p-4 ">
                            <div className="section-head flex justify-between h-10">
                                <span className="title">
                                    <p className="text-slate-500 font-mono">Learning</p>
                                    <h1 className="text-black font-sans font-semibold text-xl">Complete Overview</h1>
                                </span>

                                <button className="text-action text-slate-800 text-[10px] flex "><a href="d">View report</a>
                                     <a href="d"><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="5"
                                        height="1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className =" w-4 h-5 pl-1 pb-1"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg></a>
                                        
                                </button>

                            </div>
                            <div className="mt-6">
                                <label htmlFor="" className="font-sans text-[11px] font-semibold">New Employee Onboarding </label>
                                <Progress value={90} className="w-full mb-4 "/>
                                <label htmlFor="" className="font-sans text-[11px] font-semibold">Information Security Basics</label>
                                <Progress value={80} className="w-full mb-4 "/>
                                <label htmlFor="" className="font-sans text-[11px] font-semibold">Customer Support Essentials </label>
                                <Progress value={50} className="w-full mb-4 "/>
                                <label htmlFor="" className="font-sans text-[11px] font-semibold">Quality & Process Training </label>
                                <Progress value={70} className="w-full mb-4 "/>
                            </div>
                        </section>

                        <section className="h-80 w-100 bg-white p-4 mt-10 border border-slate-500">
                            <div className="section-head flex justify-between h-10 mb-6">
                                <span className="title">
                                    <p className="text-slate-500 font-mono">Skill Matrix</p>
                                    <h1 className="text-black font-sans font-semibold text-xl">Priority skill gaps</h1>
                                </span>

                                <button className="text-action text-slate-800 text-[10px] flex "><a href="d">Open matrix</a>
                                     <a href="d"><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="5"
                                        height="1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className =" w-4 h-5 pl-1 pb-1"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg></a>
                                        
                                </button>

                            </div>

                            <Admin />
                            <Admin />
                            <Admin />
                            <Admin />

                        </section>

                        </div>
                       



                    </div>    
                    
                </div>            

            </>
        );
    }
