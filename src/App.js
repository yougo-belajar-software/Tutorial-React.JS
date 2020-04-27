import React from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import { useKaryawan, baru } from './useKaryawan'
export const myContext = React.createContext();

const App = () => {
  const [Karyawans, SingleKaryawan, setUpdateData, setDeleteID, setSingleID, setSingleKaryawan] = useKaryawan([]);

  const _deleteKaryawan = (id) => {
    setDeleteID(id)
  }

  const _SimpanDataKaryawan = (event) => {
    event.preventDefault();
    setUpdateData(SingleKaryawan);
  }

  const _tambahKaryawan = () => {
    setSingleKaryawan(baru)
  }

  const _editKaryawan = (id) => {
    setSingleID(id)
  }


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setSingleKaryawan({
      ...SingleKaryawan,
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
              value={SingleKaryawan.nama}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={SingleKaryawan.email}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label>Lama Kerja:</label>
            <input
              type="number"
              name="lamaKerja"
              onChange={handleInputChange}
              value={SingleKaryawan.lamaKerja}
            ></input>
          </div>
          <div>
            <label>Jenis Kelamin:</label>
            <select
              name="gender"
              value={SingleKaryawan.gender}
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
          karyawans={Karyawans} />
      </div>
    </myContext.Provider>

  );
}
export default App;
