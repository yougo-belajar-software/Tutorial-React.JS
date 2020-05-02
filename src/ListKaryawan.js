import React from 'react';

const ListKaryawan = ({ AnakKomponent }) =>
    (
        <ul>
            {AnakKomponent}
        </ul>
    )

export default React.memo(ListKaryawan);