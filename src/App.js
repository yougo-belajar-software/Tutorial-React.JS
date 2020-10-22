import React from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import Karyawan from './Karyawan';
import { useKaryawan } from './useKaryawan'
import { Container } from '@material-ui/core/';
import ParticlesBg from 'particles-bg'

const AnakKomponent = ({ Karyawans }) => (
  <React.Fragment>
    {Karyawans.map((Satukaryawan) =>
      <Karyawan
        key={Satukaryawan.id}
        karyawan={Satukaryawan}
      />
    )}
  </React.Fragment>
)

const App = () => {
  const [Karyawans] = useKaryawan([]);


  return (
    <div className="App">
      <ParticlesBg type="random" bg={true} />
      <Container maxWidth="lg" component="h1">
        <ListKaryawan
          AnakKomponent={
            React.useMemo(
              () =>
                <AnakKomponent
                  Karyawans={Karyawans}
                ></AnakKomponent>,
              [Karyawans]
            )}
        >
        </ListKaryawan>
      </Container>
    </div>

  );
}
export default React.memo(App);
