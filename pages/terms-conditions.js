import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class TermsConditions extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Terms Conditions" 
                    BGImage="bg-two"
                />  

                <div class="text-container ptb-100">
                    <div class="container">
                        <h4>Welcome to www.collabadda.in!</h4>
   
                        <p>These terms and conditions outline the rules and regulations for the use of collabadda pvt ltd's Website, located at https://collabadda.in/. By accessing this website we assume you accept these terms and conditions. Do not continue to use www.collabadda.in if you do not agree to take all of the terms and conditions stated on this page.</p>
                        
                        <h4>Cookies</h4>
                        <p>We employ the use of cookies. By accessing www.collabadda.in, you agreed to use cookies in agreement with the collabadda pvt ltd's Privacy Policy. </p>
                        
                        <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                        
                        <h4>License</h4>
                        <p>Unless otherwise stated, collabadda pvt ltd and/or its licensors own the intellectual property rights for all material on www.collabadda.in. All intellectual property rights are reserved. You may access this from www.collabadda.in for your own personal use subjected to restrictions set in these terms and conditions.</p>
                        
                        <p>You must not:</p>
            <ul>
    <li>Republish material from www.collabadda.in</li>
    <li>Sell, rent or sub-license material from www.collabadda.in</li>
    <li>Reproduce, duplicate or copy material from www.collabadda.in</li>
    <li>Redistribute content from www.collabadda.in</li>
</ul>
                        
                        <p>collabadda pvt ltd reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default TermsConditions;
