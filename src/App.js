import React from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import Karyawan from './Karyawan';
import { useKaryawan, baru } from './useKaryawan'

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

  const AnakKaryawan = (id) => (
    <React.Fragment>
      <button onClick={() => _deleteKaryawan(id)}>Delete Karyawan</button>
      <button onClick={() => _editKaryawan(id)}>Edit Karyawan</button>
    </React.Fragment>

  )
  const AnakKomponent = (
    <React.Fragment>
      {Karyawans.map((Satukaryawan) =>
        <Karyawan
          key={Satukaryawan._id}
          karyawan={Satukaryawan}
          AnakKaryawan={AnakKaryawan(Satukaryawan.id)}
          style={{color:'blue',fontSize:'11px'}}
        />
      )}
    </React.Fragment>
  )
  
  return (
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
        AnakKomponent={AnakKomponent}
      >
      </ListKaryawan>

    </div>

  );
}
export default App;
