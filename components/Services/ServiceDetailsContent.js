import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class ServiceDetailsContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='_ysd-zHamjk' 
                        onClose={() => this.setState({isOpen: false})} 
                    />

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-image">
                                    <img src="/images/services/single-service.jpg" alt="image" />

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

                            <div className="col-lg-8 col-md-12">
                                <div className="services-details-desc">
                                    <h2>Service Description</h2>
                                    <p>Influencer marketing is a type of marketing that uses influencers to promote a brand to a larger market. Influencers are opinion leaders with a social following base. They appear as experts or trustworthy sources of information.</p>

                                    <p>Influencer marketing is closely related to social media marketing, as most opinion leaders gather their audience from social platforms. This channel gives you access to an enormous audience – half of the global population uses social networks.</p>

                                    <p>Better yet, influencer marketing enables you to reach people you can't attain through traditional advertising. Two-thirds of consumers use ad blockers, but the same people willingly take advice from influencers. 80% of users have purchased something based on an influencer’s recommendation.</p>

                                    <p>Brands that already employ influencer marketing have proven the effectiveness of this channel. 89% of marketers say that ROI from influencer marketing is comparable to or better than other marketing channels. It’s no wonder that 17% of companies spend over half of their marketing budget on influencers.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="services-details-info">
                                    <h3>Our Working Approach</h3>
                                    <ul>
                                        <li>Brand awareness growth...</li>
                                        <li>Content strategy enrichment...</li>
                                        <li>Quality lead generation...</li>
                                        <li>Cost-effectiveness...</li>
                                        <li>Precise and efficient Execution...</li>
                                        <li>Partying Hard after every successfull Campaign...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ServiceDetailsContent;
