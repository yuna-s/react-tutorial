import React from 'react';
import { MenuItem, Link } from '@material-ui/core';
import { MENU_URLS } from '../../Constance/URLMap';
import { NavLink } from 'react-router-dom';



const MainMenuList: React.FC = (props) => {
    return (
        <>
            {
                MENU_URLS.map((item, index) => {
                    return (
                        <Link color="inherit" component={NavLink} to={item.URL}>
                            <MenuItem key={index}>
                                {item.name}
                            </MenuItem>
                        </Link>
                    );
                })
            }
        </>
    );
}

export default MainMenuList;