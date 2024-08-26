import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css'; 

const MapComponent: React.FC = () => {
  
  const position: [number, number] = [34.6804, -1.9110]; 

  return (
    <Box sx={{ height: '300px', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            LOTISSEMENT N 01, OUJDA 60050 <br /> · 47 km
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
