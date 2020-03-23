import React from 'react';
import './App.css';
import Dummy from './Dummy'
import ListKaryawan from './ListKaryawan';
import Input from './Input';
import InputValue from './InputValue';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Karyawans: Dummy,
      isLogin: false,
      tipe: "nama",
      nama: "",
      lamaKerja: 0,
      gender: ""
    }
  }

  _filterDataKaryawan = () => {
    const K = this.state.Karyawans;
    if (K && K.length > 0) {
      switch (this.state.tipe) {
        case "nama":
          return K.filter(
            (karyawan) =>
              karyawan.nama.toLowerCase().includes(this.state.nama.toLowerCase())
          )
        case "lamaKerja":
          return K.filter(
            (karyawan) => karyawan.lamaKerja >= this.state.lamaKerja
          )
        case "gender":
          return K.filter(
            (karyawan) => {
              if (this.state.gender === "") {
                return true;
              } else {
                return karyawan.gender === this.state.gender
              }
            }
          )
        default:
          return K;
      }
    } else {
      return [];
    }
  }
  _gantiNama = (value) => this.setState({ nama: value })
  _gantiLamaKerja = (value) => this.setState({ lamaKerja: value })
  _gantiGender = (value) => this.setState({ gender: value })
  _simpanTipeFilter = (value) => this.setState({ tipe: value })

  render() {
    const isUserLoginC = (this.state.isLogin) ?
      "sudahLogin" : "belumLogin";
    return (
      <div className="App">
        <div className="header">
          Filter Daftar Karyawan
            </div>
        <div className={isUserLoginC}>Status Login</div>
        <Input _simpanTipeFilter={this._simpanTipeFilter}>
        </Input>
        <InputValue
          tipe={this.state.tipe}
          _gantiNama={this._gantiNama}
          _gantiLamaKerja={this._gantiLamaKerja}
          _gantiGender={this._gantiGender}
        ></InputValue>
        <ListKaryawan karyawans={this._filterDataKaryawan()} />
      </div>
    );

  }

}


export default App;
