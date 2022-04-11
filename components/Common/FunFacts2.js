import React, { Component } from 'react';

class FunFacts extends Component {
    render() {
        return (
            <section className="pt-100 pb-70 bg-fcfbfb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-like"></i>
                               <h3>200K <span>+</span></h3>
                                <p>Completed projects with utmost success and satisfaction.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-diamond"></i>
                                <h3>100K <span>+</span></h3>
                                <p>Influencer Family</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-portfolio"></i>
                                <h3>100 <span>+</span></h3>
                                <p>Satisfied Brand Collaborations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;
