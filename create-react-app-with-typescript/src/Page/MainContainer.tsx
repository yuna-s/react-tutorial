import React from 'react'
import { Switch, Route } from 'react-router'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Copyright from '../Constance/Copyright'

//Routing
import AccountSearchPage from './Services/Search/AccountSearchPage'
import TopPage from './Services/Top/TopPage'
import theme from '../theme'
import AccountDetailPage from './Services/AccountDetail/AccountDetailPage'


const useStyles = makeStyles((theme) => createStyles({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    //blank: theme.mixins.toolbar,
}))

const MainContainer: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Switch>
                <Route path="/accountSearch" component={AccountSearchPage} />
                <Route path="/sharedAccountDetail" component={AccountDetailPage} />
                <Route path="/top" component={TopPage} />
            </Switch>
            <Copyright />
        </div>
    )
}

export default MainContainer