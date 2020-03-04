import React from 'react';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import Title from '../../../Component/Frame/Title';
import { Link } from 'react-router-dom';
import FormButton from '../../../Component/Atom/FormButton';
import { JsonArray } from '../../../Component/Frame/interface';
import InfoTable from '../../../Component/Frame/InfoTable';


const useStyles = makeStyles((theme: Theme) => ({
    button: {
        textAlign: 'left'
    },
    table: {
        minWidth: 650,
        fontSize: 20
    },
    tablehead: {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.common.white,
    },
}));

export default function SearchResultTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <React.Fragment>
            <div className={classes.button}>
                <FormButton label='アカウント情報ダウンロード' />
                <FormButton label='ログインID情報ダウンロード' />
            </div>
            <InfoTable rows={rowsdata} />
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rowsdata.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </React.Fragment >
    );
}

const rowsdata: JsonArray = [
    {
        categories: 'OA',
        accountClass: '個人',
        employeeNumber: < Link to='/sharedAccountDetail' >{"1625***"}</Link>,
        loginID: <Link to='/sharedAccountDetail'>{"testt01"}</Link>,
        company: "SBM",
        name: "テスト 太郎1",
        department: '認証プラットフォーム開発課',
        deleted: "済"
    },
    {
        categories: 'L3',
        accountClass: '個人',
        employeeNumber: < Link to='/sharedAccountDetail' >{"1625***"}</Link>,
        loginID: <Link to='/sharedAccountDetail'>{"test02"}</Link>,
        company: "SBM",
        name: "テスト 太郎1",
        department: '認証プラットフォーム開発課',
        deleted: "-"
    },
    {
        categories: 'OA',
        accountClass: '個人',
        employeeNumber: < Link to='/sharedAccountDetail' >{"1625***"}</Link>,
        loginID: <Link to='/sharedAccountDetail'>{"testt06"}</Link>,
        company: "SBM",
        name: "テスト 太郎2",
        department: '認証プラットフォーム開発課',
        deleted: "-"
    },
    {
        categories: 'OA',
        accountClass: '個人',
        employeeNumber: < Link to='/sharedAccountDetail' >{"1625***"}</Link>,
        loginID: <Link to='/sharedAccountDetail'>{"testt062"}</Link>,
        company: "SBM",
        name: "テスト 太郎12",
        department: '認証プラットフォーム開発課',
        deleted: "済"
    },
    {
        categories: 'OA',
        accountClass: '個人',
        employeeNumber: < Link to='/sharedAccountDetail' >{"1625***"}</Link>,
        loginID: <Link to='/sharedAccountDetail'>{"testt13"}</Link>,
        company: "SBM",
        name: "テスト 太郎13",
        department: '認証プラットフォーム開発課',
        deleted: "済"
    },
    {
        categories: 'OA',
        accountClass: '個人',
        employeeNumber: < Link to='/sharedAccountDetail' >{"1625***"}</Link>,
        loginID: <Link to='/sharedAccountDetail'>{"testt14"}</Link>,
        company: "SBM",
        name: "テスト 太郎114",
        department: '認証プラットフォーム開発課',
        deleted: "-"
    },
    {
        categories: 'OA',
        accountClass: '個人',
        employeeNumber: < Link to='/sharedAccountDetail' >{"1625***"}</Link>,
        loginID: <Link to='/sharedAccountDetail'>{"testt15"}</Link>,
        company: "SBM",
        name: "テスト 太郎15",
        department: '認証プラットフォーム開発課',
        deleted: "-"
    },
];