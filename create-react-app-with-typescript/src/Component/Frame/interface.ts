import { icons } from '../../Constance/Icon';

//----Frame----
// general
interface Json {
  [x: string]: string | number | boolean | Date | JSX.Element | Json | JsonArray;
}
export interface JsonArray extends Array<Json> { }

//
export interface FormTableData {
  label: string;
  value: string | number | (() => string);
  fullwidth?: boolean;
  //children?: RenderTree[];
};

export interface FormTableDataArray extends Array<FormTableData> { };

// InformationTable
export interface colum {
  label: string;
  value: string;
};


export interface InformationTableData {
  tablehead: colum[];
  value: string | number | (() => string) | [];
  //children?: RenderTree[];
};

export interface InformationTableDataArray extends Array<InformationTableData> { };

// TreeViewTable

export interface TreeViewTableRows {
  id: string;
  label: string;
  icon?: icons;
  rows?: JsonArray;
  children?: TreeViewTableRows[];
}

// else
export interface Gridwidth {
  xs: boolean | "auto" | 5 | 10 | 4 | 1 | 2 | 3 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  md: boolean | "auto" | 5 | 10 | 4 | 1 | 2 | 3 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  lg: boolean | "auto" | 5 | 10 | 4 | 1 | 2 | 3 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
}