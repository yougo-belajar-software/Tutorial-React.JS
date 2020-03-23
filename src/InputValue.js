import React from 'react';

const InputNama = ({ _gantiNama }) => (
    <div>
        <label>Nama : </label>
        <input
            type="text"
            name="nama"
            onChange={(event) => _gantiNama(event.target.value)}
        />
    </div>
)

const InputLamaKerja = ({ _gantiLamaKerja }) => (
    <div>
        <label>Lama Kerja  : </label>
        <input
            type="number"
            name="lamaKerja"
            onChange={(event) => _gantiLamaKerja(event.target.value)}
        />
    </div>
)

const InputGender = ({ _gantiGender }) => (
    <div>
        <label>Gender : </label>
        <select onChange={(event) => _gantiGender(event.target.value)}>
            <option value="">Show All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
)

const InputValue = ({ tipe, _gantiNama, _gantiLamaKerja, _gantiGender }) => {
    switch (tipe) {
        case "nama":
            return <InputNama _gantiNama={_gantiNama}></InputNama>
        case "lamaKerja":
            return <InputLamaKerja _gantiLamaKerja={_gantiLamaKerja}></InputLamaKerja>
        case "gender":
            return <InputGender _gantiGender={_gantiGender}></InputGender>
        default:
            return null;
    }
}

export default InputValue;