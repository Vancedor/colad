import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/MarketingAgencyTwo/MainBanner';
import Services from '../components/MarketingAgencyTwo/Services';
import OurWorks from '../components/MarketingAgencyTwo/OurWorks';
import Feedback from '../components/Common/Feedback';
import About from '../components/MarketingAgencyTwo/About';
import FunFacts from '../components/Common/FunFacts';
import PartnerTwo from '../components/Common/PartnerTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class MarketingAgency2 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Services />

                <OurWorks />

                <Feedback />

                <About />

                <FunFacts />

                <PartnerTwo />
                
                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default MarketingAgency2;
