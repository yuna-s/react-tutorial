import { icons } from "./Icon";
import { JsonArray } from "Component/Frame/interface";


export interface HeaderProps {
    children: React.ReactNode
};

export interface IconProps {
    iconName: icons
};

/**
 * 検索画面用の複数CheckBox
 */
export interface SearchCheckBoxProps {
    label?: string,
    state: Checkboxes,
    onChange: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface Checkboxes {
    [x: string]: boolean
}

/**
 * SearchForm関連
 */
export interface SerchFormProps {
    onChange: (searchFormState: SerchFormState) => void
}

export interface SearchFormParamsDataProps {
    label: string,
    state: string,
    placeHolder: string,
    example: string,
}

export interface inputParams {
    [x: string]: { content: string, exactMatch: boolean },
}

export interface SearchFormParamsDataArrayProps extends Array<SearchFormParamsDataProps> { }

export interface SerchFormState {
    categories: Checkboxes,
    deleted: boolean,
    inputParams: inputParams
}

export interface SerchResultTableProps {
    result: JsonArray
}