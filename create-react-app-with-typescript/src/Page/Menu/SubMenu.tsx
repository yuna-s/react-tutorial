import React from 'react'
import { SUBMENU_URLS } from '../../Constance/URLMap'
import { NavLink } from 'react-router-dom'
import { MenuItem, Link, ListItemText, Collapse, makeStyles, Theme, createStyles } from '@material-ui/core'
import MainRouter from '../MainRouter'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from "../../Constance/Icon"
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
                                    key={`SubMenuMenuItem-No:${index}`}
                                    onClick={event => handleClick(index)}
                                    selected={selectedIndex === index}
                                >
                                    <ListItemIcon key={`SubMenuListItemIcon-No:${index}`}>
                                        <Icon iconName={item.icon} />
                                    </ListItemIcon>
                                    <ListItemText key={`SubMenuListItemText-No:${index}`} primary={item.name} />
                                    {(open && (selectedIndex == index)) ? <ExpandLess /> : <ExpandMore />}
                                </MenuItem>
                                <Collapse key={`SubMenuCollapse-No:${index}`} in={open && (selectedIndex == index)} timeout="auto" unmountOnExit>
                                    {
                                        item.subsubmenu.map((subItem, subIndex) => {
                                            return (
                                                <Link key={`SubMenuLink-No:${index}-No:${subIndex}`} component={NavLink} to={subItem.URL}>
                                                    <MenuItem key={`SubMenuMenuItem-No:${index}-No:${subIndex}`} className={classes.nested}>
                                                        <ListItemIcon key={`SubMenuListItemIcon-No:${index}-No:${subIndex}`} >
                                                            <Icon iconName={subItem.icon} />
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
                            <MenuItem
                                key={`SubMenuMenuItem-No:${index}`}
                                onClick={event => handleClick(index)}
                                selected={selectedIndex === index}
                            >
                                <ListItemIcon>
                                    <Icon iconName={item.icon} />
                                </ListItemIcon>
                                <ListItemText key={`SubMenuListItemText-No:${index}`} primary={item.name} />
                            </MenuItem>
                        )
                    }
                })
            }
        </>
    )
}
export default SubMenu