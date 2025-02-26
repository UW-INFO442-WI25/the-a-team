import React, { useState } from 'react';
import MapComponent from './Map';
import { Link } from 'react-router-dom';

export function HomePage(props) {
    const { listings } = props;
    
    // Set items per page to exactly 3
    const ITEMS_PER_PAGE = 3;
    
    // State to track current page
    const [currentPage, setCurrentPage] = useState(1);
    
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
    
    // Filter listings
    const filteredListings = listings
        .filter((listing) => listing.location.streetAddress && listing.location.streetAddress !== "Seattle");
    
    // Calculate pagination values
    const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    // Get only the listings for the current page
    const currentListings = filteredListings.slice(startIndex, endIndex);
    
    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Optionally scroll to top of listings
        window.scrollTo(0, 0);
    };
    
    // Generate page numbers with limited display
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const MAX_VISIBLE_PAGES = 5; // Show at most 5 numbered pages
        
        // Previous page button
        pageNumbers.push(
            <button 
                key="prev" 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="page-btn prev-btn"
            >
                &laquo;
            </button>
        );
        
        // Calculate range of page numbers to display
        let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
        let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);
        
        // Adjust if we're near the end
        if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
            startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
        }
        
        // First page and ellipsis if needed
        if (startPage > 1) {
            pageNumbers.push(
                <button 
                    key={1} 
                    onClick={() => handlePageChange(1)}
                    className="page-btn"
                >
                    1
                </button>
            );
            
            if (startPage > 2) {
                pageNumbers.push(<span key="ellipsis1" className="page-ellipsis">...</span>);
            }
        }
        
        // Generate visible page buttons
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button 
                    key={i} 
                    onClick={() => handlePageChange(i)}
                    className={`page-btn ${currentPage === i ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }
        
        // Last page and ellipsis if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push(<span key="ellipsis2" className="page-ellipsis">...</span>);
            }
            
            pageNumbers.push(
                <button 
                    key={totalPages} 
                    onClick={() => handlePageChange(totalPages)}
                    className="page-btn"
                >
                    {totalPages}
                </button>
            );
        }
        
        // Next page button
        pageNumbers.push(
            <button 
                key="next" 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="page-btn next-btn"
            >
                &raquo;
            </button>
        );
        
        return pageNumbers;
    };
    
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
                        
                        {currentListings.map((listing) => (
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
                                    </div>
                                    <div className="listing-price">{listing.price}</div>
                                    <Link to={`/listing/${listing.id}`} className="see-more-btn">See More</Link>
                                </div>
                            </div>
                        ))}
                        
                        {totalPages > 1 && (
                            <div className="pagination">
                                {renderPageNumbers()}
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