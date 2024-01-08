import React, { Fragment, useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "../../../../node_modules/leaflet/dist/leaflet.css";

const LeafletMap = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 2500);
  }, []);

  return (
    <Fragment>
      {display && (
        <MapContainer
          className='jvector-map-height'
          style={{ height: "100%", width: "100%" }}
          zoom={13}
          center={[51.505, -0.09]}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        </MapContainer>
      )}
    </Fragment>
  );
};

export default LeafletMap;
