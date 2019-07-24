import React from 'react'
import { ContentSelectionItem } from './ContentSelection';
import { Grid, Typography, List, ListItem, Checkbox, ListItemIcon, ListItemText } from '@material-ui/core';

export interface SelectionPanelItem {
    item: ContentSelectionItem;
}

export const SelectionPanelItem = (props: SelectionPanelItem) => {
    const [checked, setChecked] = React.useState([] as string[]);

    const handleToggle = (value: string) => () => {
        if (checked.includes(value)) {
            const newChecked = checked.filter((item)=>item!==value)
            setChecked(newChecked);
        }
        else {
            const newChecked = [...checked];
            newChecked.push(value);
            setChecked(newChecked);
        }
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>
                    {`${props.item.title} - ${props.item.company}`}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <List>
                    {props.item.actions.map(action => {
                        const labelId = `checkbox-list-label-${action}`;
                        return (
                            <ListItem key={action} role={undefined} dense button onClick={handleToggle(action)}>
                            <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.includes(action)}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={action} />
                        </ListItem>
                        )
                    })}
                </List>
            </Grid>
        </Grid>
    )
}