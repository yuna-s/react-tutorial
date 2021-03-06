import React from 'react';
import { IconProps } from './interface';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HelpIcon from '@material-ui/icons/Help';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import DoneIcon from '@material-ui/icons/Done';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import InfoIcon from '@material-ui/icons/Info';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DnsIcon from '@material-ui/icons/Dns';
import BuildIcon from '@material-ui/icons/Build';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';

export default function Icon(props: IconProps): JSX.Element {
  switch (props.iconName) {
    case "home":
      return (<HomeIcon />);
    case "book":
      return (<MenuBookOutlinedIcon />);
    case "question":
      return (<HelpIcon />);
    case "application":
      return (<LibraryBooksOutlinedIcon />);
    case "contact":
      return (<MailOutlineIcon />);
    case "menu":
      return (<MenuIcon />);
    case "chevronLeft":
      return (<ChevronLeftIcon />);
    case "notification":
      return (<NotificationsIcon />);
    case "account":
      return (<PersonIcon />);
    case "sharedAccount":
      return (<SupervisorAccountIcon />);
    case "mypage":
      return (<AccountCircleIcon />);
    case "userPermissons":
      return (<RecentActorsIcon />);
    case "approvalGroup":
      return (<DoneIcon />);
    case "applicationGroup":
      return (<PeopleOutlineIcon />);
    case "systemGroup":
      return (<LaptopChromebookIcon />);
    case "info":
      return (<InfoIcon />);
    case "straightApi":
      return (<SettingsEthernetIcon />);
    case "settiongUsers":
      return (<AssignmentIndIcon />);
    case "master":
      return (<DnsIcon />);
    case "tools":
      return (<BuildIcon />);
    case "history":
      return (<HistoryOutlinedIcon />);
    default:
      return (<StarBorderIcon />);
  }
}


export type icons = string & {
  "home"?: string,
  "book"?: string,
  "question"?: string,
  "application"?: string,
  "contact"?: string,
  "menu"?: string,
  "chevronLeft"?: string,
  "notification"?: string,
  "account"?: string,
  "sharedAccount"?: string,
  "mypage"?: string,
  "userPermissons"?: string,
  "approvalGroup"?: string,
  "applicationGroup"?: string,
  "systemGroup"?: string,
  "info"?: string,
  "settiongUsers"?: string,
  "master"?: string,
  "tools"?: string,
  "history"?: string,
}

