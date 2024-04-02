import React from 'react';
import Banner from '../Components/Banner';
import OurServices from '../Components/OurServices';
import Footer from '../Components/Footer';
import ContactUs from '../Components/ContactUs';
import Doctors from '../Components/Doctors';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <OurServices></OurServices>
            <Doctors />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;