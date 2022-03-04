import React, { Component } from 'react';
import Link from 'next/link';

export default class ServicesStyleTwo extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-comment bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Influencer Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Influencer marketing is a type of marketing that uses influencers to promote a brand to a larger market. Influencers are opinion leaders with a social following base. They appear as experts or trustworthy sources of information.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>YouTube Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>YouTube Marketing is the practice of promoting businesses and products on YouTube's platform, by uploading valuable videos on a company's YouTube channel or using YouTube ads..</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Whatsapp Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>WhatsApp marketing is a type of messenger marketing, which implies promoting a brand through WhatsApp.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>E-Mail Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Email marketing is a form of direct marketing that uses email to promote your business's products or services.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Marketing Consultation</a>
                                        </Link>
                                    </h3>
                                    <p>Marketing consulting is considered as professional services provided by experienced and qualified experts in the field of marketing.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-headphones bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Review Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>A marketing review is a simplified assessment of your activities and how they are helping you achieve your goals.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-users bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Social Media Management</a>
                                        </Link>
                                    </h3>
                                    <p>Social media management is a practice that supports your digital marketing and social media strategies.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-comment bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Views and Downloads Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Views and Downloads marketing has been done to generate POC for an idea or product.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
