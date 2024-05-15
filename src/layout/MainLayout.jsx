import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";



function MainLayuot() {
  return (
   <>
   <Navbar/>
   <div className="w-full h-[1px] bg-slate-300 mt-4 mb-4"></div>
   <Outlet/>
   </>
  )
}

export default MainLayuot