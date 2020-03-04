import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'


import LogIn from './LogIn'
import Dashboard from './Dashboard'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: "flex",
        width: "100%"
    },
    //appBarSpacer: theme.mixins.toolbar,
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