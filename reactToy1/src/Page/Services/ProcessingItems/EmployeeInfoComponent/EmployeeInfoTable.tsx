import React from 'react';
import { Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { IMAGESRC, TESTDATA } from '../../../../Constance/TestData';


const useStyles = makeStyles({
    table: {
        backgroundColor: "white",
        width:"600px",
        margin:"0 auto",
    },
    desc: {
        backgroundColor: "#CCE6FF"
    }
})

const EmployeeInfoTable: React.FC = (props) => {
    const selected = 0;
    const classes = useStyles(props);
    return (
        <>
            <Table
                className={classes.table}
            >
                <TableBody>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            共通社員番号
                        </TableCell>
                        <TableCell>
                            {TESTDATA[selected].assignee.id}
                        </TableCell>
                        <TableCell rowSpan={5}>
                            <img
                                style={{
                                    maxWidth: "10vw"
                                }}
                                src={IMAGESRC}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            原籍
                        </TableCell>
                        <TableCell>
                            {TESTDATA[selected].assignee.company}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            社員区分
                        </TableCell>
                        <TableCell>
                            {TESTDATA[selected].assignee.category}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            氏名カナ
                        </TableCell>
                        <TableCell>
                            {TESTDATA[selected].assignee.name_kana}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            氏名
                        </TableCell>
                        <TableCell>
                            {TESTDATA[selected].assignee.name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            勤務地
                        </TableCell>
                        <TableCell colSpan={2}>
                            {TESTDATA[selected].assignee.address}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            エイリアス
                        </TableCell>
                        <TableCell colSpan={2}>
                            {TESTDATA[selected].assignee.arias}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            メールアドレス
                        </TableCell>
                        <TableCell colSpan={2}>
                            {TESTDATA[selected].assignee.mail_address}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            上長
                        </TableCell>
                        <TableCell colSpan={2}>
                            {TESTDATA[selected].assignee.superior}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            役職
                        </TableCell>
                        <TableCell colSpan={2}>
                            {TESTDATA[selected].assignee.role}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            入社年月
                        </TableCell>
                        <TableCell colSpan={2}>
                            {TESTDATA[selected].assignee.enter_date}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            className={classes.desc}
                        >
                            フリーコメント
                        </TableCell>
                        <TableCell colSpan={2}>
                            {TESTDATA[selected].assignee.comment}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}

export default EmployeeInfoTable;