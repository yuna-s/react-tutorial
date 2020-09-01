import React, { Props } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TableContainer, Table, Paper } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import { JsonArray } from './interface';

type Order = 'asc' | 'desc';

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
  pagination: {
    display: 'inline-flex'
  },
}))


export default function InfoTable(props: InformationTableProps) {
  const classes = useStyles();
  const rowstest = props.rows;
  const getKeys = () => {
    return Object.keys(rowstest[0]);
  };
  const keys: string[] = getKeys();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const getHeader = () => {
    return (
      <TableRow className={classes.tablehead} >
        {
          keys.map(key => (<TableCell key={`InfoTableTableRow-colum:${key}`} scope="row">{key}</TableCell>))
        }
      </TableRow>
    )
  };

  const getRows = () => {
    return (
      rowstest.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
        <TableRow key={index} hover>
          {keys.map(key => (<TableCell key={`InfoTableTableRow-colum:${key}-No:${index}`} scope="row" >{row[key]}</TableCell>))}
        </TableRow>
      ))
    )
  };

  return (
    <TableContainer component={Paper}>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className={classes.pagination}
      />
      <Table className={classes.table} size="small" aria-label="infoable">

        <TableHead >
          {getHeader()}
        </TableHead>
        <TableBody>
          {getRows()}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className={classes.pagination}

      />

    </TableContainer>

  );
}

//外からでも型が見れるように
export interface InformationTableProps {
  rows: JsonArray
};
