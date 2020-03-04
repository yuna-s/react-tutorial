import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TableContainer, Table, Paper } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { JsonArray } from './interface';



/**
 * @auth yuna sugimoto
 * @usage content propsに JsonArray型のオブジェクトを渡すとTableとして表示してくれます。
 * 
 */

const useStyles = makeStyles(theme => createStyles({
  table: {
    minWidth: 650,
    fontSize: 20
  },
  tablehead: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.white,
  },
}))


export default function InfoTable(props: InformationTableProps) {
  const classes = useStyles();
  const rowstest = props.rows;
  const getKeys = () => {
    return Object.keys(rowstest[0]);
  };
  const keys: string[] = getKeys();

  const getHeader = () => {
    return (
      <TableRow className={classes.tablehead}>
        {keys.map(key => (
          <TableCell scope="row">{key}</TableCell>))}
      </TableRow>
    )
  };

  const getRows = () => {
    return (
      rowstest.map((row, index) => (
        <TableRow key={index}>
          {keys.map(key => (<TableCell scope="row">{row[key]}</TableCell>))}
        </TableRow>
      ))
    )
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          {getHeader()}
        </TableHead>
        <TableBody>
          {getRows()}
        </TableBody>
      </Table>
    </TableContainer>

  );
}

//外からでも型が見れるように
export interface InformationTableProps {
  rows: JsonArray
};
