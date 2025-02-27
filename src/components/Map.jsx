import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { Link } from 'react-router-dom';
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
  const [mapCenter, setMapCenter] = useState([47.663011, -122.314170]);
  const [mapZoom, setMapZoom] = useState(15);
  
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
        const lat = listing.coordinates 
          ? listing.coordinates.latitude 
          : parseFloat(listing.location.latitude);
        
        const lng = listing.coordinates 
          ? listing.coordinates.longitude 
          : parseFloat(listing.location.longitude);
        
        sumLat += lat;
        sumLng += lng;
      });
  
      const avgLat = sumLat / listingsWithCoordinates.length;
      const avgLng = sumLng / listingsWithCoordinates.length;
  
      setMapCenter(prevCenter => {
        const newCenter = [avgLat, avgLng];
        return prevCenter[0] !== newCenter[0] || prevCenter[1] !== newCenter[1] 
          ? newCenter 
          : prevCenter;
      });
  
      setMapZoom(prevZoom => {
        let newZoom = 12;
        if (listingsWithCoordinates.length === 1) newZoom = 15;
        else if (listingsWithCoordinates.length < 5) newZoom = 14;
        else if (listingsWithCoordinates.length < 20) newZoom = 13;
  
        return prevZoom !== newZoom ? newZoom : prevZoom;
      });
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
                }
              }}
            >
              <Tooltip direction="top" offset={[0, -20]} opacity={1.0} className="marker-tooltip">
                {getListingTitle(listing)}
              </Tooltip>
              
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
                  <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <Link 
                      to={`/listing/${listing.id}`} 
                      className="marker-btn" 
                      style={{ 
                        display: 'inline-block',
                        padding: '8px 16px',
                        backgroundColor: '#333',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    >
                      See More
                    </Link>
                  </div>
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