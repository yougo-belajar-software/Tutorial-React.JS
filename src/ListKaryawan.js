import React from 'react';
import Karyawan from './Karyawan';

const ListKaryawan = ({ karyawans, _deleteKaryawan,_editKaryawan }) =>
    (
        <ul>
            {karyawans.map((Satukaryawan) =>
                <Karyawan
                    key={Satukaryawan._id}
                    karyawan={Satukaryawan}
                    _deleteKaryawan={_deleteKaryawan}
                    _editKaryawan={_editKaryawan}
                />
            )}
        </ul>
    )

export default ListKaryawan;