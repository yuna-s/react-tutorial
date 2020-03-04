import React, { ReactChildren, ComponentProps } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => createStyles({
  ButtonControl: {
    zIndex: theme.zIndex.drawer + 1,
    marginTop: 20,
    marginBottom: 20,
  }
}))


export default function SearchButton(props: ButtonProps) {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" href="#contained-buttons" fullWidth className={classes.ButtonControl}>
      {props.label}
    </ Button>
  );
}


export interface ButtonProps {
  label: String
};