import React from 'react';

const Form = ({ _SimpanDataKaryawan, SingleKaryawan, handleInputChange }) => (
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
)

export default React.memo(Form);