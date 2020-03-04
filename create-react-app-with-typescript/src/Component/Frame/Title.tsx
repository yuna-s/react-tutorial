import React, { ReactChildren, ComponentProps } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    title: {
        fontSize: 'x-large',

    }
}))


export default function Title(props: TitleProps) {
    const classes = useStyles();
    return (
        <Typography className={classes.title} component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}


export interface TitleProps {
    children: React.ReactNode
};