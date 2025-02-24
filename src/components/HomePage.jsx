import React from 'react';
import MapComponent from './Map';

export function HomePage(props) {
    const { listings } = props;

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

                        {listings
                            .filter((listing) => listing.location.streetAddress && listing.location.streetAddress !== "Seattle") // Filter out listings with "Seattle" or no address
                            .map((listing) => (
                                <div key={listing.id} className="listing-card">
                                    <div className="listing-image"></div>
                                    <div className="listing-content">
                                        <div className="listing-title">
                                            <span>
                                                {listing.propertyName && !listing.propertyName.includes('$')
                                                    ? listing.propertyName
                                                    : listing.location.streetAddress}
                                            </span>
                                            <span className="heart-icon">♡</span>
                                        </div>
                                        <div className="listing-details">
                                            <p>Address: {listing.location.streetAddress}</p>
                                            <p>Units: {listing.units}</p>
                                        </div>
                                        <div className="listing-price">{listing.price}</div>
                                        <a href="#" className="see-more-btn">See More</a>
                                    </div>
                                </div>
                            ))}

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