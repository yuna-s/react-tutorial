import React from 'react'
import clsx from 'clsx'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
import Chart from './Contents/Chart';
import Deposits from './Contents/Deposits'
import Orders from './Contents/Orders'
import TestSearch from './Contents/TestSearch';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    fixedHeight: {
        height: 240,
    },
}))


const HomePage: React.FC = () => {
    const classes = useStyles()

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Orders />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Orders />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <TestSearch />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage