import React from 'react';
import MapContainer from './../components/map';

class MapList extends React.Component {
  createCards = () => {
    const parent = this.props.items.map((itemMap) => {
      return <MapContainer
        commune={itemMap.commune}
        address={itemMap.address}
        name={itemMap.name}
        phone={itemMap.phone}
        latitude={itemMap.latitude}
        longitude={itemMap.longitude}/>;
    });
    return parent;
  }
  render() {
    return (
      <div class="row">
          {this.createCards()}
      </div>
    );
  }
}

export default MapList;
