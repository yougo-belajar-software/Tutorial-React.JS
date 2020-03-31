import React from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import Input from './Input';
import InputValue from './InputValue';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Karyawans: [],
      isLogin: false,
      tipe: "nama",
      nama: "",
      lamaKerja: 0,
      gender: ""
    }
  }

  componentDidMount() {
    this._ambilData();
  }

  _tambahData = () => {
    const url = "http://localhost:8000/karyawan";
    const dataKaryawan = {
      _id: 'njklnsdfg',
      nama: 'Budi',
      email: 'budi.batam@gmail.com',
      lamaKerja: 18,
      gender: 'male'
    }
    axios.post(url, dataKaryawan).then(
      response => {
        console.log(response)
        this._ambilData();
      }
    )
  }

  _ambilData = () => {
    const url = "http://localhost:8000/karyawan";
    axios.get(url).then(response => this.setState({ Karyawans: response.data.results }))
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
        <div>
          <button onClick={this._tambahData}>Tambah Karyawan</button>
        </div>
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
