// --------------------------- //
// --Imported Files & Hooks -- //
// --------------------------- //

import { FaArrowRight } from "react-icons/fa";
import { useScrollContext } from "../../Contexts/ScrollProvider";

const Banner = () => {
    
    const { scrollToContentHandler } = useScrollContext();

    return (
        <>
            <div className=" flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-center relative overflow-hidden py-5 md:py-10 max-w-[1400px] mx-auto ">
                <div className=" md:flex-1 relative">
                    <div className="xl:w-11/12 md:space-y-4 text-center md:text-left px-4 space-y-2 relative z-10">
                        <h2 className="text-xl md:text-[26px] xl:text-[30px]  font-semibold">FIND YOUR KIND</h2>
                        <h1 className="text-[26px] md:text-[30px] xl:text-5xl font-bold">YOUR <span className=" ">STYLISH</span> HEAVEN</h1>
                        <p className="text-[14px] xl:text-[16px] leading-6 lg:leading-8 font-medium">Explore seamless shopping on our multi-vendor platform with curated collections, exclusive deals, and effortless navigation. Discover unique </p>
                    </div>
                    <div className="mt-4 md:mt-4 px-4 flex items-center justify-center md:justify-normal gap-6 md:gap-5 lg:gap-8 relative z-10">
                        <button onClick={() => scrollToContentHandler('.product')} className=" text-[12px] md:text-[14px] lg:text-[16px] font-semibold px-6 py-4 bg-[#F5C332] rounded-md flex items-center gap-3 text-black hover:py-3.5 hover:bg-transparent hover:border-[#F5C332] hover:border-2 hover:text-[#F5C332]  duration-300 ">SHOP NOW <FaArrowRight></FaArrowRight></button>
                        <button onClick={() => scrollToContentHandler('.about-us')} className=" text-[12px] md:text-[14px] lg:text-[16px] font-semibold px-6 py-3.5 border-2 border-[#F5C332] rounded-md flex items-center gap-3 hover:bg-[#F5C332] hover:text-black text-[#F5C332]  duration-500 ">EXPLORE MORE</button>
                    </div>
                    <div className=" hidden xl:grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5 p-4 lg:p-6 border-[#F5C332] border-2 rounded-lg mt-5 xl:mt-14 mx-4 lg:mx-0 ">
                        <div className="bg-[#F5C332] p-2 rounded-2xl bg-opacity-60">
                            <img className="xl:h-24 mx-auto" src="https://i.ibb.co/GH9GmFg/return-policy-8451486-6691670-unscreen.gif" alt="" />
                            <h4 className="text-[14px] md:text-[16px] font-semibold text-center text-black">RETURN POLICY</h4>
                        </div>
                        <div className=" bg-[#FF00FF] p-2 rounded-2xl bg-opacity-60">
                            <img className="xl:h-24 mx-auto" src="https://i.ibb.co/D8czFHZ/find-best-price-10021572-81372-unscreen.gif" alt="" />
                            <h4 className="text-[14px] md:text-[16px] font-semibold text-center text-black">LOW PRICE</h4>
                        </div>
                        <div className="bg-[#00FFFF] p-2 rounded-2xl bg-opacity-50">
                            <img className="xl:h-24 mx-auto" src="https://i.ibb.co/2ZsLzHM/Animation-1705591802204-unscreen.gif" alt="" />
                            <h4 className="text-[14px] md:text-[16px] font-semibold text-center text-black">BEST DESIGN</h4>
                        </div>
                        <div className=" bg-blue-100 p-2 rounded-2xl">
                            <img className="xl:h-24 mx-auto" src="https://i.ibb.co/R2Vb9pH/quality-verified-product-49156-unscreen.gif" alt="" />
                            <h4 className="text-[14px] md:text-[16px] font-semibold text-center text-black">HIGH QUALITY</h4>
                        </div>
                    </div>
                    <div className=" w-20 h-20 mx-auto rounded-3xl transform rotate-45 border-8 border-[#F7C532] bg-transparent absolute -top-1/4 xl:-top-1/4 md:-top-2/4 left-3  my-auto "></div>
                    <div className=" w-20 h-20 mx-auto rounded-3xl transform rotate-45 border-8 border-[#F7C532] bg-transparent absolute -top-1/4 xl:-top-1/4 md:-top-2/4 right-3  my-auto "></div>
                </div>
                <div className=" md:flex-1 relative">
                    <img className="mx-auto px-6 md:px-0 w-11/12 md:w-full relative z-10 " src="https://i.ibb.co/2ywCcCH/400627311-2119504561721288-7756657165810985931-n-removebg.png" alt="" />
                </div>
            </div>
            <div className=" xl:hidden grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5 p-4 lg:p-6 border-[#F5C332] border-2 rounded-lg mt-5 xl:mt-14 mx-4 md:-mt-8 ">
                <div className="bg-[#F5C332] p-2 rounded-2xl ">
                    <img className=" h-36 mx-auto" src="https://i.ibb.co/GH9GmFg/return-policy-8451486-6691670-unscreen.gif" alt="" />
                    <h4 className="text-[16px] md:text-[16px] lg:text-lg font-semibold text-center text-black">RETURN POLICY</h4>
                </div>
                <div className=" bg-[#FF00FF] p-2 rounded-2xl">
                    <img className=" h-36 mx-auto" src="https://i.ibb.co/D8czFHZ/find-best-price-10021572-81372-unscreen.gif" alt="" />
                    <h4 className="text-[16px] md:text-[16px] lg:text-lg font-semibold text-center text-black">LOW PRICE</h4>
                </div>
                <div className="bg-[#00FFFF] p-2 rounded-2xl">
                    <img className=" h-36 mx-auto" src="https://i.ibb.co/2ZsLzHM/Animation-1705591802204-unscreen.gif" alt="" />
                    <h4 className="text-[16px] md:text-[16px] lg:text-lg font-semibold text-center text-black">BEST DESIGN</h4>
                </div>
                <div className=" bg-blue-100 p-2 rounded-2xl">
                    <img className=" h-36 mx-auto" src="https://i.ibb.co/R2Vb9pH/quality-verified-product-49156-unscreen.gif" alt="" />
                    <h4 className="text-[16px] md:text-[16px] lg:text-lg font-semibold text-center text-black">HIGH QUALITY</h4>
                </div>
            </div>
        </>
    );
};

export default Banner;