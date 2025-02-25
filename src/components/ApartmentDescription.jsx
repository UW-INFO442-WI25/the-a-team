import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import apartmentListings from './apartmentData'; 

const ApartmentDescription = () => {
    const { id } = useParams(); // Get ID from URL

    if (!id) return <Navigate to = "/search" />;
    const apartment = apartmentListings.find((apt) => apt.id === Number(id));

    if (!apartment) {
        return <h2>Apartment not found</h2>;
    }
    console.log(apartmentListings)

    return (
        <div className="apartment-container">
            {/* Apartment Header */}
            <div className="apartment-header">
                <h1>{apartment.name}</h1>
                <p><strong>Address:</strong> {apartment.address}</p>
                <p><strong>Type:</strong> {apartment.genres}</p>
                <p><strong>Location:</strong> {apartment.location}</p>
                <p><strong>Price:</strong> {apartment.price}</p>
             </div>   

            {/* Apartment Details */} 
            <div className="amenities">
                <h2>Amenities</h2>
                    <ul>
                        {apartment.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
            </div>

            {/* Reviews Section
            <div className="reviews">
                <h2>Reviews</h2>
                    <div className="review-cards">
                        {apartment.reviews.length > 0 ? (
                            apartment.reviews.map((review, index) => (
                                <div key={index} className="review-card">
                                    <p>"{review.comment}"</p>
                                    <p className="review-author">- {review.author}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                </div>
            </div>    */}



        </div>
    );

};

export default ApartmentDescription;
