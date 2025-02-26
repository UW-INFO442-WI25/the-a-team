import React, { useState } from 'react';
import MapComponent from './Map';
import { Link } from 'react-router-dom';
import apartmentListings from './apartmentData'; 

export function HomePage(props) {
    const { listings = apartmentListings } = props; 
    
    // Set items per page to exactly 3
    const ITEMS_PER_PAGE = 3;
    
    // State to track current page
    const [currentPage, setCurrentPage] = useState(1);
    
    // Search and Rating Filter States
    const [searchQuery, setSearchQuery] = useState("");
    const [minRating, setMinRating] = useState(0); // Default to 0 (show all listings)

    const formatUnits = (units) => {
        if (!units) return '';
        let formattedUnits = units.replace(/\bbd\b/g, 'bed');
        
        if (formattedUnits.includes('Studio bed')) {
            formattedUnits = formattedUnits.replace('Studio bed', 'Studio');
        }
        
        return formattedUnits.split(' ').join(' ');
    };
    
    const formatRent = (rent) => {
        if (!rent || !rent.min || !rent.max) return '';
        return `$${rent.min} - $${rent.max} per month`;
    };

    // Search Function
    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1); // Reset to page 1 when searching
    };

    // Handle Rating Filter Change
    const handleRatingChange = (event) => {
        setMinRating(Number(event.target.value));
        setCurrentPage(1); // Reset to page 1 when filtering
    };

    // Filter listings
    const filteredListings = listings
        .filter((listing) => listing.location.streetAddress && listing.location.streetAddress !== "Seattle")
        .filter((listing) => 
            searchQuery === "" ||
            listing.propertyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            listing.location.streetAddress?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((listing) => listing.rating >= minRating); // Apply rating filter

    // Calculate pagination values
    const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    // Get only the listings for the current page
    const currentListings = filteredListings.slice(startIndex, endIndex);
    
    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0); // Scroll to top when changing pages
    };
    
    return (
        <>
            <main>
                <div className="container">
                    <div className="listings">
                        
                        {/* Search Bar */}
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search listings..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        
                        {/* Filters */}
                        <div className="filters">
                            <button className="filter-btn">Price</button>
                            <button className="filter-btn">Location</button>
                            <button className="filter-btn">Bedrooms</button>

                            {/* Rating Filter */}
                            <select className="filter-btn" value={minRating} onChange={handleRatingChange}>
                                <option value="0">All Ratings</option>
                                <option value="1">1 Star & Up</option>
                                <option value="2">2 Stars & Up</option>
                                <option value="3">3 Stars & Up</option>
                                <option value="4">4 Stars & Up</option>
                                <option value="5">5 Stars Only</option>
                            </select>
                        </div>
                        
                        {currentListings.length > 0 ? (
                            currentListings.map((listing) => (
                                <div key={listing.id} className="listing-card">
                                    <div className="listing-image"></div>
                                    <div className="listing-content">
                                        <div className="listing-title">
                                            <span>
                                                {listing.propertyName && !listing.propertyName.includes('$')
                                                    ? listing.propertyName
                                                    : listing.location.streetAddress}
                                            </span>
                                        </div>
                                        <div className="listing-details">
                                            <p>Address: {listing.location.streetAddress}</p>
                                            <p>Units: {formatUnits(listing.beds)}</p>
                                            <p>Rent: {formatRent(listing.rent)}</p>
                                            <p>Rating: {listing.rating} ⭐</p>
                                        </div>
                                        <div className="listing-price">{listing.price}</div>
                                        <Link to={`/listing/${listing.id}`} className="see-more-btn">See More</Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-results">No listings match your search criteria.</p>
                        )}
                        
                        {totalPages > 1 && filteredListings.length > 0 && (
                            <div className="pagination">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <div className="map-container">
                        <MapComponent listings={filteredListings} />
                    </div>
                </div>
            </main>
        </>
    );
}
