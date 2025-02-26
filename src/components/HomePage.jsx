import React, { useState } from 'react';
import MapComponent from './Map';
import { Link } from 'react-router-dom';
import apartmentListings from './apartmentData'; 

export function HomePage(props) {
    const { listings = apartmentListings } = props; 
    const ITEMS_PER_PAGE = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [minRating, setMinRating] = useState(0);

    const formatUnits = (units) => {
        if (!units) return '';
        let formattedUnits = units.replace(/\bbd\b/g, 'bed');
        return formattedUnits.includes('Studio bed') ? formattedUnits.replace('Studio bed', 'Studio') : formattedUnits;
    };
    
    const formatRent = (rent) => (!rent || !rent.min || !rent.max ? '' : `$${rent.min} - $${rent.max} per month`);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handleRatingChange = (event) => {
        setMinRating(Number(event.target.value));
        setCurrentPage(1);
    };

    const filteredListings = listings
        .filter((listing) => listing.location.streetAddress && listing.location.streetAddress !== "Seattle")
        .filter((listing) => 
            searchQuery === "" ||
            listing.propertyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            listing.location.streetAddress?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((listing) => listing.rating >= minRating);

    const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentListings = filteredListings.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };
    
    return (
        <>
            <main>
                <div className="container">
                    <div className="listings">
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search listings..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <div className="filters">
                            <button className="filter-btn">Price</button>
                            <button className="filter-btn">Location</button>
                            <button className="filter-btn">Bedrooms</button>
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
                                        <Link to={`/listing/${listing.id}`} className="see-more-btn">See More</Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-results">No listings match your search criteria.</p>
                        )}
                        {totalPages > 1 && filteredListings.length > 0 && (
                            <div className="pagination">
                                <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="page-btn prev-btn">&laquo;</button>
                                {(() => {
                                    const MAX_VISIBLE_PAGES = 5;
                                    const pageNumbers = [];
                                    let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
                                    let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);
                                    if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
                                        startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
                                    }
                                    if (startPage > 1) {
                                        pageNumbers.push(<button key={1} onClick={() => handlePageChange(1)} className="page-btn">1</button>);
                                        if (startPage > 2) pageNumbers.push(<span key="ellipsis1" className="page-ellipsis">...</span>);
                                    }
                                    for (let i = startPage; i <= endPage; i++) {
                                        pageNumbers.push(
                                            <button key={i} onClick={() => handlePageChange(i)} className={`page-btn ${currentPage === i ? 'active' : ''}`}>{i}</button>
                                        );
                                    }
                                    if (endPage < totalPages) {
                                        if (endPage < totalPages - 1) pageNumbers.push(<span key="ellipsis2" className="page-ellipsis">...</span>);
                                        pageNumbers.push(<button key={totalPages} onClick={() => handlePageChange(totalPages)} className="page-btn">{totalPages}</button>);
                                    }
                                    return pageNumbers;
                                })()}
                                <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="page-btn next-btn">&raquo;</button>
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
