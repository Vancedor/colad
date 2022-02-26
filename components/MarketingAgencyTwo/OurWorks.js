import React, { Component } from 'react';
import Link from 'next/link';

class OurWorks extends Component {
    render() {
        return (
            <>
                <section className="case-studies-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Projects</h2>
                            <p>Some of our reowned works..</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card text-center">
                                    <img src="/images/works/work1.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Theoly</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Fashion Influencers & giveaways</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card text-center">
                                    <img src="/images/works/work2.jpg" alt="image" />
                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Nutrienlife</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Influencer Marketing & Indian Amazon Marketing</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card text-center">
                                    <img src="/images/works/work3.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Rizzle</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Influencer Marketing & Youth Marketing</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card text-center">
                                    <img src="/images/works/work4.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Ban Labs</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Use Amazon Services</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card text-center">
                                    <img src="/images/works/work5.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Boby Alchemy</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Indian Amazon Marketing</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card text-center">
                                    <img src="/images/works/work6.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Chingari</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>App Downloads</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="view-more-work">
                            <Link href="/portfolio">
                                <a className="btn btn-primary">
                                    <i className="icofont-tasks"></i> View More
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurWorks;
