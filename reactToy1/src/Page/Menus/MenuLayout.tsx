import React from 'react';
import { MenuList, makeStyles, createStyles } from '@material-ui/core';
import MainMenuList from './MainMenuList';

const useStyles = makeStyles(theme => createStyles({
    menu: {
        color: theme.palette.common.white
    }
}))


interface IProps {
    selectedMenu: number
}

const MenuLayout: React.FC<IProps> = (props) => {
    const classes = useStyles()
    return (
        <>
            {/* menu list */}
            <MenuList className={classes.menu}>
                <MainMenuList />
            </MenuList>
            {/* menu bottom */}
        </>
    );
}

export default MenuLayout;