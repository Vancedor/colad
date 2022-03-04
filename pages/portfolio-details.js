import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetailsContent from '../components/Portfolio/PortfolioDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class PortfolioDetails extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Our Service Details" 
                    BGImage="bg-two"
                />  
                
                <PortfolioDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default PortfolioDetails;
