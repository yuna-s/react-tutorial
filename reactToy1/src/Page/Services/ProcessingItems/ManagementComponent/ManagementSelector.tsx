import React from 'react';
import { Card, CardContent, Select, MenuItem, TextField, TableRow, TableCell, Table, Button, createStyles, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(createStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    selects: {
        height: "100%",
        flexGrow: 5,
        margin:"0 auto",
        width:"500px"
    }

}))

const ManagementSelector: React.FC = (props) => {
    const classes = useStyle(props);
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.selects}
            >
                <Card>
                    <CardContent>
                        <Table>
                            <TableRow>
                                <TableCell>
                                    優先度
                                </TableCell>
                                <TableCell>
                                    <Select style={{ flexGrow: 1 }} fullWidth>
                                        <MenuItem>  高  </MenuItem>
                                        <MenuItem>  中  </MenuItem>
                                        <MenuItem>  小  </MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    回答期限
                                </TableCell>
                                <TableCell>
                                    -CALENDAR-
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    カテゴリー
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <Select style={{ flexGrow: 1 }} fullWidth />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    カテゴリー
                                </TableCell>
                                <TableCell>
                                    <Select style={{ flexGrow: 1 }} fullWidth />
                                </TableCell>
                                <TableCell colSpan={2}>
                                    <TextField prefix="コメント" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    障害
                                </TableCell>
                                <TableCell>
                                    <Select style={{ flexGrow: 1 }} fullWidth />
                                </TableCell>
                                <TableCell colSpan={2}>
                                    <TextField prefix="コメント" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    ステータス
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <Select style={{ flexGrow: 1 }} fullWidth />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    エスカ先
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <Select style={{ flexGrow: 1 }} fullWidth />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    エスカML
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <Select style={{ flexGrow: 1 }} fullWidth />
                                </TableCell>
                            </TableRow>
                        </Table>
                        <div style={{display:"flex",margin:"4px"}}>
                            <div style={{flexGrow:1}}/>
                            <Button
                                style={{ backgroundColor: "skyblue", justifySelf: "right" }}
                            >
                                保存    
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div >
        </div>
    );
}

export default ManagementSelector;