import React, { useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Scrollbars from 'react-custom-scrollbars';
import { RawDraftContentState, EditorState, convertFromRaw, Editor } from 'draft-js';
import { IMsg } from './ChatContainer';


const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        margin: "8px",
        flexGrow: 1
    },
    title: {
        backgroundColor: "darkgrey",
        color: "white"
    }
})

interface IProps {
    msg: IMsg[]
}

const MsgBox: React.FC<IProps> = (props) => {
    const classes = useStyles(props);
    const scrollBarRef = useRef<Scrollbars>(null);
    useEffect(() => {
        if (scrollBarRef && scrollBarRef.current) {
            scrollBarRef.current.scrollToBottom();
        }
    }, [props.msg])

    return (
        <div
            className={classes.container}
        >
            <Typography
                className={classes.title}
            >
                問合せ
            </Typography>
            <div
                style={{
                    flexGrow: 1
                }}
            >
                <Scrollbars
                    ref={scrollBarRef}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "8px"
                        }}
                    >
                        {
                            props.msg.map((msg, index) => {
                                const newData = EditorState.createWithContent(convertFromRaw(msg.data));
                                const onChange = (es: EditorState) => { }
                                return (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: msg.sender === "TO" ? "flex-end" : "flex-start",
                                            textAlign: msg.sender === "TO" ? "right" : "left",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                flexBasis: "65%"
                                            }}
                                        >
                                            <Typography>
                                                {msg.sender === "TO" ?
                                                    "自分から送ったメッセージ" :
                                                    "貰ったメッセージ"
                                                }
                                            </Typography><br />
                                            <div
                                                style={{
                                                    border: "1px solid darkgrey"
                                                }}
                                            >
                                                <Editor
                                                    readOnly
                                                    editorState={newData}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default MsgBox