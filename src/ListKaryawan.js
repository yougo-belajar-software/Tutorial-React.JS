import React from 'react';
import Karyawan from './Karyawan';

const ListKaryawan = ({ karyawans }) =>
    (
        <ul>
            {karyawans.map((Satukaryawan) =>
                <Karyawan
                    key={Satukaryawan._id}
                    karyawan={Satukaryawan}
                />
            )}
        </ul>
    )

export default ListKaryawan;