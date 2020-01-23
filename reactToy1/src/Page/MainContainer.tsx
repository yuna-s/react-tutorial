import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router';
import ServicePage from './Services/ServicePage';
import Scrollbar from "react-custom-scrollbars";

const useStyles = makeStyles(theme => createStyles({
    container: {
        height: "100%",
        display:"flex",
        flexDirection:"column"
    },
    blank: theme.mixins.toolbar,
}))


const MainContainer: React.FC = () => {
    const classes = useStyles();
    return (
        <Scrollbar
            height="auto"
        >
            <div className={classes.container}>
                <div className={classes.blank} />
                <Switch>
                    <Route path="/service" component={ServicePage} />
                </Switch>
            </div>
        </Scrollbar>
    );
}

export default MainContainer;