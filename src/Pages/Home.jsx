import Banner from '../Components/Banner';
import OurServices from '../Components/OurServices';
import Footer from '../Components/Footer';
import ContactUs from '../Components/ContactUs';
import Doctors from '../Components/Doctors';
import { Helmet } from 'react-helmet';
import logo from '../assets/Group 1.svg';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Doc House | Home</title>
                <link rel="icon" type="image/x-icon" href={logo} />
            </Helmet>
            <Banner></Banner>
            <OurServices></OurServices>
            <Doctors />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;