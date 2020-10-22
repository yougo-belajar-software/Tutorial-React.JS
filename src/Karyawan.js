import React from 'react';
import Company from './images/company.jfif';
import { CardContent, CardMedia,  ListItemText, Grid, Card, ListItem, List, ListItemIcon } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
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
const Karyawan = ({ karyawan, AnakKaryawan }) => {
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
                    <List >
                        <ListItem>
                            <ListItemIcon><ArrowRight /></ListItemIcon>
                            <ListItemText secondary={karyawan.name} primary="Name : " />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><ArrowRight /></ListItemIcon>
                            <ListItemText secondary={karyawan.phone} primary="Phone Number : " />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><ArrowRight /></ListItemIcon>
                            <ListItemText secondary={karyawan.email} primary="Email : "/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><ArrowRight /></ListItemIcon>
                            <ListItemText secondary={karyawan.username} primary="Username : "/>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Grid >
    )
}

export default React.memo(Karyawan);