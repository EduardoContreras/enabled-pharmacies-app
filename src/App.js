import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapContainer from './components/map';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foundPharmacies: [],
      commune: 'buin',
      pharmacy: 'ahumada'
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Buscar Farmacia</h1><br></br><br></br>

          <div className="row justify-content-md-center">
            <div className="row">
              <label className="col-md-6 mb-1">Comuna: </label>
              <input className="col-md-6 mb-1" type="text" value={this.state.commune} onChange={this.setCommune.bind(this)}/>
           
              <label className="col-md-6 mb-1">Nombre de Local: </label>
              <input className="col-md-6 mb-1" type="text" value={this.state.pharmacy} onChange={this.setPharmacy.bind(this)} />
            </div>
          </div>

          <button onClick={this.search.bind(this)}>Buscar</button>
        </div>
        <br></br><br></br><br></br>
          {this.state.foundPharmacies.map((found, index) => {
            return(<MapContainer
              commune={found.commune}
              address={found.address}
              name={found.name}
              phone={found.phone}
              latitude={found.latitude}
              longitude={found.longitude}/>)
          })}
      </div>
    )
  }

  setCommune(event) {
    this.setState({
      commune: event.target.value
    });
  }
  setPharmacy(event) {
    this.setState({
      pharmacy: event.target.value
    });
  }
  search() {
    axios.get(`http://localhost/api/v1/pharmacy/enabled?communeName=${this.state.commune}&pharmacyName=${this.state.pharmacy}`).then(res => {
      console.log(res);
      this.setState({ foundPharmacies: res.data.pharmaciesLocation });
    }).catch(err => {
      console.log(err);
    });
  }
}

export default App;
