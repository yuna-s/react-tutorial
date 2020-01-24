import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../../../Component/Frame/Title';
import Button from '../../../../Component/Atom/Button';
import { mainMenu } from '../../../../Constance/Value';
import { Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, InputLabel, Input } from '@material-ui/core';

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
        marginTop: theme.spacing(3),
    },
    formLink: {
        marginTop: theme.spacing(3),
    },
}));


export default function TestSearch() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter(v => v).length !== 2;

    return (

        <>
            <Title>{mainMenu[1].menuName2}</Title>

            <div className={classes.root}>

                <FormControl component="fieldset" className={classes.formControl} fullWidth>
                    <FormGroup>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="flex-end"
                        >
                            <Grid item xs={6} md={6} lg={6}>
                                <FormLabel component="legend">検索条件</FormLabel>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6}>
                                <TextField id="input-with-icon-grid" label="英数字/漢字" placeholder="例：Tarte" fullWidth />
                            </Grid>
                        </Grid>

                    </FormGroup>

                </FormControl>

            </div>

            <Link color="primary" href="javascript:;">
                See more orders
            </Link>
        </>


    );
}