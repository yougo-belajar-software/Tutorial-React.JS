import React from 'react';
import Male from './logo/male-solid.svg';
import Female from './logo/female-solid.svg';
import Company from './images/company.jfif';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/core/styles/makeStyles';

const myStyle = makeStyles({
    card: {
        margin: 20,
        padding: 20
    },
    media: {
        height: 140,
    },
})
const Karyawan = ({ karyawan, AnakKaryawan, style }) => {
    const classes = myStyle();
    return (
        <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card className={classes.card}>
                <CardMedia
                    image={Company}
                    className={classes.media}
                >
                </CardMedia>
                <CardContent>
                    <div>Nama : {karyawan.nama}</div>
                    <div>Email: {karyawan.email}</div>
                    <div>lamaKerja : {karyawan.lamaKerja}</div>
                    <div>Jenis Kelamin : {karyawan.gender}</div>
                    <div>
                        <img src={(karyawan.gender === "male" ? Male : Female)} width='20px' alt={karyawan.nama} />
                    </div>
                    <div>
                        {AnakKaryawan}
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default React.memo(Karyawan);