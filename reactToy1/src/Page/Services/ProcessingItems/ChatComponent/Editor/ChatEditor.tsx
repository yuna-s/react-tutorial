import React, { useRef, useState } from 'react';
import { Editor, EditorState } from 'draft-js';
interface IProps{
    editorState:EditorState,
    setEditorState:(es : EditorState)=>void
}
const ChatEditor: React.FC<IProps> = (props) => {
    const {editorState,setEditorState} = props;
    const editorRef = useRef<Editor>(null);
    return (
        <div
            style={{ height: "100%" }}
            onClick={() => {
                if (editorRef && editorRef.current) {
                    editorRef.current.focus()
                }
            }}
        >
            <Editor
                ref={editorRef}
                editorState={editorState}
                onChange={setEditorState}
            />
        </div>
    );
}

export default ChatEditor;