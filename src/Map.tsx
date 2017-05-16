import * as React from "react";
import { Map, TileLayer} from "react-leaflet";
import * as Leaflet  from "leaflet";

let position = new Leaflet.LatLng(38.801378, -77.066803);

export default class MapContainer extends React.Component<{}, {}> {
    render() {
        return (
            <Map
                center={position} 
                zoom={19}
            >
                <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution={`&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
                />
            </Map>
        );
    }
}