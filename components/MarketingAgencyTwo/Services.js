import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Services</h2>
                            <p>You just name it, We will make it.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center radius-10">
                                    <i className="pe-7s-rocket bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Influencer Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>We have more than 1,00,000  social media influencers, artists, bloggers and content creators from all across India.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center radius-10">
                                    <i className="pe-7s-diamond bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Application Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>We help you to get App Store Optimization, In-App Advertising, Boost App Downloads, Pre- Launch App Marketing, App Rating & Reviews.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center radius-10">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Viral Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>We provide the best way to make anything viral, we have collaborations with various platforms to viral anything or anyone.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center radius-10">
                                    <i className="pe-7s-target bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Youth Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>We execute advertising techniques and ad campaigns that are used to communicate with the young generation.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center radius-10">
                                    <i className="pe-7s-mail-open-file bg-00d280"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>MEME Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Collabadda is the top meme marketing agency in India that offers marketing and branding through the power of memes.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center radius-10">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Celebrity Collaborations</a>
                                        </Link>
                                    </h3>
                                    <p>We have a humangous outreach to Celebrities to make your ad campaigns more successfull and glorious.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;
