import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-mail"></i>
                                </div>
                                <h3>Mail Here</h3>
                                <p><a href="mailto:abhinav@collabadda.org">abhinav@collabadda.org</a></p>
                                <p><a href="mailto:admin@collabadda.org">admin@collabadda.org</a></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Visit Here</h3>
                                <p>27 1st Floor, Landmark, Cyber park, Gurugram, <br /> Haryana 122101, India</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Call Here</h3>
                                <p><a href="+918382953422">+918 3829 53422</a></p>
                                <p><a href="+918177030549">+918 1770 30549</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;
