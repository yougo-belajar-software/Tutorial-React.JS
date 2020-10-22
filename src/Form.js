import React from 'react';
import { TextField } from '@material-ui/core';

const Form = ({ _SimpanDataKaryawan, SingleKaryawan, handleInputChange }) => (
    <form onSubmit={_SimpanDataKaryawan}>
        <TextField type="text"
            name="nama"
            label="Nama"
            value={SingleKaryawan.nama}
            onChange={handleInputChange}
        ></TextField>
        <TextField
            type="email"
            name="email"
            label="email"
            value={SingleKaryawan.email}
            onChange={handleInputChange}
        ></TextField>
        <TextField
            type="number"
            name="lamaKerja"
            label="Lama Kerja"
            onChange={handleInputChange}
            value={SingleKaryawan.lamaKerja}
        ></TextField>
        <input type="submit" name="submit" value="Simpan"></input>
    </form>
)

export default React.memo(Form);