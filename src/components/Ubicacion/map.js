import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "520px",
	maxHeight: "520px",
};	 

const center = { lng:-72.127815,lat:-39.015872 };
function Map() {
	return (
		<LoadScript googleMapsApiKey="AIzaSyBX-fT0cZLTKydQN_HFfeCfHKq_Um_4cSQ">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={15}
				mapTypeId={"hybrid"}
			>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
}
export default Map