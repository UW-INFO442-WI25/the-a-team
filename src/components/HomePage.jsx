import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MapComponent from './Map';

export function HomePage(props) {
    const { listings = apartmentListings } = props;
    const ITEMS_PER_PAGE = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [minRating, setMinRating] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [minBedrooms, setMinBedrooms] = useState(0);
    const [filteredListings, setFilteredListings] = useState([]);

    useEffect(() => {
        if (!listings || listings.length === 0) {
            setFilteredListings([]);
            return;
        }

        const filtered = listings
            .filter((listing) => 
                listing.location && 
                listing.location.streetAddress && 
                listing.location.streetAddress !== "Seattle"
            )
            .filter((listing) =>
                searchQuery === "" ||
                (listing.propertyName && listing.propertyName.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (listing.location && 
                 listing.location.streetAddress && 
                 listing.location.streetAddress.toLowerCase().includes(searchQuery.toLowerCase()))
            )
            .filter((listing) => 
                typeof listing.rating === 'number' && listing.rating >= minRating
            )
            .filter((listing) => 
                !isFinite(maxPrice) || 
                (listing.rent && typeof listing.rent.max === 'number' && listing.rent.max <= maxPrice)
            )
            .filter((listing) => {
                if (!listing.beds) return true;
                const numBeds = parseInt(listing.beds);
                return isNaN(numBeds) || numBeds >= minBedrooms;
            });
        
        setFilteredListings(filtered);
        setCurrentPage(1);
    }, [listings, searchQuery, minRating, maxPrice, minBedrooms]);

    const formatUnits = (units) => {
        if (!units) return '';
        let formattedUnits = units.replace(/\bbd\b/g, 'bed');
        return formattedUnits.includes('Studio bed') ? formattedUnits.replace('Studio bed', 'Studio') : formattedUnits;
    };

    const formatRent = (rent) => (!rent || !rent.min || !rent.max ? '' : `$${rent.min} - $${rent.max} per month`);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleRatingChange = (event) => {
        setMinRating(Number(event.target.value));
    };

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setMaxPrice(value === "Infinity" ? Infinity : Number(value));
    };

    const handleBedroomsChange = (event) => {
        setMinBedrooms(Number(event.target.value));
    };

    const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentListings = filteredListings.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const renderPaginationButtons = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        if (startPage > 1) {
            pageNumbers.push(
                <button key={1} onClick={() => handlePageChange(1)} className={`page-btn ${currentPage === 1 ? 'active' : ''}`}>1</button>
            );
            
            if (startPage > 2) {
                pageNumbers.push(<span key="ellipsis1" className="page-ellipsis">...</span>);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageChange(i)} className={`page-btn ${currentPage === i ? 'active' : ''}`}>{i}</button>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push(<span key="ellipsis2" className="page-ellipsis">...</span>);
            }
            
            pageNumbers.push(
                <button key={totalPages} onClick={() => handlePageChange(totalPages)} className={`page-btn ${currentPage === totalPages ? 'active' : ''}`}>{totalPages}</button>
            );
        }

        return pageNumbers;
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
                            <select className="filter-btn" value={maxPrice === Infinity ? "Infinity" : maxPrice} onChange={handlePriceChange}>
                                <option value="Infinity">Price</option>
                                <option value="1000">Up to $1,000</option>
                                <option value="1500">Up to $1,500</option>
                                <option value="2000">Up to $2,000</option>
                                <option value="2500">Up to $2,500</option>
                                <option value="3000">Up to $3,000</option>
                            </select>

                            <select className="filter-btn" value={minBedrooms} onChange={handleBedroomsChange}>
                                <option value="0">Bedrooms</option>
                                <option value="1">1+ Bedrooms</option>
                                <option value="2">2+ Bedrooms</option>
                                <option value="3">3+ Bedrooms</option>
                                <option value="4">4+ Bedrooms</option>
                            </select>

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
                                    <div>
                                        <img 
                                            src={listing.photos && listing.photos.length > 0 ? listing.photos[0] : '/placeholder-apartment.jpg'} 
                                            alt="Apartment image" 
                                            className="listing-image"
                                        />
                                    </div>
                                    <div className="listing-content">
                                        <div className="listing-title">
                                            <span>
                                                {listing.propertyName && !listing.propertyName.includes('$')
                                                    ? listing.propertyName
                                                    : (listing.location && listing.location.streetAddress 
                                                        ? listing.location.streetAddress 
                                                        : 'Unnamed Property')}
                                            </span>
                                            {listing.rent && listing.rent.min && listing.rent.max && (
                                                <span className="listing-price-highlight">
                                                    <strong>${listing.rent.min} - ${listing.rent.max}</strong>
                                                </span>
                                            )}
                                        </div>
                                        <div className="listing-details">
                                            <p>Address: {listing.location && listing.location.streetAddress ? listing.location.streetAddress : 'Address not available'}</p>
                                            <p>Units: {formatUnits(listing.beds)}</p>
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
                                <button 
                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))} 
                                    disabled={currentPage === 1} 
                                    className="page-btn prev-btn"
                                    aria-label="Previous page"
                                >
                                    &laquo;
                                </button>
                                
                                {renderPaginationButtons()}
                                
                                <button 
                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} 
                                    disabled={currentPage === totalPages} 
                                    className="page-btn next-btn"
                                    aria-label="Next page"
                                >
                                    &raquo;
                                </button>
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