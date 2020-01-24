import React, { ReactChildren, ComponentProps } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
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

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const { gilad, jason, antoine } = state;

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });

  };
  const checkLabelColor = (switchState: boolean) => {
    if (switchState) {
      return classes.switchLabelOn
    } else {
      return classes.switchLabelOff
    }
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item className={checkLabelColor(!state.jason)}>{props.labelLeft}</Grid>
        <Grid item>
          <Switch
            checked={state.jason}
            onChange={handleChange('jason')}
            value="jason"
          />
        </Grid>
        <Grid item className={checkLabelColor(state.jason)}>{props.labelRight}</Grid>
      </Grid>
    </Typography>
  );
}


export interface SwitchProps {
  labelLeft: String,
  labelRight: String,
};