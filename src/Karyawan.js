import React from 'react';
import Male from './logo/male-solid.svg';
import Female from './logo/female-solid.svg';

const Karyawan = ({ karyawan, AnakKaryawan, style }) => {
    return (
        <li style={style}>
            <div>Nama : {karyawan.nama}</div>
            <div>Email: {karyawan.email}</div>
            <div>lamaKerja : {karyawan.lamaKerja}</div>
            <div>Jenis Kelamin : {karyawan.gender}</div>
            <div>
                <img src={(karyawan.gender === "male" ? Male : Female)} width='20px' alt={karyawan.nama} />
            </div>
            <div>
                {AnakKaryawan}
            </div>
        </li>
    )
}

export default React.memo(Karyawan);