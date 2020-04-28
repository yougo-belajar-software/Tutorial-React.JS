import React from 'react'
import ListKaryawan from './ListKaryawan'
import { useKaryawan } from './useKaryawan'
import Karyawan from './Karyawan'

const Admin = () => {
    const [Karyawans] = useKaryawan([]);

    const style = {color:'gray'}

    const _tampilkanGaji = (props) => alert(`Hello, ${props}`)
    
    const AnakKaryawan = (nama) => (
        <React.Fragment>
            <button onClick={() => _tampilkanGaji(nama)}>
                Tampilkan Gaji
            </button>
        </React.Fragment>

    )
    const AnakKomponent = (
        <React.Fragment>
            {Karyawans.map((Satukaryawan) =>
                <Karyawan
                    key={Satukaryawan._id}
                    karyawan={Satukaryawan}
                    AnakKaryawan={AnakKaryawan(Satukaryawan.nama)}
                    style={style}
                />
            )}
        </React.Fragment>
    )

    return (
        <div className="App">
            <h2>Admin Page</h2>
            <ListKaryawan
                AnakKomponent={AnakKomponent}
            />
        </div>
    );
}
export default Admin;
