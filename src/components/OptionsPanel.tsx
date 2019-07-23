import React from 'react';
import { Typography, Divider, TextField, Grid } from '@material-ui/core';
import { ThemeCard } from './ThemeCard';


const ThemeList= [
    {
        imageURL: "https://robohash.org/Victoria.png",
        title: "Victoria",
        themeName: "Theme 1"
    },
    {
        imageURL: "https://robohash.org/Isaiah.png",
        title: "Isaiah",
        themeName: "Theme 1"
    },
    {
        imageURL: "https://robohash.org/Tanvi.png",
        title: "Tanvi",
        themeName: "Theme 3"
    }
]

export const OptionsPanel = () => {
    return (
        <div>
            <Typography variant="h3">
                Create Video
            </Typography>
            <Divider variant="middle"/>
            <Typography variant="h5" >
                1) Select Theme
            </Typography>
            <Grid container spacing={2}>
                {ThemeList.map((item) => (
                    <Grid item xs={2}>
                        <ThemeCard imageURL={item.imageURL} themeName={item.themeName} title={item.title}/>
                    </Grid>
                ))}
            </Grid>
            <Divider variant="middle"/>
            <Typography variant="h5" >
                2) Personal Statement
            </Typography>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                defaultValue="Personal Statement"
                margin="normal"
                variant="outlined"
            />
        </div>
    )
}