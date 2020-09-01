import React from 'react'
import clsx from 'clsx'
import { mainMenu } from '../../../Constance/Value';
import Title from '../../../Component/Frame/Title';
import SearchForm from './SearchForm';
import { Container, Grid, Paper, makeStyles, Collapse } from '@material-ui/core'
import SearchResultTable from './SearchResultTable'
import { useState } from 'react';
import { rowsdata } from 'Constance/AccountSearchResult';
import { SerchFormState } from 'Constance/interface';
import { JsonArray } from 'Component/Frame/interface';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
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
}));



/**
 * アカウント検索画面を提供する
 * 画面の大枠は、ここで定義される
 */
const AccountSearchPage = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const initResult: JsonArray = [];

    const [result, setResult] = useState(initResult);
    const [openedResultTable, setOpenedResultTable] = useState(false);

    /**
     *  logicに値を渡して結果をstateにセット
     *  SerchFormState型 {
     * 　　categories: {[x:string 項目名]:boolean チェックがされているか} ,
     * 　　inputParams: {content:string 記入内容, exactMatch:boolean 完全一致か},
     * 　　deleted:boolean 削除済みを含むか
     * 　}
     *
     *
     */
    const getResult = (searchFormState: SerchFormState) => {
        //logicにsearchFormStateを渡す結果をResultにセットする
        console.log(JSON.stringify(searchFormState));
        setOpenedResultTable(!openedResultTable);
        setResult(rowsdata);
    }


    return (
        <Container className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Title>{mainMenu[0].menuName2}</Title>
                    <Paper className={fixedHeightPaper}>
                        <Title>検索条件</Title>
                        <SearchForm onChange={getResult} />
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Collapse in={openedResultTable} timeout="auto" unmountOnExit>
                        <Paper className={fixedHeightPaper}>
                            <Title>検索結果</Title>
                            <SearchResultTable result={result} />
                        </Paper>
                    </Collapse>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AccountSearchPage