import React, { ReactChildren, ComponentProps } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => createStyles({
  ButtonControl: {
    margin: theme.spacing(1),
  },
}))


export default function FormButton(props: ButtonProps) {
  const classes = useStyles();

  return (
    <Button type="submit" variant="contained" color="primary" href="#contained-buttons" size='medium' className={classes.ButtonControl} >
      {props.label}
    </ Button>
  );
}


export interface ButtonProps {
  label: String,
  href?: String,
};