import React from 'react'
import { SUBMENU_URLS } from '../../Constance/URLMap'
import { NavLink } from 'react-router-dom'
import { MenuItem, Link, ListItemText, Collapse, makeStyles, Theme, createStyles } from '@material-ui/core'
import MainRouter from '../MainRouter'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconCheck from '../../Constance/IconCheck';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const SubMenu: React.FC = (props) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            nested: {
                paddingLeft: theme.spacing(4),
            },
        }),
    )
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = (num: number) => {
        setOpen(!open);
        setSelectedIndex(num);
    };


    return (
        <>
            {
                SUBMENU_URLS.map((item, index) => {
                    if (item.subsubmenu != undefined) {
                        return (
                            <>
                                <MenuItem
                                    key={index}
                                    onClick={event => handleClick(index)}
                                    selected={selectedIndex === index}
                                >
                                    <ListItemIcon>
                                        {IconCheck(item.icon)}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                    {(open && (selectedIndex == index)) ? <ExpandLess /> : <ExpandMore />}
                                </MenuItem>
                                <Collapse in={open && (selectedIndex == index)} timeout="auto" unmountOnExit>
                                    {
                                        item.subsubmenu.map((subItem, subIndex) => {
                                            return (
                                                <Link component={NavLink} to={subItem.URL}>
                                                    <MenuItem key={subIndex} className={classes.nested}>
                                                        <ListItemIcon>
                                                            {IconCheck(subItem.icon)}
                                                        </ListItemIcon>
                                                        {subItem.name}
                                                    </MenuItem>
                                                </Link>
                                            )
                                        })
                                    }
                                </Collapse>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <MenuItem
                                    key={index}
                                    onClick={event => handleClick(index)}
                                    selected={selectedIndex === index}
                                >
                                    <ListItemIcon>
                                        {IconCheck(item.icon)}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </MenuItem>

                            </>
                        )
                    }
                })
            }
        </>
    )
}
export default SubMenu