import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FormButton from '../../../Component/Atom/FormButton';
import InfoTable from '../../../Component/Frame/InfoTable';
import { SerchResultTableProps } from 'Constance/interface';


const useStyles = makeStyles((theme: Theme) => ({
    button: {
        display: 'inline-flex'
    },
    table: {
        minWidth: 650,
        fontSize: 20
    },
    tablehead: {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.common.white,
    },
    downloadButton: {
        display: 'none'
    }
}));

export default function SearchResultTable(props: SerchResultTableProps) {
    const classes = useStyles();


    return (
        <React.Fragment>
            <div className={classes.downloadButton}>
                <FormButton label='アカウント情報ダウンロード' />
                <FormButton label='ログインID情報ダウンロード' />
            </div>
            <InfoTable rows={props.result} />

        </React.Fragment >
    );
}


/*
  {
    categories: 'OA',
    accountClass: '個人',
    employeeNumber: <Link to='/sharedAccountDetail'>"1625***"< /Link>,
    loginID: <Link to='/sharedAccountDetail'> {"testt01"} < /Link>,
      company: "SBM",
      name: "テスト 太郎1",
      department: '認証プラットフォーム開発課',
      deleted: "済"
    },
*/