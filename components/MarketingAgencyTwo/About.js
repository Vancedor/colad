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
                                        <p>We are emerging Influencer Marketing Company, established in 2019. We try to perform what everyone needed to be performed. We provide solutions for each marketing problem.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Who We Are</h4>
                                        <p>Collabadda is a growing Publicist Marketing Agency started in mid 2020,  we are a young digital marketing platform to connect brands with social media influencers. 
We help your brand to be seen at scale, across all social media platforms; driving your growth and helping in your success journey.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our Success</h4>
                                        <ul>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                We have 100k+ Influencer base. With active and increasing engagement.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                We are recognised as one of the fastest growing Influencer Marketing Agency.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                We have collaborations with well known Celebrities.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our Mission</h4>
                                        <p>CollabAdda aims to be the best influencer marketing company in India that is a one stop solution for brands as well as influencers. We aim to bring brands closer to their goals through “Word of Mouth” from the most influential figures today.</p>
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
