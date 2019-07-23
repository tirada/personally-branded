import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'

export interface ThemeCardProps {
    imageURL: string;
    title: string;
    themeName: string;
}


export const ThemeCard = (props: ThemeCardProps) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image={props.imageURL}
                    title={props.title}
                    style={{height: '140px'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1">
                        {props.themeName}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Select
                </Button>
            </CardActions>
        </Card>
    )
}