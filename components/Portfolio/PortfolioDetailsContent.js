import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

const images = [
    ('/images/portfolio/portfolio1.jpg'),
    ('/images/portfolio/portfolio2.jpg'),
    ('/images/portfolio/portfolio3.jpg'),
    ('/images/portfolio/portfolio4.jpg'),
    ('/images/portfolio/portfolio5.jpg'),
]

class PortfolioDetailsContent extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {

        const { photoIndex, isOpenImage } = this.state;

        return (
            <>
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpenImage: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )} 

                <section className="portfolio-details ptb-100">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-lg-4 col-md-6 p-0">
                                <div className="portfolio-details-image">
                                    <img src="/images/portfolio/portfolio1.jpg" alt="image" />
     
                                    <div 
                                        className="popup-btn"
                                        onClick={e => { this.setState({ photoIndex: 0, isOpenImage: true })}}
                                    >
                                    </div>
                                </div>

                                <div className="portfolio-details-image">
                                    <img src="/images/portfolio/portfolio2.jpg" alt="image" />
 
                                    <div 
                                        className="popup-btn"
                                        onClick={e => { this.setState({ photoIndex: 1, isOpenImage: true })}}
                                    >
                                    </div> 
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 p-0">
                                <div className="portfolio-details-image">
                                    <img src="/images/portfolio/portfolio3.jpg" alt="image" />

                                    <div 
                                        className="popup-btn"
                                        onClick={e => { this.setState({ photoIndex: 2, isOpenImage: true })}}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 pr_0">
                                        <div className="portfolio-details-image">
                                            <img src="/images/portfolio/portfolio4.jpg" alt="image" />
 
                                            <div 
                                                className="popup-btn"
                                                onClick={e => {this.setState({ photoIndex: 3, isOpenImage: true })}}
                                            >
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 pl_0">
                                        <div className="portfolio-details-image">
                                            <img src="/images/portfolio/portfolio5.jpg" alt="image" />
 
                                            <div 
                                                className="popup-btn"
                                                onClick={e => { this.setState({ photoIndex: 4, isOpenImage: true })}}
                                            >
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-desc">
                                    <h2>Idea Behind Influencer Marketing</h2>
                                    <p>At a fundamental level, influencer marketing is a type of social media marketing that uses endorsements and product mentions from influencers–individuals who have a dedicated social following and are viewed as experts within their niche. Influencer marketing works because of the high amount of trust that social influencers have built up with their following, and recommendations from them serve as a form of social proof to your brand’s potential customers.</p>
                                    
                                    <h2>Set a budget and management strategy</h2>
                                    <p>Now that you have some idea of what to pay influencers, you need to create your budget. Be sure to also factor in time for planning, executing and reviewing your influencer program. Running a successful influencer marketing campaign is not a set-it-and-go type of strategy. It’ll involve careful monitoring and follow up.</p>

                                    <h2>Decide on goals and message</h2>
                                    <p>The two most common reasons for using influencer marketing are to elevate brand awareness and increase sales. However, instead of setting these broad targets as your two goals, it will be more effective to kick off on your strategy by honing in on what your brand’s needs are. Perhaps you want to increase your customer base in a younger demographic. Or you want to expand into a new user group with a new product. Or you want to skip trends and utilize influencers to talk about your brand values.</p>
                                        
                                    <p>Influencers are here to stay but how the world of influencer marketing looks and operates has changed a great deal in a short time, and in five years may be drastically different from today. This guide will help you get started with building your strategy, but like any social strategy it’s important to be ready for change.</p>
                                </div>
                    
                                <div className="service-details-info">
                                    <div className="single-info-box">
                                        <h4>Client</h4>
                                        <span>Chingari</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <span>Influencer Marketing</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <span>February 28, 2019</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul className="social">
                                            <li>
                                                <a href="https://www.collabadda.in" target="_blank">
                                                    <i className="icofont-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/collabadda" target="_blank">
                                                    <i className="icofont-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://icofont.com/collabadda" target="_blank">
                                                    <i className="icofont-linkedin"></i>
                                                </a>
                                            </li>
                                            <li> 
                                                <a href="https://www.instagram.com/collabadda" target="_blank">
                                                    <i className="icofont-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <a href="#" className="default-btn" target="_blank">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default PortfolioDetailsContent;
