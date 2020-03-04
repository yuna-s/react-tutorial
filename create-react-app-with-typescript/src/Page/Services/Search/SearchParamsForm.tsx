import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchButton from '../../../Component/Atom/SearchButton';
import { Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, InputLabel, Input, Switch, Typography } from '@material-ui/core';
import SwitchOnOff from '../../../Component/Atom/SwitchOnOff';
import CheckBox from '../../../Component/Atom/CheckBox';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    title: {
        fontWeight: 'bold',
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


export default function SearchParamsForm() {
    const classes = useStyles();
    var test: String = "削除済み含む";

    const handleChangeCheckBox = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [name]: event.target.checked });
    };
    const [state, setState] = React.useState({
        checkBoxState: false,
        gilad: true,
        jason: false,
        antoine: false,
    });
    const { checkBoxState, gilad, jason, antoine } = state;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl} fullWidth>
                <FormGroup>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-end"
                        className={classes.formControl}
                    >
                        <Grid item xs={2} md={2} lg={2} >
                            <FormLabel component="legend">アカウント種別</FormLabel>
                            <FormHelperText>未選択時全て</FormHelperText>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChangeCheckBox('gilad')} value="gilad" />}
                                label="OA"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChangeCheckBox('jason')} value="jason" />}
                                label="StraightID"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={antoine} onChange={handleChangeCheckBox('antoine')} value="antoine" />
                                }
                                label="CCOC"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={antoine} onChange={handleChangeCheckBox('antoine')} value="antoine" />
                                }
                                label="L3"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={antoine} onChange={handleChangeCheckBox('antoine')} value="antoine" />
                                }
                                label="L3メール"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={antoine} onChange={handleChangeCheckBox('antoine')} value="antoine" />
                                }
                                label="DEV"
                            />
                        </Grid>
                    </Grid>
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
                            <CheckBox label={test} onChange={handleChangeCheckBox('checkBoxState')} state={checkBoxState} />
                        </Grid>
                        <Grid item xs={10} md={10} lg={10}>
                            <SearchButton label="検索" />
                        </Grid>
                    </Grid>
                </FormGroup>

            </FormControl>

        </div>
    );
}

/*
リリース対象外
    <Grid item xs={2} md={2} lg={2} >
        <FormLabel component="legend">アカウント区分</FormLabel>
        <FormHelperText>未選択時全て</FormHelperText>
    </Grid>
    <Grid item xs={2} md={2} lg={2}>
        <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChangeCheckBox('gilad')} value="gilad" />}
            label="個人"
        />
        <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChangeCheckBox('jason')} value="jason" />}
            label="共有"
        />
    </Grid>
 */