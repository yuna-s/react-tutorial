import React, { useState } from 'react';
import MsgBox from './MsgBox';
import EditorBox from './EditorBox';
import { RawDraftContentState } from 'draft-js';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(createStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    chatBox: {
        flexGrow: 1
    }
}))

export interface IMsg{
    sender : "FROM"|"TO",
    data : RawDraftContentState
}

const ChatContainer: React.FC = (props) => {
    const classes = useStyles(props);
    const [msg, setMsg] = useState<IMsg[]>([]);
    const addMsg = (newMsg: IMsg[]) => {
        setMsg([...msg, ...newMsg]);
    }
    return (
        <div className={classes.container}>
            <MsgBox
                msg={msg}
            />
            <EditorBox
                addMsg={addMsg}
            />
        </div>
    );
}

export default ChatContainer;