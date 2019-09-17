import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HelpIcon from '@material-ui/icons/Help';

import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="トップページ" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MenuBookOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="SSOとは" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="よくある質問" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Contact </ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <LibraryBooksOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="SSO連携申請" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="お問い合わせ" />
        </ListItem>
    </div>
);

/*
export const serchFilter = (
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
);
*/