import React from 'react'
import { MENU_URLS } from '../../Constance/URLMap'
import { NavLink } from 'react-router-dom'
import { MenuItem, Link } from '@material-ui/core'

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from "../../Constance/Icon"

//アイコン問題はあとで

const MainMenu: React.FC = (props) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [inThisComponent, setInThisComponent] = React.useState(false);


    const handleClick = (num: number) => {
        setSelectedIndex(num);
    };


    return (
        <>
            {
                MENU_URLS.map((item, index) => {
                    return (
                        <Link component={NavLink} to={item.URL}>
                            <MenuItem
                                key={index}
                                onClick={event => handleClick(index)}
                            >
                                <ListItemIcon>
                                    <Icon iconName={item.icon} />
                                </ListItemIcon>
                                {item.name}
                            </MenuItem>
                        </Link>
                    )
                })
            }
        </>
    )
}



export default MainMenu