import React from 'react'
import clsx from 'clsx'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
import Title from '../../../Component/Frame/Title'
import UserBasicInfo from './UserBasicInfo'
import UserAccountInfo from './UserAccountInfo'
import FormButton from '../../../Component/Atom/FormButton'
import SearchForm from '../Search/SearchForm'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRightWidth: 10,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  backbutton: {
    textAlign: 'right'
  },
  fixedHeight: {
  },

}))

const AccountDetailPage = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (

    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Title>アカウント詳細情報</Title>
          <FormButton label='戻る' />
          <Paper className={fixedHeightPaper}>
            <UserBasicInfo />
            <SearchForm title='title' />
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={fixedHeightPaper}>
            <UserAccountInfo />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AccountDetailPage