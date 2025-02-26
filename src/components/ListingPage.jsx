import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function ListingPage(props) {
    const { listings } = props;
    const { id } = useParams(); // Get ID from URL

    if (!id) return <Navigate to="/" />;

    const apartment = listings.find((apt) => apt.id === id);

    if (!apartment) {
        return <h2>Apartment not found</h2>;
    }

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

    const amenitiesList = apartment.amenities && apartment.amenities.length > 0 ? (
        apartment.amenities.map((amenity, index) => (
            <div key={index}>
                <h3>{amenity.title}</h3>
                <ul>
                    {amenity.value.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                    ))}
                </ul>
            </div>
        ))
    ) : (
        <p>No amenities listed.</p>
    );

    return (
        <div className="apartment-container">
            {/* Apartment Header */}
            <div className="apartment-header">
                <div className="apartment-image">
                    <img src={apartment.img} alt={apartment.propertyName} />
                </div>

                <div className="apartment-attributes">
                    {/* Apartment Details */}
                    <h1>{apartment.propertyName}</h1>
                    <p><strong>Address:</strong> {apartment.location.streetAddress}</p>
                    <p><strong>Units:</strong> {formatUnits(apartment.beds)}</p>
                    <p><strong>Location:</strong> {apartment.location.city}, {apartment.location.state}</p>
                    <p><strong>Rent:</strong> {formatRent(apartment.rent)}</p>
                </div>
            </div>


            <div className="apartment-details">
                {/* Apartment Amenities */}
                <div className="amenities">
                    <h2>Amenities</h2>
                    {amenitiesList}
                </div>
            </div>
            <Link to={"/"} className="back-btn">Back</Link>

            <Link to={apartment.url} className="see-more-btn">Apply Now</Link>
        </div>
    )
};