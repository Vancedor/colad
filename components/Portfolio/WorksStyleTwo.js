import React, { Component } from 'react';
import Link from 'next/link';

class WorksStyleTwo extends Component {
    render() {
        return (
            <>
                <section className="case-studies-area ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our All Projects</h2>
                            <p>Projects mentioned are very close to our heart, and we are very thankfull to each one...</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work1.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Rizzle</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>We has provided PGC Creator</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work4.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Amazon</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Provided Fashion Influencers</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work2.jpg" alt="image" />
                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Theoly</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Fashion Influencers & Gievaways</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work3.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Nutrien Life</a>
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
                                <div className="work-card">
                                    <img src="/images/works/work4.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Baazi Group</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Twitter Marketing</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work4.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>BAN Labs</a>
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
                                <div className="work-card">
                                    <img src="/images/works/work5.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Moj</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Creater PR through MEME marketing</a>
                                            </Link>
                                        </h3>

                                        <Link href="/portfolio-details">
                                            <a className="custom-btn">View Details</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="work-card">
                                    <img src="/images/works/work6.jpg" alt="image" />

                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio-details">
                                                <a>Chingari</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Performance Marketing</a>
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

export default WorksStyleTwo;
