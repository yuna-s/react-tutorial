import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import SearchFormItem from './SearchFormItem';
import SearchCheckBox from './SearchCheckBox';
import { SerchFormProps, SerchFormState, SearchFormParamsDataArrayProps, } from 'Constance/interface';
import CheckBox from 'Component/Atom/CheckBox';



/**
 * 共通社員番号: employeeNumber
 * 氏名：　name
 * ログインID: loginID
 * Straight経由: straightID
 * 削除済み含む: deleted
 * 部分一致/完全一致: exactMatch
 * 
 * state例:
 * {
 *  "categories":
 *    {
 *      "OA":false,
 *      "Straight":false,
 *      "L3":false,
 *      "L3メール":false,
 *      "DEV":false
 *    },
 *  "inputParams":
 *  {
 *    "employeeNumber":{"content":"122","exactMatch":false},
 *    "name":{"content":"hanako","exactMatch":false},
 *    "loginID":{"content":"momo","exactMatch":false},
 *    "straightID":{"content":"","exactMatch":false}
 *  },
 *  "deleted":false
 * }
 * 
 */
export default class SearchForm extends React.Component<SerchFormProps, SerchFormState>  {
  constructor(props: SerchFormProps) {
    super(props);
    this.state = {
      categories: {
        OA: false,
        Straight: false,
        L3: false,
        L3メール: false,
        DEV: false,
      },
      inputParams: {
        employeeNumber: { content: '', exactMatch: false },
        name: { content: '', exactMatch: false },
        loginID: { content: '', exactMatch: false },
        straightID: { content: '', exactMatch: false },
      },
      deleted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeExactMatch = this.handleChangeExactMatch.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleChangeCheckboxes = this.handleChangeCheckboxes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderParams = this.renderParams.bind(this);
  }

  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    let inputParams = this.state.inputParams;
    inputParams[name].content = event.target.value;
    this.setState({ ...this.state, inputParams: inputParams });
  };

  handleChangeExactMatch = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    let inputParams = this.state.inputParams;
    inputParams[name].exactMatch = !inputParams[name].exactMatch;
    this.setState({ ...this.state, inputParams: inputParams });
  };

  handleChangeCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ deleted: event.target.checked });
  };

  handleChangeCheckboxes = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    let submmitCheckboxes = this.state.categories;
    submmitCheckboxes[name] = !submmitCheckboxes[name];
    this.setState({ ...this.state, categories: submmitCheckboxes });
  };

  /**
   * validationして、大丈夫だったらrequest送るようにセット
   * @param event 
   */
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    this.props.onChange(this.state);
    event.preventDefault();
  };

  renderParams(searchFormParamsData: SearchFormParamsDataArrayProps) {
    return searchFormParamsData.map((item, index) => {
      return (
        <SearchFormItem key={`SearchFromSearchFormItem-No:${index.toString()}`} value={index} label={item.label} onChange={this.handleChange(item.state)} onChangeSwitch={this.handleChangeExactMatch(item.state)}
          placeHolder={item.placeHolder} example={item.example} exactMatch={this.state.inputParams[item.state].exactMatch} />
      )
    })
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          <SearchCheckBox label={'ログインID種別'} onChange={this.handleChangeCheckboxes} state={this.state.categories} />
          {this.renderParams(SearchFormParamsData)}
        </label>
        <Grid container justify='space-around' alignItems='center' >
          <Grid item xs={3} md={3} lg={2}>
            <CheckBox label={'削除済み含む'} onChange={this.handleChangeCheckbox} state={this.state.deleted} />
          </Grid>
          <Grid item xs={8} md={9} lg={9}>
            <Button type='submit' variant='contained' color='primary' size='medium' fullWidth >
              検索
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };
}



/**
 * 初期値セット
 */
const SearchFormParamsData: SearchFormParamsDataArrayProps = [
  {
    state: 'employeeNumber',
    label: '共通社員番号',
    placeHolder: '半角英数字',
    example: '例： 1234567',
  },
  {
    state: 'name',
    label: '氏名',
    placeHolder: '英字/漢字',
    example: '例: 汐留花子',

  },
  {
    state: 'loginID',
    label: 'ログインID',
    placeHolder: '半角英数字',
    example: '例: shiodome01',

  },
  {
    state: 'straightID',
    label: 'Straight-ID',
    placeHolder: '半角英数字',
    example: '例: shiodome01',
  }
]
