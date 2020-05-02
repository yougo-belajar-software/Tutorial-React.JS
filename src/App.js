import React from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import Karyawan from './Karyawan';
import { useKaryawan, baru } from './useKaryawan'
import Form from './Form';

const AnakKomponent = ({ Karyawans, AnakKaryawan }) => (
  <React.Fragment>
    {Karyawans.map((Satukaryawan) =>
      <Karyawan
        key={Satukaryawan._id}
        karyawan={Satukaryawan}
        AnakKaryawan={AnakKaryawan(Satukaryawan.id)}
        style={{ color: 'blue', fontSize: '11px' }}
      />
    )}
  </React.Fragment>
)

const App = () => {
  const [Karyawans, SingleKaryawan, setUpdateData, setDeleteID, setSingleID, setSingleKaryawan] = useKaryawan([]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setSingleKaryawan({
      ...SingleKaryawan,
      [name]: value
    });
  }

  const AnakKaryawan = React.useMemo(() => (id) => (
    <React.Fragment>
      <button onClick={() => setDeleteID(id)}>Delete Karyawan</button>
      <button onClick={() => setSingleID(id)}>Edit Karyawan</button>
    </React.Fragment>
  ), [setDeleteID, setSingleID])

  return (
    <div className="App">
      <div className="header">Daftar Karyawan</div>
      <button onClick={() => setSingleKaryawan(baru)}>Karyawan Baru</button>
      <Form
        _SimpanDataKaryawan={(event) => {
          event.preventDefault();
          setUpdateData(SingleKaryawan);
        }}
        SingleKaryawan={SingleKaryawan}
        handleInputChange={handleInputChange}
      ></Form>
      <ListKaryawan
        AnakKomponent={
          React.useMemo(
            () =>
              <AnakKomponent
                Karyawans={Karyawans}
                AnakKaryawan={AnakKaryawan}
              ></AnakKomponent>,
            [Karyawans, AnakKaryawan]
          )}
      >
      </ListKaryawan>

    </div>

  );
}
export default React.memo(App);
