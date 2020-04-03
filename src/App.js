import React from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Karyawans: [],
      nama: '',
      email: '',
      lk: 0,
      jk: 'male'
    }
  }

  componentDidMount() {
    this._ambilData();
  }

  _ambilData = () => {
    const url = "http://localhost:8000/karyawan";
    axios.get(url).then(
      response => this.setState({ Karyawans: response.data.results })
    )
  }

  _deleteKaryawan = (id) => {
    const url = `http://localhost:8000/karyawan/${id}`
    axios.delete(url).then(
      () => this._ambilData()
    )
  }

  _SimpanDataKaryawan = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      _id: Math.floor(Math.random() * 1000000),
      nama: this.state.nama,
      email: this.state.email,
      gender: this.state.jk,
      lamaKerja: this.state.lk
    }

    if (this.state.id === "") {
      const url = "http://localhost:8000/karyawan";
      axios.post(url, data).then(
        response => this._ambilData()
      )
    } else {
      const url = `http://localhost:8000/karyawan/${this.state.id}`;
      axios.put(url, data).then(
        response => this._ambilData()
      )
    }

  }
  _tambahKaryawan = () => {
    this.setState({
      id: '',
      nama: '',
      email: '',
      jk: 'male',
      lk: '0'
    })
  }

  _editKaryawan = (id) => {
    const url = `http://localhost:8000/karyawan/${id}`;
    axios.get(url).then(
      response => {
        const data = response.data.result;
        this.setState({
          id: data.id,
          nama: data.nama,
          jk: data.gender,
          email: data.email,
          lk: data.lamaKerja
        })
      }
    )
  }

  _filterDataKaryawan = () => {
    const K = this.state.Karyawans;
    return K;
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">Daftar Karyawan</div>
        <button onClick={this._tambahKaryawan}>Karyawan Baru</button>
        <form onSubmit={this._SimpanDataKaryawan}>
          <div>
            <label>Nama : </label>
            <input type="text"
              name="nama"
              value={this.state.nama}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div>
            <label>Lama Kerja:</label>
            <input
              type="number"
              name="lk"
              onChange={this.handleInputChange}
              value={this.state.lk}
            ></input>
          </div>
          <div>
            <label>Jenis Kelamin:</label>
            <select
              name="jk"
              value={this.state.jk}
              onChange={this.handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <input type="submit" name="submit" value="Simpan"></input>
          </div>
        </form>
        <ListKaryawan
          karyawans={this._filterDataKaryawan()}
          _deleteKaryawan={this._deleteKaryawan}
          _editKaryawan={this._editKaryawan} />

      </div>

    );

  }

}


export default App;
