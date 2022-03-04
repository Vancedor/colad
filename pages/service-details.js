import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Services Details & Approach" 
                    BGImage="bg-one"
                />  

                <ServiceDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default ServiceDetails;
