import React, { Props } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, FormLabel } from '@material-ui/core';
import SwitchOnOff from '../../../Component/Atom/SwitchOnOff';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    fontWeight: 'bold',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));


export default function SearchFormItem(props: SearchFormItemProps) {
  const classes = useStyles();
  const placeHolder: string = (props.placeHolder ? props.placeHolder : '');
  const example: string = (props.example ? props.example : '');


  return (
    <Grid
      container
      justify='space-between'
      alignItems='flex-end'
      className={classes.formControl}
    >
      <Grid item xs={2} md={2} lg={2} >
        <FormLabel component='legend' key={`searchFormItemFormLabel-No:${props.value}`} >{props.label}</FormLabel>
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        <TextField key={`searchFormItemTextField-No:${props.value}`} label={placeHolder} placeholder={example} fullWidth onChange={props.onChange} />
      </Grid>
      <Grid item xs={3} md={3} lg={3} >
        <SwitchOnOff labelLeft='部分一致' labelRight='完全一致' onChange={props.onChangeSwitch} state={props.exactMatch} />
      </Grid>
    </Grid>
  )
}

interface SearchFormItemProps extends Props<any> {
  value: number,
  label: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeSwitch: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeHolder?: string,
  example?: string,
  exactMatch: boolean
}