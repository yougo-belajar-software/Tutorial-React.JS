import React from 'react';

const Karyawan = ({ karyawan }) =>
    (
        <li>
            <div>Nama : {karyawan.nama}</div>
            <div>Email: {karyawan.email}</div>
            <div>lamaKerja : {karyawan.lamaKerja}</div>
            <div>Jenis Kelamin : {karyawan.gender}</div>
        </li>
    )

export default Karyawan;