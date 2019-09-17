import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import LogIn from './LogIn'
import Dashboard from './Dashboard'

const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100%"
    }
})

const MainRouter: React.FC = () => {
    //なぜエラーがていた？
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Switch>
                <Route exact path="/login" component={LogIn} />
                <Route path="/">
                    <Dashboard />
                    {/*<MainContainer />*/}
                </Route>
            </Switch>
        </div>
    )
}

export default MainRouter;