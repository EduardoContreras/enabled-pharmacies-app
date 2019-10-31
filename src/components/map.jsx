import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '95%',
  height: '70%',
}

class MapContainer extends React.Component {
  render() {
    return (
      <div class="row justify-content-md-center">
        <div class="col-md-6 mb-4">
          <div class="card card-cascade narrower">
            <div class="view view-cascade gradient-card-header peach-gradient" style={{border: '0px solid blue'}}>
              <div class="row"><br></br>          
                <label class="col-md-6 mb-2">Nombre local</label><strong>{this.props.name}</strong>
                <label class="col-md-6 mb-2">Dirección</label><strong>{this.props.address}</strong>
                <label class="col-md-6 mb-2">Teléfono</label><strong>{this.props.phone}</strong>
              </div>
            </div>
            <div class="card-body card-body-cascade text-center">
              <div id="map-container-google-9" class="z-depth-1-half map-container-5" style={{height: '300px', width: '300px'}}>
                  <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{ lat: this.props.latitude, lng: this.props.longitude}}>
                    <Marker position={{ lat: this.props.latitude, lng: this.props.longitude}} />
                  </Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYNc-GzLz2XxfKQGmIzJ54VV7jw9-WqaI'
})(MapContainer);
