// --------------------------- //
// --Imported Files & Hooks -- //
// --------------------------- //

import { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import ProductDetails from "../../Components/Product Details/ProductDetails";
import WhyChooseUs from "../../Components/Why Us/WhyChooseUs";
import { useScrollContext } from "../../Contexts/ScrollProvider";





const Home = () => {


    const { scrollToContent, section, setScrollToContent } = useScrollContext();



    useEffect(() => {

        if (scrollToContent && section) {

            document.querySelector(section).scrollIntoView({ behavior: 'smooth' });

            setScrollToContent(false)

        }

    }, [scrollToContent]);

    return (
        <>
            <section className="banner">
                <Banner></Banner>
            </section>
            {/* <section className="mx-4 space-y-4 lg:space-y-6 max-w-[1400px] xl:mx-auto about-us">
                <WhyChooseUs></WhyChooseUs>
            </section> */}
            <section className="mx-4 max-w-[1400px] xl:mx-auto product">
                <ProductDetails></ProductDetails>
            </section>
        </>
    );
};

export default Home;