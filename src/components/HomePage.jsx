import React from 'react';
import MapComponent from './Map';

export function HomePage() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="listings">
                        <input type="text" className="search-bar" placeholder="Search" />

                        <div className="filters">
                            <button className="filter-btn">Price</button>
                            <button className="filter-btn">Location</button>
                            <button className="filter-btn">Bedrooms</button>
                        </div>

                        <div className="listing-card">
                            <div className="listing-image"></div>
                            <div className="listing-content">
                                <div className="listing-title">
                                    <span>Ori On The Ave</span>
                                    <span className="heart-icon">♡</span>
                                </div>
                                <div className="listing-details">
                                    Address: 5263 University Way NE, Seattle, WA 98105<br />
                                    Units: Studio apartments
                                </div>
                                <div className="listing-price">$1,538–$1,934 per month</div>
                                <a href="#" className="see-more-btn">See More</a>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-image"></div>
                            <div className="listing-content">
                                <div className="listing-title">
                                    <span>Arista Catering</span>
                                    <span className="heart-icon">♡</span>
                                </div>
                                <div className="listing-details">
                                    Address: 4715 25th Ave NE, Seattle, WA 98105<br />
                                    Units: Studio to 3-bedroom apartments
                                </div>
                                <div className="listing-price">$2,035–$14,805 per month</div>
                                <a href="#" className="see-more-btn">See More</a>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-image"></div>
                            <div className="listing-content">
                                <div className="listing-title">
                                    <span>The M Seattle</span>
                                    <span className="heart-icon">♡</span>
                                </div>
                                <div className="listing-details">
                                    Address: 4700 Brooklyn Ave NE, Seattle, WA 98105<br />
                                    Units: Studio to 4-bedroom apartments
                                </div>
                                <div className="listing-price">$1,350–$2,695 per month</div>
                                <a href="#" className="see-more-btn">See More</a>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-image"></div>
                            <div className="listing-content">
                                <div className="listing-title">
                                    <span>Hub U District Seattle</span>
                                    <span className="heart-icon">♡</span>
                                </div>
                                <div className="listing-details">
                                    Address: 5000 University Way NE, Seattle, WA 98105<br />
                                    Units: Fully furnished studio to 4-bedroom apartments
                                    Designed for students
                                </div>
                                <div className="listing-price"></div>
                                <a href="#" className="see-more-btn">See More</a>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-image"></div>
                            <div className="listing-content">
                                <div className="listing-title">
                                    <span>TWELVE at U District</span>
                                    <span className="heart-icon">♡</span>
                                </div>
                                <div className="listing-details">
                                    Address: 4535 12th Ave NE, Seattle, WA 98105<br />
                                    Units: Studio, 1-bedroom, and 2-bedroom apartments
                                </div>
                                <div className="listing-price">$2,035–$14,805 per month</div>
                                <a href="#" className="see-more-btn">See More</a>
                            </div>
                        </div>

                        <button className="show-more">Show More</button>
                    </div>

                    <div className="map-container">
                        <MapComponent />
                    </div>
                </div>

            </main>
        </>
    );
}

export default HomePage