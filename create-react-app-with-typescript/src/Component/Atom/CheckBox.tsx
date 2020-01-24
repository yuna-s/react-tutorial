import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FormControlLabel, Checkbox } from '@material-ui/core';


const useStyles = makeStyles(theme => createStyles({
  checkBox: {
  }
}))
export default function CheckBox(props: CheckBoxProps) {
  const [state, setState] = React.useState(false);
  const handleChangeParent = props.onChange;
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChangeParent) {
      return handleChangeParent;
    } else {
      setState(event.target.checked);
    }
  };

  const classes = useStyles();
  return (
    <FormControlLabel
      control={<Checkbox checked={props.state} onChange={handleChange()} value='state' />}
      label={props.label}
    />
  );
}

export interface CheckBoxProps {
  label: String,
  state: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void,
};