import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 20,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        },
        1800:{
            items:5
        }
    }
}

class WorksStyleOne extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <section className="case-studies-area ptb-100">
                    <div className="container-fluid">
                        <div className="section-title">
                            <h2>Our Projects</h2>
                            <p>Few Projects on which we are proud of...</p>
                        </div>

                        {this.state.display ? <OwlCarousel 
                        className="work-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="work-card">
                                <img src="/images/works/work1.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Rizzle</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Provided PGC Creators & Giveaways</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="work-card">
                                <img src="/images/works/work2.jpg" alt="image" />
                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Baazi Group</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Twitter Marketing & MEME Marketing</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                
                            <div className="work-card">
                                <img src="/images/works/work3.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Amazon</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Provided Youtube Fashion Influencers</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
            
                            <div className="work-card">
                                <img src="/images/works/work4.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Zed Black</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Twitter Marketing</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                    
                            <div className="work-card">
                                <img src="/images/works/work5.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Not So Pink</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Instagram Fashion Influencers</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                
                            <div className="work-card">
                                <img src="/images/works/work6.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Suffola</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Influencer Marketing</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="work-card">
                                <img src="/images/works/work7.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Trade Smart</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Performance Marketing</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="work-card">
                                <img src="/images/works/work8.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Keshmax</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Testimonal Videos</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </>
        );
    }
}

export default WorksStyleOne;
