
import {Side , Nav ,Right} from "@/app/dashboard/dash_page";



const Dash = function Dashboard(){
    return(
        <>
            <div className="main min-h-184 min-w-100 bg-slate-50 overflow-y-hidden flex">
                <Side />
                
                <div className="ml-50">
                    <Nav />
                    <Right />
                </div>
                
            </div>
        </>
    );
}

export default Dash;