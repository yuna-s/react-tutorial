import React from 'react'
import { Switch, Route } from 'react-router'
import { createStyles, makeStyles } from '@material-ui/core'
import Copyright from '../Constance/Copyright'

//Routing
import HomePage from './Services/Home/HomePage'
import DocsPage from './Services/Docs/DocsPage'


const useStyles = makeStyles(theme => createStyles({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    blank: theme.mixins.toolbar,
}))

const MainContainer: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Switch>
                <Route path="/docs" component={DocsPage} />
                <Route path="/home" component={HomePage} />
            </Switch>
            <Copyright />
        </div>
    )
}

export default MainContainer