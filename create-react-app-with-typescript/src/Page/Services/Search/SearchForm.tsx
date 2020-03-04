import React from 'react';
import { TextField } from '@material-ui/core';



export default class SearchForm extends React.Component<SerchFormProps, SerchFormState>  {
  constructor(props: SerchFormProps) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  /**
   *   onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      e.persist();
      setState((prevState) => {
        return { ...prevState, comment: e.target.value };
      });
    }
   */


  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Name:
          <TextField id="input-with-icon-grid" label="半角英数字" placeholder="例：shiodomen01" fullWidth onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

interface SerchFormProps {
  title: string,
}

interface SerchFormState {
  value: string,
}