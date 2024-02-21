// --------------------------- //
// --Imported Files & Hooks -- //
// --------------------------- //

import { NavLink } from "react-router-dom";
import { useScrollContext } from "../../Contexts/ScrollProvider";

const Navbar = () => {


    const { scrollToContentHandler } = useScrollContext();




    const Tabs = [

        <button onClick={() => scrollToContentHandler('.banner')} className={`bg-[#FDE74C]  py-2.5 md:py-2.5 px-3 md:px-5 lg:px-5 font-bold text-xs md:text-sm  rounded` } >HOME</button>,

        <button onClick={() => scrollToContentHandler('.about-us')} className={ `bg-transparent py-2.5 md:py-2 px-3 md:px-5 lg:px-5 font-bold text-xs md:text-sm  rounded `} >ABOUT US</button>,

        <button onClick={() => scrollToContentHandler('.product')} className={ `bg-transparent py-2.5 md:py-2 px-3 md:px-5 lg:px-5 font-bold text-xs md:text-sm  rounded `} >PRODUCT</button>,

    ]




    return (
        <>
            <div className="navbar">
                <div className="navbar-start gap-3">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content shadow-md rounded-md w-52 z-50 gap-3 bg-white">
                            {
                                Tabs.map((Tab, i) => <li key={i}>{Tab}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img className="h-10 rounded-[10px]" src="https://i.ibb.co/BqpDg4r/20240116-005140.png" alt="LOGO" />
                    </div>
                </div>
                <div className="navbar-end flex lg:items-center lg:gap-5">
                    <ul className="hidden lg:flex items-start gap-5 lex">
                        {
                            Tabs.map((Link, i) => <li key={i}>{Link}</li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;