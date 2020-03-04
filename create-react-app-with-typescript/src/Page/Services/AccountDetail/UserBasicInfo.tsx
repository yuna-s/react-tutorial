import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../../../Component/Frame/Title';
import FormTable from '../../../Component/Frame/FormTable';
import { FormTableDataArray, JsonArray, TreeViewTableRows } from '../../../Component/Frame/interface';
import TreeViewTable from '../../../Component/Frame/TreeViewTable';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));


export default function UserBasicInfo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>プロフィール</Title>
      <FormTable content={data} />
      <TreeViewTable rows={userDepartmentInfoData} />
      <TreeViewTable rows={historyData} />
    </React.Fragment >
  );
}

//基本情報
const data: FormTableDataArray = (
  [
    {
      label: '共通社員番号',
      value: 1625492
    },
    {
      label: 'Straight-ID',
      value: '1388932'
    },
    {
      label: '会社',
      value: 'SB'
    },
    {
      label: '社員区分',
      value: '正社員'
    },
    {
      label: '氏名(漢字)',
      value: '杉本優奈'
    },
    {
      label: '氏名(英字)',
      value: 'sugimoto yuna'
    },

    {
      label: 'メールアドレス',
      value: 'yuna.sugimoto@gmai.com'
    },
    {
      label: '電話番号',
      value: '080-0000-0000'
    },
    {
      label: '役職',
      value: '-'
    },
    {
      label: '役割',
      value: '-'
    },
    {
      label: '入社日',
      value: '2019/04/01'
    },
    {
      label: '退社日',
      value: '9999/3/31'
    },

    {
      label: '在籍状態',
      value: '-'
    },
  ]
);

//基本情報履歴
const userBasicInforows: JsonArray = [
  {
    "employeeNumber": "1625492",
    "name": "杉本優奈",
    "englishName": "sugimoto yuna",
    "mail": "yuna.sugimoto@g.com",
    "startDate": '2119/10/26 11:38:23',
    "endDate": '2119/10/26 11:38:23'
  },
  {
    "employeeNumber": "1625492",
    "name": "杉本夕菜",
    "englishName": "sugimoto yuna",
    "mail": "yuna.sugimoto@g.com",
    "startDate": '2119/10/26 11:38:23',
    "endDate": '2119/10/26 11:38:23'
  }
]

//属性情報履歴
const userSubInforows: JsonArray = [
  {
    label: "社員区分名称",
    value: "正社員",
    action: "DELETE",
    date: '2119/10/26 11:38:23',
  },
  {
    label: "入社日",
    value: "2019/04/01",
    action: "INSERT",
    date: '2019/02/01 11:38:23',
  }
];

const userDepartmentInforows: JsonArray = [
  {
    label: "テクノロジーユニットIT統括ITサービス開発本部デジタルビジネスプラットフォーム統括部認証サービス開発課",
    date: '2019/10/26 11:38:23',
  },
  {
    label: "テスト用作業グループB",
    date: '2019/02/01 11:38:23',
  }
];

const userDepartmentInfoData: TreeViewTableRows = {
  id: 'defaultExpanded',
  label: '配属組織',
  icon: 'account',
  rows: userDepartmentInforows,
};

const historyData: TreeViewTableRows = {
  id: 'root',
  label: '履歴',
  icon: 'history',
  children: [
    {
      id: '1',
      label: "基本情報",
      rows: userBasicInforows,
    },
    {
      id: '2',
      label: "属性情報",
      rows: userSubInforows,
    },
    {
      id: '3',
      label: "配属情報",
      rows: userDepartmentInforows,
    },
  ]
};