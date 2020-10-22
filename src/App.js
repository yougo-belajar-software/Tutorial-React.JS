import React from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import Karyawan from './Karyawan';
import { useKaryawan, baru } from './useKaryawan'
import Form from './Form';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

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
      <Button onClick={() => setDeleteID(id)} variant="contained" color="primary">Delete Karyawan</Button>
      <Button onClick={() => setSingleID(id)} variant="contained" color="secondary">Edit Karyawan</Button>
    </React.Fragment>
  ), [setDeleteID, setSingleID])

  return (
    <div className="App">
      <Container maxWidth="lg">
        <div className="header">Daftar Karyawan</div>
        <Button onClick={() => setSingleKaryawan(baru)} variant="contained">Karyawan Baru</Button>
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
      </Container>
    </div>

  );
}
export default React.memo(App);
