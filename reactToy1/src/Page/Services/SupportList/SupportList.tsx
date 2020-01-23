import React, { useState } from 'react';
import { Table, TableHead, TableRow, Checkbox, TableCell, TableSortLabel, TableBody, Toolbar, TextField, Link } from '@material-ui/core';
import { Incident_Keys, IIncidentKeyTypes } from '../../../Constance/interfaces';
import { TEST_SUPPORT_LIST } from '../../../Constance/TestData';
import { NavLink } from 'react-router-dom';



const SupportList: React.FC = () => {
    const [selectedItem, setSelect] = useState<IIncidentKeyTypes>("no");
    const [orderDirection, toggleDirection] = useState<"asc" | "desc">("asc");
    const [keyword, setKeyword] = useState("");
    const clickSort = (item: IIncidentKeyTypes) => {
        if (selectedItem === item) {
            toggleDirection(orderDirection === "asc" ? "desc" : "asc");
        } else {
            setSelect(item);
        }
    }

    const getFromattedDate = (date: Date) => {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }

    const filtering = () => {
        // serach
        const result = TEST_SUPPORT_LIST.filter((item) => {
            const testArray = Incident_Keys.map((key) => {
                const value = item[key];
                if (value instanceof Date) return getFromattedDate(value);
                return value + "";
            });
            return testArray.some((element) => {
                return element.indexOf(keyword) > -1
            })
            //sort
        }).sort((item, item2) => {
            const asc = item[selectedItem] > item2[selectedItem];
            const result = asc ? 1 : -1;
            return orderDirection === "asc" ? result : result * -1
        });
        return result;
    }

    return (
        <>
            <Toolbar>
                <TextField
                    variant="outlined"
                    margin="normal"
                    id="filter"
                    label="search"
                    name="filter"
                    autoComplete="filter"
                    value={keyword}
                    onChange={(e) => { setKeyword(e.currentTarget.value) }}
                />
            </Toolbar>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox />
                        </TableCell>
                        {
                            Incident_Keys.map((item, index) => {
                                return (
                                    <TableCell
                                        key={index}
                                        sortDirection={selectedItem === item ? orderDirection : false}
                                    >
                                        <TableSortLabel
                                            active={selectedItem === item}
                                            direction={orderDirection}
                                            onClick={() => clickSort(item)}
                                        >
                                            <span>
                                                {item}
                                            </span>
                                        </TableSortLabel>
                                    </TableCell>
                                );
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        filtering().map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell padding="checkbox">
                                        <Checkbox />
                                    </TableCell>
                                    {
                                        Incident_Keys.map((column, index2) => {
                                            let print = item[column];
                                            if (print instanceof Date) {
                                                print = getFromattedDate(print)
                                            }
                                            return (
                                                <TableCell key={index2}>
                                                    {
                                                        column === "no" ?
                                                            (
                                                                <Link component={NavLink} color="inherit" to={"/service/" + print}>
                                                                    {print + ""}
                                                                </Link>
                                                            ) : print
                                                    }
                                                </TableCell>
                                            );
                                        })
                                    }
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table >
        </>
    );
}


export default SupportList;