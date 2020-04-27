import React from 'react';
import ListKaryawan from './ListKaryawan';
import { useKaryawan } from './useKaryawan'
export const myContext = React.createContext();

const Admin = () => {
    const [Karyawans] = useKaryawan([]);

    const _deleteKaryawan = (id) => {
    }

    const _editKaryawan = (id) => {
    }

    return (
        <myContext.Provider value={
            {
                edit: _editKaryawan,
                delete: _deleteKaryawan
            }}>
            <div className="App">
                <div className="header">Admin Page</div>
                <ListKaryawan
                    karyawans={Karyawans} />
            </div>
        </myContext.Provider>

    );
}
export default Admin;
