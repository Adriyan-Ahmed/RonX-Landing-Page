import Banner from "../../Components/Banner/Banner";
import WhyChooseUs from "../../Components/Why Us/WhyChooseUs";

const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section className="mx-4 space-y-4 lg:space-y-6">
                <WhyChooseUs></WhyChooseUs>
            </section>
        </>
    );
};

export default Home;