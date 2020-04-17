import React, { useContext } from 'react';
import Male from './logo/male-solid.svg';
import Female from './logo/female-solid.svg';
import { myContext } from './App';

const Karyawan = ({ karyawan }) => {
    const context = useContext(myContext);
    return (
        <li>
            <div>Nama : {karyawan.nama}</div>
            <div>Email: {karyawan.email}</div>
            <div>lamaKerja : {karyawan.lamaKerja}</div>
            <div>Jenis Kelamin : {karyawan.gender}</div>
            <div>
                <img src={(karyawan.gender === "male" ? Male : Female)} width='20px' alt={karyawan.nama} />
            </div>
            <div>
                <button onClick={() => context.delete(karyawan.id)}>
                    Delete Karyawan
                </button>
                <button onClick={() => context.edit(karyawan.id)}>
                    Edit Karyawan
                </button>
            </div>
        </li>
    )
}

export default Karyawan;