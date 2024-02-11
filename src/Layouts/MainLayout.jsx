import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <header className="max-w-[1400px] mx-auto font-mont">
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen mx-auto space-y-20 font-mont">
                <Outlet />
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;