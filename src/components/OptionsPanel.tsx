import React from 'react';
import { Typography, Divider, TextField, Grid, useTheme } from '@material-ui/core';
import { ThemeCard } from './ThemeCard';
import { ContentSelection, ContentSelectionItem } from './ContentSelection';


export const ThemeList= [
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

export const OptionList: ContentSelectionItem[] = [
    {
        title: 'Summer Analyst',
        company: 'Accenture',
        actions: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipisicing elit. ",
            "Corrupti, quaerat dolorem dolorum pariatur ",
            "sit cum illum mollitia temporibus quo ",
            "tempora quia labore commodi",
            "quidem nemo eaque vel porro voluptatibus itaque?"
        ]
    },
    {
        title: 'PMO',
        company: 'Accenture',
        actions: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipisicing elit. ",
            "Corrupti, quaerat dolorem dolorum pariatur ",
            "sit cum illum mollitia temporibus quo ",
            "tempora quia labore commodi",
            "quidem nemo eaque vel porro voluptatibus itaque?"
        ]
    }
]

export const OptionsPanel = () => {
    const theme = useTheme();
    return (
        <div style={{padding: theme.spacing(4), paddingTop: '0px'}}>
            <Typography variant="h5" style={{marginBottom: theme.spacing(2)}}>
                1) Select Theme
            </Typography>
            <Grid container spacing={2}>
                {ThemeList.map((item) => (
                    <Grid item xs={4}>
                        <ThemeCard imageURL={item.imageURL} themeName={item.themeName} title={item.title}/>
                    </Grid>
                ))}
            </Grid>
            <Divider variant="middle" style={{margin: theme.spacing(2)}}/>
            <Typography variant="h5" style={{marginBottom: theme.spacing(2)}}>
                2) Personal Statement
            </Typography>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                style={{width: '100%'}}
                placeholder="Personal Statement"
            />
            <Divider variant="middle" style={{margin: theme.spacing(2)}}/>
            <Typography variant="h5" style={{marginBottom: theme.spacing(2)}}>
                3) Select Content
            </Typography>
            <ContentSelection title='Work Experience' items={OptionList}/>
            <ContentSelection title='Work Experience' items={OptionList}/>
            <ContentSelection title='Work Experience' items={OptionList}/>
            <Divider variant="middle" style={{margin: theme.spacing(2)}}/>
            <Typography variant="h5" style={{marginBottom: theme.spacing(2)}}>
                4) Closing Statement
            </Typography>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                style={{width: '100%'}}
                placeholder="Closing Statement"
            />
        </div>
    )
}