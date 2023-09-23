import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Phones from "../../components/Phones/Phones";
// import PhoneDetails from "../PhoneDetails/PhoneDetails";


const Home = () => {
    const phones = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Phones phones={phones}></Phones>
            {/* <PhoneDetails></PhoneDetails> */}
        </div>
    );
};

export default Home;