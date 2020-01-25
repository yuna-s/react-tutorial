import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../../Component/Frame/Title';
import Button from '../../../Component/Atom/Button';
import { mainMenu } from '../../../Constance/Value';
import { Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, InputLabel, Input, Switch, Typography } from '@material-ui/core';
import { Label } from 'recharts';
import SwitchOnOff from '../../../Component/Atom/SwitchOnOff';
import CheckBox from '../../../Component/Atom/CheckBox';

// Generate Order Data
function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: number) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(1),
    },
    formLink: {
        marginTop: theme.spacing(3),
    },
    switchLabelOn: {
        color: 'Primary.dark',
    },
    switchLabelOff: {
        color: 'Primary.light',
    },
}));


export default function TestSearch() {
    const classes = useStyles();
    var test: String = "削除済み含む";
    const [checkBoxState, setCheckBoxState] = React.useState(false);
    const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBoxState(event.target.checked);
    };

    return (

        <React.Fragment>
            <Title>{mainMenu[1].menuName2}</Title>

            <div className={classes.root}>

                <FormControl component="fieldset" className={classes.formControl} fullWidth>
                    <FormGroup>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="flex-end"
                            className={classes.formControl}
                        >
                            <Grid item xs={2} md={2} lg={2} >
                                <FormLabel component="legend">共通社員番号</FormLabel>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6}>
                                <TextField id="input-with-icon-grid" label="半角英数字" placeholder="例：1000000" fullWidth />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} >
                                <SwitchOnOff labelLeft="部分一致" labelRight="完全一致" />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="flex-end"
                            className={classes.formControl}
                        >
                            <Grid item xs={2} md={2} lg={2}>
                                <FormLabel component="legend">氏名</FormLabel>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6}>
                                <TextField id="input-with-icon-grid" label="英字/漢字" placeholder="例：汐留花子" fullWidth />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} >
                                <SwitchOnOff labelLeft="部分一致" labelRight="完全一致" />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="flex-end"
                            className={classes.formControl}
                        >
                            <Grid item xs={2} md={2} lg={2}>
                                <FormLabel component="legend">ログインID</FormLabel>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6}>
                                <TextField id="input-with-icon-grid" label="半角英数字" placeholder="例：shiodomen01" fullWidth />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} >
                                <SwitchOnOff labelLeft="部分一致" labelRight="完全一致" />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="flex-end"
                            className={classes.formControl}
                        >
                            <Grid item xs={2} md={2} lg={2}>
                                <FormLabel component="legend">Straight-ID</FormLabel>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6}>
                                <TextField id="input-with-icon-grid" label="半角英数字" placeholder="例：shiodomen01" fullWidth />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} >
                                <SwitchOnOff labelLeft="部分一致" labelRight="完全一致" />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="center"
                            className={classes.formControl}
                        >
                            <Grid item xs={2} md={2} lg={2}>
                                <CheckBox label={test} onChange={handleChangeCheckBox} state={checkBoxState} />
                            </Grid>
                            <Grid item xs={10} md={10} lg={10}>
                                <Button label="検索" />
                            </Grid>
                        </Grid>
                    </FormGroup>

                </FormControl>

            </div>

            <Link color="primary" href="javascript:;">
                See more orders
            </Link>
        </React.Fragment>

    );
}