import React from 'react'
import clsx from 'clsx'
import { mainMenu } from '../../../Constance/Value';
import Title from '../../../Component/Frame/Title';

import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
import SearchParamsForm from './SearchParamsForm'
import SearchResultTable from './SearchResultTable'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        borderRightWidth: 10,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    fixedHeight: {

    },
}))

/**
 * アカウント検索画面を提供する
 * 画面の大枠は、ここで定義される
 */
const AccountSearchPage = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return (
        <Container className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Title>{mainMenu[0].menuName2}</Title>
                    <Paper className={fixedHeightPaper}>
                        <Title>検索条件</Title>
                        <SearchParamsForm />
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper className={fixedHeightPaper}>
                        <Title>検索結果</Title>
                        <SearchResultTable />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AccountSearchPage