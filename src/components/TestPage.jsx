import React from 'react';

export function TestPage(props) {
    // apartment listings from JSON file
    const { listings } = props;

    return (
        <>
            {listings.map((listing) => (
                <div key={listing.id}>
                    {/* if the listing doesn't have a property name, list the address */}
                    <h2>
                        {listing.propertyName && !listing.propertyName.includes('$')
                            ? listing.propertyName
                            : listing.streetAddress && listing.streetAddress !== "Seattle"
                                ? listing.streetAddress
                                : null}
                    </h2>
                </div>
            ))}
        </>
    );
}
