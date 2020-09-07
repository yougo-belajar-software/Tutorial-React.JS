import React from 'react';
import Grid from '@material-ui/core/Grid';

const ListKaryawan = ({ AnakKomponent }) =>
    (
        <Grid container>
            {AnakKomponent}
        </Grid>
    )

export default React.memo(ListKaryawan);