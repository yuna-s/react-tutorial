import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { TreeViewTableRows } from './interface';
import InfoTable from './InfoTable';
import { ListItem, List, Typography, ListItemIcon } from '@material-ui/core';
import Icon from '../../Constance/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    flexGrow: 1,
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    padding: theme.spacing(1),
  },
  labelText: {
    flexGrow: 1,
    padding: theme.spacing(0, 1),
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));


/**
 * JSON配列を展開して rowsに値があればInfoTableメソッドに渡し、入れ子構造のテーブルを返す 
 * @param props 
 */
function TreeViewTableItem(props: TreeViewTableRows) {
  const classes = useStyles();
  return (
    <List component="div" disablePadding>

      <ListItem button className={classes.nested}>
        {(props.rows) ? <InfoTable rows={props.rows} /> : null}
      </ListItem>
    </List>
  );
}

/**
 * rows属性にTreeViewTableRows型のJSON配列を渡すと入れ子構造のテーブルを作成するメソッド。
 * @param props 
 */
export default function TreeViewTable(props: TreeViewTableProps) {
  const classes = useStyles();

  const renderTree = (nodes: TreeViewTableRows) => (
    <TreeItem key={nodes.id} nodeId={nodes.id}
      label={
        <div className={classes.labelRoot}>
          {(nodes.icon) ? <Icon iconName={nodes.icon} /> : null}
          <Typography variant="body1" className={classes.labelText}>
            {nodes.label}
          </Typography>
        </div>
      }>
      {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : TreeViewTableItem(nodes)}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['defaultExpanded']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<ArrowDropDownIcon />}
    >
      {renderTree(props.rows)}
    </TreeView>
  );
}

interface TreeViewTableProps {
  rows: TreeViewTableRows
};

/*
rows例
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

const data: RenderTree = {
  id: 'root',
  label: '履歴情報',
  children: [
    {
      id: '1',
      label: "基本情報",
      rows: userSubInforows
    },
    {
      id: '2',
      label: '属性情報',
      children: [
        {
          id: '3',
          label: '猫',
          rows: userSubInforows
        },
        {
          id: '4',
          label: '太郎',
          rows: userSubInforows,
          children: [
            {
              id: '5',
              label: "基本情報",
              rows: userSubInforows
            },
          ]
        },
      ],
    },
  ],
};


 */