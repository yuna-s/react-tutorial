import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FormControlLabel, Checkbox, PropTypes } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  checkBox: {
  }
}))

/**
  checkBoxを作るコンポーネント
  親がstateを管理しなくて良い場合は、propsにlabelのみ指定
  親がstateを管理する場合は、propsに親のstateをstateに、stateを変更する関数をonChangeに指定して渡すこと
  注意：安定性が損なわれるため、運用する場合はどちらのコンポーネントがstateを管理するか決め
  　　　残りは削除すること
*/

export default function CheckBox(props: CheckBoxProps) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      return props.onChange(event);
    } else {
      setState(event.target.checked);
    }
  };


  return (
    <FormControlLabel
      control={<Checkbox checked={props.state ? props.state : state} onChange={handleChange()} value='state' />}
      label={props.label}
    />
  );
}

export interface CheckBoxProps {
  label: String,
  state?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
};