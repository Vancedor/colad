import React, { Component } from 'react';
import Link from 'next/link';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Privacy Policy" 
                    BGImage="bg-five"
                />  

                <div class="text-container ptb-100">
                    <div class="container">
                        <h4>Privacy Policy for collabadda pvt. ltd.</h4>
   
                        <p>At www.collabadda.in, accessible from www.collabadda.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by www.collabadda.in and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                        
                        <h4>Cookies and Web Beacons</h4>
                        <p>Like any other website, www.collabadda.in uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network.</p>
                        
                        <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are Google, Yahoo, Facebook, Flipkart, Amazon, etc. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>
                        
                        <h4>Privacy Policies</h4>
                        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on www.collabadda.in, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                        
                        <p>Note that www.collabadda.in has no access to or control over these cookies that are used by third-party advertisers. www.collabadda.in's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
                        
                        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. www.collabadda.in does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;
