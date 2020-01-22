import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { makeStyles, CssBaseline } from '@material-ui/core'

import LogIn from './LogIn'
import Dashboard from './Dashboard'
import IconCheck from '../Constance/IconCheck'
import MainHeader from './MainHeader'
import HomePage from './Services/Home/HomePage'
import MainContainer from './MainContainer'



const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        width: "100%"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        overflow: 'auto',
    },
}))

const MainRouter: React.FC = () => {
    //なぜエラーがていた？
    const classes = useStyles()
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            {/*
            <MainHeader handleDrawerOpen={handleDrawerOpen}
                open={open}
            />
            <Switch>
                <Route exact path="/login" component={LogIn} />
                <Route path="/">
                    <MainMenu />
                    <MainContainer />
                </Route>
            </Switch>
            //ここで終わりにしたい
            
            */}
            <Switch>
                <Route exact path="/login" component={LogIn} />

                <Route path="/" component={Dashboard} />
            </Switch>
        </div>
    )
}

export default MainRouter;