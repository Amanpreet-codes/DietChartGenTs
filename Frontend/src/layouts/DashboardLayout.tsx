import { Outlet } from "react-router-dom";
import Navbar from "../components/DashboardNavbar";

export default function DashboardLayout(){
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    );
}