import React from 'react';
import MainHeader from './MainHeader';
import LogIn from './LogIn';
import { makeStyles, CssBaseline } from '@material-ui/core';
import MainMenu from './MainMenu';
import { Route, Switch } from 'react-router-dom';
import MainContainer from './MainContainer';

const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100%"
    }
})

const MainRouter: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <MainHeader />
            <Switch>
                <Route exact path="/login" component={LogIn} />
                <Route path="/">
                    <MainMenu />
                    <MainContainer />
                </Route>
            </Switch>
        </div>
    );
}

export default MainRouter;