import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../../Component/Frame/Title';
import { mainMenu } from '../../../Constance/Value';
import { Grid, TextField } from '@material-ui/core';

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
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function TestSearch() {
    const classes = useStyles();
    return (
        <React.Fragment>

            <div className={classes.root}>
                <Title>{mainMenu[1].menuName2}</Title>
                <form className={classes.seeMore} noValidate autoComplete="off">

                    <Grid container spacing={10} alignItems="flex-end">
                        <Grid item>
                            システム名
                </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="With a grid" fullWidth />
                        </Grid>
                    </Grid>
                </form>

            </div>
            <div className={classes.seeMore}>
                <Link color="primary" href="javascript:;">
                    See more orders
        </Link>
            </div>
        </React.Fragment>

    );
}