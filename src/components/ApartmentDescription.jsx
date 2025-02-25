import React from 'react';
import { useParams } from 'react-router-dom';
import apartmentListings from './apartmentData'; 
import { Navigate } from 'react-router-dom';

const ApartmentDescription = () => {
    const { id } = useParams(); // Get ID from URL

    if (!id) return <Navigate to = "/search" />;
    const apartment = apartmentListings.find((apt) => apt.id === Number(id));

    if (!apartment) {
        return <h2>Apartment not found</h2>;
    }
    console.log(apartmentListings)

    return (
        <div>
            <h1>{apartment.name}</h1>
            <p><strong>Address:</strong> {apartment.address}</p>
            <p><strong>Amenities:</strong> {apartment.amenities}</p>
            <p><strong>Location:</strong> {apartment.location}</p>

        </div>
    );

};

export default ApartmentDescription;
