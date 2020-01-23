import React, { useState, useEffect } from 'react';
import { TextField, List, ListItem, Checkbox, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, Typography, makeStyles, createStyles } from '@material-ui/core';
import { Comment, ThumbUp } from '@material-ui/icons';
import Scrollbars from 'react-custom-scrollbars';

const useStyles = makeStyles(createStyles({
    search: {
        backgroundColor: "white",
        border: "1px solid black",
        margin: "8px"
    },
    list: {
        backgroundColor: "white",
    },
    contents: {
        backgroundColor: "white",
        margin: "8px",
        marginTop: "0px",
        padding: "8px"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    listContainer: {
        flexGrow: 1,
        margin: "8px",
        marginTop: "0px"
    }
}))

const testData = [
    "alpha", "bravo", "charlie", "delta", "echo",
    "foxtrot", "golf", "hotel", "india", "juliett",
    "kilo", "lima", "mike", "november", "oscar",
    "papa", "quebec", "romeo", "sierra", "tango",
    "uniform", "victor", "whiskey", "x-ray", "yankee", "zulu"
];

interface IChecked {
    [key: string]: boolean
}

const KnowledgeContainer: React.FC = (props) => {
    const classes = useStyles(props);
    const [filteredList, filtering] = useState(testData);
    const [keyword, setKeyword] = useState("");
    const [checkStatus, setCheckStatus] = useState<IChecked>({})
    const [selected, setSelected] = useState("");
    useEffect(() => {
        refreshChecked();
    }, [])
    const refreshChecked = () => {
        const newCheckStatus: IChecked = {};
        filteredList.map((item, index) => {
            if (newCheckStatus[item] === undefined) {
                newCheckStatus[item] = false;
            }
        })
        setCheckStatus(newCheckStatus);
    }
    const handleToggle = (value: string) => {
        setCheckStatus({
            ...checkStatus,
            [value]: !checkStatus[value]
        })
    }

    const keywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        setKeyword(value);
        if (value === "") {
            filtering(testData);
        } else {
            const newList = testData.filter((item) => {
                return item.indexOf(value) > -1
            })
            filtering(newList);
        }
    }

    return (
        <div className={classes.container}>
            <TextField
                className={classes.search}
                placeholder="検索キーワード"
                value={keyword}
                onChange={keywordChange}
            />
            <div
                className={classes.listContainer}
            >
                <Scrollbars>
                    <List
                        className={classes.list}
                    >
                        {
                            filteredList.map((item, index) => {
                                const labelId = "checkbox-list-label-" + item
                                return (
                                    <ListItem
                                        key={index}
                                        dense
                                        button
                                        onClick={() => { setSelected(item) }}
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checkStatus[item]}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{
                                                    "aria-labelledby": labelId
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleToggle(item)
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            onClick={() => { setSelected(item) }}
                                            id={labelId}
                                            primary={item}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="comments"
                                            >
                                                <Comment />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                </Scrollbars>
            </div>
            <div
                className={classes.contents}
            >
                <div
                    style={{ display: "flex" }}
                >
                    <ThumbUp />
                    <Typography style={{ marginLeft: "8px" }}>
                        {selected}
                    </Typography>
                </div>
                <div
                    style={{
                        whiteSpace: "pre-line"
                    }}
                >
                    test contents
                </div>
            </div>
        </div>
    );
}

export default KnowledgeContainer