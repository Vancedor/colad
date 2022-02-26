import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items:1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class FeedbackTwo extends Component {

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
            <section className="quotes-area bg-fcfbfb">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                    className="quotes-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="quotes-content">
                            <p>Marketing is not just what it looks like and feels like. Marketing is how it works.</p>
                            <h3>Steve Jobs</h3>
                            <span>Co-founder of Apple, Inc.</span>
                        </div>

                        <div className="quotes-content">
                            <p>The best marketing doesn't feel like Marketing.</p>
                            <h3>Tom Fishburne</h3>
                            <span>Co-founder of SocialChamp, Inc.</span>
                        </div>

                        <div className="quotes-content">
                            <p>Content is King.</p>
                            <h3>Bill Gates</h3>
                            <span>Co-founder of Microsoft</span>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default FeedbackTwo;
