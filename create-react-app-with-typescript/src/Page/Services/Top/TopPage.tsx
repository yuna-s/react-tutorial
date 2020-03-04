import React from 'react'
import { Button } from '@material-ui/core'
import clsx from 'clsx'

import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
import FormButton from '../../../Component/Atom/FormButton'


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
  button: {
    display: 'inline',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const TopPage = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <Container className={classes.container}>

      {/* Chart */}
      {/*xs, md, lg is break point.*/}
      {/*if break points are not setted,
                 the child containers do not stretch to 100% width of their pearent container.*/}
      <Paper className={fixedHeightPaper}>
        ようこそ
            <FormButton label="neko" />
        <div >
          <Button>普通のボタン</Button>

        </div>

      </Paper>

    </Container>
  )
}

export default TopPage