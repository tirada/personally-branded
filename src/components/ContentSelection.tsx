import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, useTheme, Grid } from '@material-ui/core';
import { SelectionPanelItem } from './SelectionPanelItem';

export interface ContentSelectionProps {
    items: ContentSelectionItem[];
    title: string;
}

export interface ContentSelectionItem {
    title: string;
    company: string;
    actions: (string)[];
}

export const ContentSelection = (props: ContentSelectionProps) => {
    return (
        <ExpansionPanel>
        <ExpansionPanelSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        >
        <Typography >{props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid container>
        {props.items.map((item: ContentSelectionItem)=> {
            return (
                <Grid item xs={12}>
                    <SelectionPanelItem item={item}/>
                </Grid>
            )
        })}
        </Grid>
        </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}