import { useState, useEffect } from 'react';
import Axios from 'axios';

//url untuk dipakai berulang kali
const MainURL = process.env.REACT_APP_API_URL;

//data untuk reset state (karyawan baru)
export const baru = {
    nama: '',
    email: '',
    lamaKerja: 0,
    gender: 'male',
    id: ''
}

export const useKaryawan = () => {

    //untuk refetch data ketika mount dan setiap ada perubahan data
    const [Counter, setCounter] = useState(0)

    //State untuk menampung daftar Karyawan 
    const [Karyawans, setKaryawans] = useState([])

    //state untuk Trigger useEffect `POST/PUT` simpan data ke backend ketika `Form Submit` 
    const [UpdateData, setUpdateData] = useState(null)

    //state untuk id yang akan di delete dari Server dengan useEffect
    const [DeleteID, setDeleteID] = useState(null)

    //State untuk form input 
    const [SingleKaryawan, setSingleKaryawan] = useState(baru)

    //state untuk ID Karyawan trigger useEffect ambil data 1 karyawan ke Server
    const [SingleID, setSingleID] = useState(null);

    //Trigger Fetch Data
    useEffect(() => {
        const url = MainURL;
        Axios.get(url).then(
            response => setKaryawans(response.data)
        )
    }, [Counter])
    const reset = () => {
            setCounter(c => c + 1);
            setSingleID(null);
            setSingleKaryawan(baru);
        }
        //Trigger Update & Baru simpan ke Backend
    useEffect(() => {
        if (UpdateData !== null) {
            const data = UpdateData;
            if (data.id === "") {
                const url = MainURL
                Axios.post(url, data).then(
                    () => reset()
                )
            } else {
                const url = `${MainURL}/${data.id}`;
                Axios.put(url, data).then(
                    () => reset()
                )
            }
        }
    }, [UpdateData])

    //Trigger Delete Single Karyawan dari Backend
    useEffect(() => {
        if (DeleteID !== null) {
            const url = `${MainURL}/${DeleteID}`
            Axios.delete(url).then(
                () => reset()
            )
        }
    }, [DeleteID])

    //Trigger Get Single Karyawan dari Backend
    useEffect(() => {
        if (SingleID !== null) {
            const url = `${MainURL}/${SingleID}`;
            Axios.get(url).then(
                response => setSingleKaryawan(response.data.result)
            )
        }
    }, [SingleID])


    return [Karyawans, SingleKaryawan, setUpdateData, setDeleteID, setSingleID, setSingleKaryawan]
}