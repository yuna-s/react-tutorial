import React from 'react'
//import Icon
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HelpIcon from '@material-ui/icons/Help';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';


export default function IconCheck(icon: string): JSX.Element {

    switch (icon) {
        case "home":
            return (<HomeIcon />)
        case "book":
            return (<MenuBookOutlinedIcon />)
        case "question":
            return (<HelpIcon />)
        case "apply":
            return (<LibraryBooksOutlinedIcon />)
        case "contact":
            return (<MailOutlineIcon />)
        case "menu":
            return (<MenuIcon />)
        case "chevronLeft":
            return (<ChevronLeftIcon />)
        case "notification":
            return (<NotificationsIcon />)
        default:
            return (<StarBorderIcon />)
    }
}