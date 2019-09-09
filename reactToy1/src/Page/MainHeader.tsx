import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    }
}))

const MainHeader: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Typography
                    variant="h4"
                >
                    SoftBank ITSM
                    </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default MainHeader;