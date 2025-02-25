import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

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

const getListingTitle = (listing) => {
  if (listing.propertyName && !listing.propertyName.includes('$')) {
    return listing.propertyName;
  }
  return listing.location.streetAddress || 'Unnamed Property';
};

const MapComponent = ({ listings = [] }) => {
  const [selectedListing, setSelectedListing] = useState(null);
  const [mapCenter, setMapCenter] = useState([47.6062, -122.3321]);
  const [mapZoom, setMapZoom] = useState(12);
  
  const listingsWithCoordinates = listings.filter(listing => {
    return (
      listing.coordinates && 
      typeof listing.coordinates.latitude === 'number' && 
      typeof listing.coordinates.longitude === 'number'
    ) || (
      listing.location && 
      listing.location.latitude && 
      listing.location.longitude && 
      !isNaN(parseFloat(listing.location.latitude)) && 
      !isNaN(parseFloat(listing.location.longitude))
    );
  });
  
  useEffect(() => {
    if (listingsWithCoordinates.length > 0) {
      let sumLat = 0;
      let sumLng = 0;
      
      listingsWithCoordinates.forEach(listing => {
        const lat = listing.coordinates ? 
          listing.coordinates.latitude : 
          parseFloat(listing.location.latitude);
          
        const lng = listing.coordinates ? 
          listing.coordinates.longitude : 
          parseFloat(listing.location.longitude);
          
        sumLat += lat;
        sumLng += lng;
      });
      
      const avgLat = sumLat / listingsWithCoordinates.length;
      const avgLng = sumLng / listingsWithCoordinates.length;
      
      setMapCenter([avgLat, avgLng]);
      
      if (listingsWithCoordinates.length === 1) {
        setMapZoom(15);
      } else if (listingsWithCoordinates.length < 5) {
        setMapZoom(14);
      } else if (listingsWithCoordinates.length < 20) {
        setMapZoom(13);
      } else {
        setMapZoom(12);
      }
    }
  }, [listingsWithCoordinates]);
  
  return (
    <div className="map-wrapper" style={{ height: "100%", width: "100%", position: "relative" }}>
      <MapContainer 
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {listingsWithCoordinates.map((listing, index) => {
          const lat = listing.coordinates ? 
            listing.coordinates.latitude : 
            parseFloat(listing.location.latitude);
            
          const lng = listing.coordinates ? 
            listing.coordinates.longitude : 
            parseFloat(listing.location.longitude);
          
          return (
            <Marker 
              key={listing.id || index}
              position={[lat, lng]}
              eventHandlers={{
                click: () => {
                  setSelectedListing(listing);
                },
              }}
            >
              <Popup>
                <div className="popup-content">
                  <h3 style={{ margin: '0 0 8px 0' }}>{getListingTitle(listing)}</h3>
                  {listing.location && listing.location.streetAddress && (
                    <p><strong>Address:</strong> {listing.location.streetAddress}</p>
                  )}
                  {listing.beds && (
                    <p><strong>Units:</strong> {formatUnits(listing.beds)}</p>
                  )}
                  {listing.rent && (
                    <p><strong>Rent:</strong> {formatRent(listing.rent)}</p>
                  )}
                  <a 
                    href="#" 
                    className="see-more-btn"
                    style={{ 
                      display: 'inline-block',
                      marginTop: '10px',
                      padding: '5px 10px',
                      backgroundColor: '#4a90e2',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}
                  >
                    See More
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
