import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import ChatEditor from './Editor/ChatEditor';
import Scrollbars from 'react-custom-scrollbars';
import { EditorState, RawDraftContentState, convertToRaw } from 'draft-js';
import { IMsg } from './ChatContainer';


const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        margin: "8px",
        minHeight: "200px",
        maxHeight: "200px"
    },
    title: {
        backgroundColor: "darkgrey",
        color: "white"
    }
})

interface IProps {
    addMsg: (msg: IMsg[]) => void
}

const EditorBox: React.FC<IProps> = (props) => {
    const classes = useStyles(props);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    return (
        <div
            className={classes.container}
        >
            <Typography
                className={classes.title}
            >
                入力
            </Typography>
            <Scrollbars
                style={{
                    flexGrow: 1
                }}
            >
                <ChatEditor
                    editorState={editorState}
                    setEditorState={setEditorState}
                />
            </Scrollbars>
            <div>
                <Button
                    onClick={() => {
                        props.addMsg([{
                            sender: "TO",
                            data: convertToRaw(editorState.getCurrentContent())
                        }, {
                            sender: "FROM",
                            data: convertToRaw(editorState.getCurrentContent())
                        }]);
                        setEditorState(EditorState.createEmpty())
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default EditorBox