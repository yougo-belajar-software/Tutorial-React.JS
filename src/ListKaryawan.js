import React from 'react';
import Karyawan from './Karyawan';

const ListKaryawan = ({ karyawans, _deleteKaryawan }) =>
    (
        <ul>
            {karyawans.map((Satukaryawan) =>
                <Karyawan
                    key={Satukaryawan._id}
                    karyawan={Satukaryawan}
                    _deleteKaryawan={_deleteKaryawan}
                />
            )}
        </ul>
    )

export default ListKaryawan;