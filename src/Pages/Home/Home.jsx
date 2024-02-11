// --------------------------- //
// --Imported Files & Hooks -- //
// --------------------------- //

import Banner from "../../Components/Banner/Banner";
import ProductDetails from "../../Components/Product Details/ProductDetails";
import WhyChooseUs from "../../Components/Why Us/WhyChooseUs";





const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section className="mx-4 space-y-4 lg:space-y-6 max-w-[1400px] xl:mx-auto">
                <WhyChooseUs></WhyChooseUs>
            </section>
            <section className="mx-4 max-w-[1400px] xl:mx-auto">
                <ProductDetails></ProductDetails>
            </section>
        </>
    );
};

export default Home;