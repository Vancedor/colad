import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img2.jpg" alt="image" className="rounded-10" />

                                    <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>About Us</h2>
                                        <p>Collab Adda.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Who We Are</h4>
                                        <p>We are emerging marketing solution Agency. We do things differently than what every marketer might think. We create what everyone wants to have a look..</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our History</h4>
                                        <p>We are in the market sice 2019. But we are no ameture in the field. We worked with reputed brands like Rizzle, Chingari & Amazon. We already surpassed the 1L+ bench mark in influencer management.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our Mission</h4>
                                        <ul>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                We were, are and will be determined for changing digital and marketing agency for one and whole..
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                We create content that everyone wants to look and serve as a platform for brands to showcase there ethics and morales in the best way.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                We beleive in mutual prosperity so we work close with our team to serve the best in the most efficient manner. Now with us brands can lead there way up wihtout wandering around marketing problems.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='_ysd-zHamjk' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </>
        );
    }
}

export default About;
