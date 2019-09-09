import React, { useState } from 'react';
import { makeStyles, createStyles, Drawer, TextField, withStyles, Tabs, Tab } from '@material-ui/core';
import { AllInboxOutlined, AccessTimeOutlined, StarBorderOutlined } from '@material-ui/icons';
import MenuLayout from './Menus/MenuLayout';

const drawerWidth = 240;
const useStyles = makeStyles(theme => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main
    },
    blank: theme.mixins.toolbar,
    searchFieldWrapper: {
        padding: "8px",
        borderBottom: theme.palette.common.white
    },
    tabsContainer: {
        width: "100%"
    },
    tab: {
        minWidth: 0,
        flexGrow: 1,
        color: "white"
    }
}))


//custom style
const WhiteTextField = withStyles({
    root: {
        padding: "2px",
        '& .MuiInputBase-root': {
            color: "white"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
    }
})(TextField)

interface IMenuType {
    [menu: string]: {
        [subMenu: string]: string
    }
}

const MainMenu: React.FC = () => {
    const classes = useStyles();
    const [selectedTab, setSelect] = useState(0);
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.blank} />
            <div className={classes.searchFieldWrapper}>
                <WhiteTextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="filter"
                    label="filter navigator"
                    name="filter"
                    autoComplete="filter"
                />
            </div>
            <Tabs
                value={selectedTab}
                classes={{
                    flexContainer: classes.tabsContainer
                }}
                onChange={(e, v) => { setSelect(v) }}
            >
                <Tab
                    icon={<AllInboxOutlined />}
                    className={classes.tab}
                />
                <Tab
                    icon={<StarBorderOutlined />}
                    className={classes.tab}
                />
                <Tab
                    icon={<AccessTimeOutlined />}
                    className={classes.tab}
                />
            </Tabs>
            <MenuLayout
                selectedMenu={selectedTab}
            />
        </Drawer>
    );
}


export default MainMenu;