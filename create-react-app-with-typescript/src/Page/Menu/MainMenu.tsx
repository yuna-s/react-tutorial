import React from 'react'
import { MENU_URLS } from '../../Constance/URLMap'
import { NavLink } from 'react-router-dom'
import { MenuItem, Link } from '@material-ui/core'
import MainRouter from '../MainRouter'

import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconCheck from '../../Constance/IconCheck'

//アイコン問題はあとで

const MainMenu: React.FC = (props) => {
    const propTypes = {
        selected: propTypes.func,
    };

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
                                selected={selectedIndex === index}
                            >
                                <ListItemIcon>
                                    {IconCheck(item.icon)}
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