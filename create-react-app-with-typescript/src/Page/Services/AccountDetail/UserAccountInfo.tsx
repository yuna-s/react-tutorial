import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../../../Component/Frame/Title';
import InfoTable from '../../../Component/Frame/InfoTable';
import { JsonArray, TreeViewTableRows } from '../../../Component/Frame/interface';
import TreeViewTable from '../../../Component/Frame/TreeViewTable';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

export default function UserAccountInfo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>ログインID情報</Title>
      <div className={classes.root}>
        <InfoTable rows={rowsdata} />
      </div>
      <TreeViewTable rows={data} />
    </React.Fragment>

  );
}

const rowsdata: JsonArray = [
  {
    categories: "OA",
    loginID: "testt01",
    company: "SBM",
    startDate: '2119/10/26 11:38:23',
    endDate: '2119/10/26 11:38:23',
    registDate: '2119/10/26 11:38:23',
    flag: "有効"
  },
  {
    categories: "L3",
    loginID: "testt03",
    company: "SBM",
    startDate: '2119/10/26 11:38:23',
    endDate: '2119/10/26 11:38:23',
    registDate: '2119/10/26 11:38:23',
    flag: "有効"
  }];

const data: TreeViewTableRows = {
  id: 'root',
  label: '履歴',
  icon: 'history',
  rows: rowsdata,
};