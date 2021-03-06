import React from 'react';
import clsx from 'clsx';

import { AppBar, Toolbar, Typography, makeStyles, IconButton, Badge } from '@material-ui/core';

//constanceの読み込み
import { drawerWidth, title } from '../Constance/Value'
import Icon from "../Constance/Icon";
import { NavLink, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
}))

const MainHeader: React.FC<{ open: any, handleDrawerOpen: any }> = ({ handleDrawerOpen, open }) => {
    const classes = useStyles();

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <Icon iconName="menu" />
                </IconButton>
                <Typography component={Link} to="/top" variant="h6" color="inherit" noWrap className={classes.title}>
                    {title}
                </Typography>
                <Typography >
                    杉本 優奈
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default MainHeader;


