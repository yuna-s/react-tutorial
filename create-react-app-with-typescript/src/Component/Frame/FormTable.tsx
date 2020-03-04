import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, FormControl, FormGroup, FormLabel } from '@material-ui/core';
import { FormTableDataArray, Gridwidth } from './interface';


const useStyles = makeStyles(theme => createStyles({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  formControl: {
    margin: theme.spacing(1),
    fontSize: 'medium',
  },
}))

/**
 * content属性にJSON形式で与えられたdataをフォーム形式で表示させるメソッド。
 * コンテンツの幅は、ウィンドウによって可変であり、それぞれlabelwidthはフォームのラベル、valuewidthはフォームの値の幅を定義している。
 * @param props 
 */
export default function FormTable(props: FormTableProps) {
  const classes = useStyles();
  //props check

  const labelwidth: Gridwidth = {
    xs: 4,
    md: 2,
    lg: 2
  }
  const valuewidth: Gridwidth = {
    xs: 6,
    md: 4,
    lg: 4
  }

  return (
    <FormControl component="fieldset" className={classes.formControl} fullWidth>
      <FormGroup>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          className={classes.formControl}
          spacing={2}
        >
          {
            props.content.map((item, index) => {
              if (item.fullwidth) {
                valuewidth.md = 8
                valuewidth.lg = 8
              }
              return (
                <>
                  <Grid item xs={labelwidth.xs} md={labelwidth.md} lg={labelwidth.lg} >
                    <FormLabel key={index} component="legend">{item.label}</FormLabel>
                  </Grid>
                  <Grid item xs={valuewidth.xs} md={valuewidth.md} lg={valuewidth.lg}>
                    {item.value}
                  </Grid>
                </>
              )
            })
          }
        </Grid>
      </FormGroup>
    </FormControl>
  );
}


export interface FormTableProps {
  content: FormTableDataArray
};