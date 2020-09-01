import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormLabel, FormControlLabel, Checkbox, FormHelperText } from '@material-ui/core';
import { JsonArray } from 'Component/Frame/interface';
import { SearchCheckBoxProps } from 'Constance/interface';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

/**
 * ログインID種別　loginIDCategories
 * @param props 
 */
export default function SearchCheckBox(props: SearchCheckBoxProps) {
  const classes = useStyles();
  const getKeys = () => {
    return Object.keys(props.state);
  }
  const keys: string[] = getKeys();


  return (
    <Grid container justify="flex-start" alignItems="flex-end" className={classes.formControl} >
      <Grid item xs={2} md={2} lg={2} >
        <FormLabel component="legend">{props.label}</FormLabel>
        <FormHelperText>未選択時全て</FormHelperText>
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        {
          keys.map(key => {
            return (
              <FormControlLabel key={key}
                control={
                  <Checkbox checked={props.state[key]}
                    onChange={props.onChange(key)}
                    value={key} />}
                label={key}
              />
            )
          })
        }
      </Grid>
    </Grid>

  )

}



/*


const checkboxes: Checkboxes =
{
  'OA': false,
  'Straight': false,
  'L3': false,
  'L3メール': false,
  'DEV': false,
}
 */

