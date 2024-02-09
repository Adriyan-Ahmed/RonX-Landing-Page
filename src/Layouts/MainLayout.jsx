import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <header className="max-w-[1400px] mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen mx-auto">
                <Outlet />
            </main>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;