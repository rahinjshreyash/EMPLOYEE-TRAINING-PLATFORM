"use client"

function Admin({})
    {
    return(
        <>
        <div className="flex justify-between ">
             <div className="head flex  h-15 flex-row pl-1 gap-2   w-61 ">
                <span className="h-10 w-10 border border-gray-600 rounded-3xl text-slate-900 pt-3 text-[11px] text-center font-bold " >AD</span>
                <div>
                    <div className="text-[13px] text-slate-900 font-sans font-bold m-0 p-0">Admin User</div>
                    <div className=" font-sans text-[11px] text-slate-500">Content and Learning Admin</div>                   
                </div>

            </div>

            <div className="admin h-4 w-12  border rounded-3xl  bg-indigo-200 text-slate-900 text-[10px] font-bold  font-sans mt-2 pl-2">Priority
             </div>
        </div>
           

        </>
    );
}

export {Admin};
    
