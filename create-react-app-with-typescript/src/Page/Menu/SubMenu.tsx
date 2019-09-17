import React from 'react'
import { SUBMENU_URLS } from '../../Constance/URLMap'
import { NavLink } from 'react-router-dom'
import { MenuItem, Link } from '@material-ui/core'
import MainRouter from '../MainRouter'
import HomeIcon from '@material-ui/icons/Home';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Icon } from '@material-ui/core'
import IconCheck from '../../Constance/IconCheck'

const SubMenu: React.FC = (props) => {


    return (
        <>
            {
                SUBMENU_URLS.map((item, index) => {
                    return (
                        <Link component={NavLink} to={item.URL}>
                            <MenuItem key={index}>
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

export default SubMenu