import React, { ReactChildren, ComponentProps } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Grid, Switch } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  switchLabelOn: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  switchLabelOff: {
    color: theme.palette.primary.light,
  }
}))


export default function SwitchOnOff(props: SwitchProps) {
  const classes = useStyles();
  const checkLabelColor = (switchState: boolean) => {
    if (switchState) return classes.switchLabelOn
    else return classes.switchLabelOff
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item className={checkLabelColor(!props.state)}>{props.labelLeft}</Grid>
        <Grid item>
          <Switch checked={props.state} onChange={props.onChange} value="exact" />
        </Grid>
        <Grid item className={checkLabelColor(props.state)}>{props.labelRight}</Grid>
      </Grid>
    </Typography>
  );
}


export interface SwitchProps {
  labelLeft: String,
  labelRight: String,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  state: boolean
};