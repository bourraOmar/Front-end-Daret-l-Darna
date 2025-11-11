import React from 'react';

const MapView = ({ latitude, longitude, zoom = 12 }) => (
  <div className="relative h-64 w-full overflow-hidden rounded-lg border bg-gray-100 text-sm text-gray-500">
    {/* Placeholder for future map integration (Leaflet, Mapbox, etc.) */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
      <span>Map placeholder</span>
      <span>
        Lat: {latitude ?? 'N/A'} | Lng: {longitude ?? 'N/A'} | Zoom: {zoom}
      </span>
    </div>
  </div>
);

export default MapView;
