import React from 'react'
import Scrollbar from "react-custom-scrollbars"
import DocsPage from './Services/Docs/DocsPage'
import { Switch, Route } from 'react-router'
import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => createStyles({
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    blank: theme.mixins.toolbar,
}))

const MainContainer: React.FC = () => {
    const classes = useStyles()
    return (
        <Scrollbar height="auto">
            <div className={classes.container}>
                <div className={classes.blank} />
                <Switch>
                    <Route path="/docs" component={DocsPage} />
                    <Route path="/docs" component={DocsPage} />
                </Switch>
            </div>
        </Scrollbar>
    )
}

export default MainContainer