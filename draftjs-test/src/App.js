import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Editor, EditorState} from 'draft-js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


class MyEditer extends React.Component {
    constructor(props){
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = editorState => this.setState({editorState});
    }

    render(){
        return(
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }

}

ReactDOM.render(
  <MyEditer />,
  document.getElementById("app")
);
