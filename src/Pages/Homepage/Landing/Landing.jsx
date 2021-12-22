import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Navbar from '../../../Components/Navbar/Navbar';
import SectionBanner from '../SectionBanner/SectionBanner';
import SectionFeatures from '../SectionFeatures/SectionFeatures';
import SectionProject from '../SectionProject/SectionProject';
import SectionServices from '../SectionServices/SectionServices';
import SectionTeam from '../SectionTeam/SectionTeam';

const Landing = () => {
    return (
        <>  <Navbar></Navbar>
            <SectionBanner></SectionBanner>
            <SectionServices></SectionServices>
            <SectionFeatures></SectionFeatures>
            <SectionTeam></SectionTeam>
            <SectionProject></SectionProject>
            <Footer></Footer>
        </>
    );
};

export default Landing;