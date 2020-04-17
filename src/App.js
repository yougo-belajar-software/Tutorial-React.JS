import React, { useState, useEffect } from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import axios from 'axios';

export const myContext = React.createContext();

const App = () => {
  const [Karyawans, setKaryawans] = useState([]);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    lk: 0,
    jk: 'male',
    id: ''
  })

  useEffect(() => _ambilData(), []);


  const _ambilData = () => {
    const url = "http://localhost:8000/karyawan";
    axios.get(url).then(
      response => setKaryawans(response.data.results)
    )
  }

  const _deleteKaryawan = (id) => {
    const url = `http://localhost:8000/karyawan/${id}`
    axios.delete(url).then(
      () => _ambilData()
    )
  }

  const _SimpanDataKaryawan = (event) => {
    event.preventDefault();
    const data = {
      id: formData.id,
      _id: Math.floor(Math.random() * 1000000),
      nama: formData.nama,
      email: formData.email,
      gender: formData.jk,
      lamaKerja: formData.lk
    }

    if (formData.id === "") {
      const url = "http://localhost:8000/karyawan";
      axios.post(url, data).then(
        () => _ambilData()
      )
    } else {
      const url = `http://localhost:8000/karyawan/${formData.id}`;
      axios.put(url, data).then(
        () => _ambilData()
      )
    }
  }

  const _tambahKaryawan = () => {
    setFormData({
      id: '',
      nama: '',
      email: '',
      jk: 'male',
      lk: '0'
    })
  }

  const _editKaryawan = (id) => {
    const url = `http://localhost:8000/karyawan/${id}`;
    axios.get(url).then(
      response => {
        const data = response.data.result;
        setFormData({
          id: data.id,
          nama: data.nama,
          jk: data.gender,
          email: data.email,
          lk: data.lamaKerja
        })
      }
    )
  }


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <myContext.Provider value={
      {
        edit: _editKaryawan,
        delete: _deleteKaryawan
      }}>
      <div className="App">
        <div className="header">Daftar Karyawan</div>
        <button onClick={_tambahKaryawan}>Karyawan Baru</button>
        <form onSubmit={_SimpanDataKaryawan}>
          <div>
            <label>Nama : </label>
            <input type="text"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label>Lama Kerja:</label>
            <input
              type="number"
              name="lk"
              onChange={handleInputChange}
              value={formData.lk}
            ></input>
          </div>
          <div>
            <label>Jenis Kelamin:</label>
            <select
              name="jk"
              value={formData.jk}
              onChange={handleInputChange}
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
          karyawans={Karyawans}
          _deleteKaryawan={_deleteKaryawan}
          _editKaryawan={_editKaryawan} />

      </div>
    </myContext.Provider>

  );
}
export default App;
