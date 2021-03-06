import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { Route, Switch } from 'react-router-dom'


import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import { MenuList } from '@material-ui/core';
import MainMenu from './Menu/MainMenu';
import SubMenu from './Menu/SubMenu';
import { TextField } from '@material-ui/core'
import MainContainer from './MainContainer'

import Icon from "../Constance/Icon";
import MainHeader from './MainHeader';
//----------------------------------------------------


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: "100%"
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        zIndex: 1,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };



    return (
        <div className={classes.root}>
            <CssBaseline />
            <MainHeader handleDrawerOpen={handleDrawerOpen}
                open={open}
            />
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <Icon iconName="chevronLeft" />
                    </IconButton>
                </div>
                {/* menu list */}
                <Divider />
                <MenuList>
                    <MainMenu />
                </MenuList>
                <Divider />
                <MenuList>
                    <SubMenu />
                </MenuList>
                {/* menu bottom */}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <MainContainer />
            </main>
        </div >
    );
}