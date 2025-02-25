import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apartmentListings from './apartmentData'; 


const genres = ["Studio", "Luxury", "Budget-Friendly", "Family-Friendly", "Affordable"];


export function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [genreFilter, setGenreFilter] = useState([]);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [filteredResults, setFilteredResults] = useState(apartmentListings);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = apartmentListings.filter((listing) => {
            const matchesSearch = listing.name.toLowerCase().includes(query.toLowerCase()) ||
                                  listing.address.toLowerCase().includes(query.toLowerCase());
            const matchesGenres = genreFilter.length
                ? genreFilter.some((genre) => listing.genres.includes(genre))
                : true;
            const matchesRating = listing.rating >= ratingFilter;
            return matchesSearch && matchesGenres && matchesRating;
        });
        setFilteredResults(filtered);
    };

    const toggleGenreFilter = (genre) => {
        setGenreFilter((prev) =>
            prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
        );
    };

    return (
        <main className="search-main">
            <form className="search-form">
                <label htmlFor="search-input" className="search-heading">
                    Search for Apartments
                </label>
                <div className="search-bar">
                    <input
                        type="text"
                        id="search-input"
                        name="searchInput"
                        placeholder="Search apartments..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <div className="filters">
                    <div className="genre-filter">
                        <p>Filter by Genre:</p>
                        {genres.map((genre) => (
                            <label key={genre}>
                                <input
                                    type="checkbox"
                                    value={genre}
                                    checked={genreFilter.includes(genre)}
                                    onChange={() => toggleGenreFilter(genre)}
                                />
                                {genre}
                            </label>
                        ))}
                    </div>
                    <div className="rating-filter">
                        <label htmlFor="rating-select"> Ratings: </label>
                        <select
                            id="rating-select"
                            name="ratingSelect"
                            value={ratingFilter}
                            onChange={(e) => setRatingFilter(Number(e.target.value))}
                        >
                            <option value="0">All Ratings</option>
                            <option value="1">1 Star</option>
                            <option value="2">2 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="5">5 Stars</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="search-results">
                {filteredResults.length > 0 ? (
                    filteredResults.map((listing) => (
                        <div key={listing.id} className="listing-card">
                            <h2>
                            <Link to={`/apartment/${listing.id}`}>{listing.name}</Link>
                            </h2>
                            <p>{listing.address}</p>
                            <p>{listing.units}</p>
                            <p>{listing.price}</p>
                            <p>Rating: {listing.rating} / 5</p>
                        </div>
                    ))
                ) : (
                    <p>No apartments match your search criteria.</p>
                )}
            </div>
        </main>
    );
}
