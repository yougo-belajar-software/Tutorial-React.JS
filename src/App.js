import React from 'react';
import './App.css';
import Dummy from './Dummy'
import ListKaryawan from './ListKaryawan';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {Karyawans:Dummy}
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          Daftar Karyawan
          </div>
          <ListKaryawan karyawans={this.state.Karyawans} />
      </div>
    );
  }

}


export default App;
