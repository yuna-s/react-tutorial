import React from 'react'
import { Button } from '@material-ui/core'
import clsx from 'clsx'

import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
import TestSearch from './TestSearch'
import Orders from './Orders'

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

    }
}))

const DocsPage = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return (
        <Container maxWidth='xl' className={classes.container}>
            <Grid container spacing={3}>
                {/* Chart */}
                {/*xs, md, lg is break point.*/}
                {/*if break points are not setted,
                 the child containers do not stretch to 100% width of their pearent container.*/}
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={fixedHeightPaper}>
                        <TestSearch />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DocsPage