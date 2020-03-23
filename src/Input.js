import React from 'react';

const Input = ({ _simpanTipeFilter }) =>
    (
        <div>
            <div>
                <label>Tipe Filter: </label>
                <select onChange={(event) => _simpanTipeFilter(event.target.value)}>
                    <option value="nama">Nama</option>
                    <option value="lamaKerja">Lama Kerja</option>
                    <option value="gender">Jenis Kelamin</option>
                </select>
            </div>
        </div>
    )

export default Input;