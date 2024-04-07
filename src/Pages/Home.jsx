import Banner from '../Components/Banner';
import OurServices from '../Components/OurServices';
import Footer from '../Components/Footer';
import ContactUs from '../Components/ContactUs';
import Doctors from '../Components/Doctors';
import { Helmet } from 'react-helmet';
import logo from '../assets/Group 1.svg';
import SectionTitles from '../Components/SectionTitles';
import useFetch from '../Components/Hooks/useFetch';
import NextButton from '../Components/CarouselButton/NextButton';
import PrevButton from '../Components/CarouselButton/PrevButton';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReviewCard from '../Components/ReviewCard';
import { useState } from 'react';

const Home = () => {
    const { data } = useFetch('http://localhost:5000/reviews');
    console.log(data);

    return (
        <div className=''>
            <Helmet>
                <title>Doc House | Home</title>
                <link rel="icon" type="image/x-icon" href={logo} />
            </Helmet>
            <Banner></Banner>
            <OurServices></OurServices>
            <SectionTitles heading={'What Our Patients Says'} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} />


            {/*- ---------------------------------------------- */}

            <div className='lg:px-40'>

            </div>

            {/* ------------------------------------------------------------ */}

            < SectionTitles heading={'Our Expert Doctors'} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} />
            <Doctors />
            <ContactUs />
            <Footer />
        </div >
    );
};

export default Home;