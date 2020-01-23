import EmployeeInfoTable from "../Page/Services/ProcessingItems/EmployeeInfoComponent/EmployeeInfoTable";

export const DRAGGABLE_BOXES: DRAGGABLE_BOXES_TYPE[] = [
    "empInfo", "chat", "manage", "knowledge"
];

type DRAGGABLE_BOXES_TYPE = "empInfo" | "chat" | "manage" | "knowledge"

export const DRAGGABLE_BOXES_PROPS = {
    empInfo: {
        initPosition: {
            x: 0,
            y: 0,
            width: 620 + "",
            height: 650 + ""
        },
        menus: ["社員情報", "端末情報", "権限情報", "過去履歴"],
    },
    chat: {
        initPosition: {
            x: 675,
            y: 50,
            width: 500 + "",
            height: 800 + ""
        },
        menus: ["Chat"],
    },
    manage: {
        initPosition: {
            x: 600,
            y: 275,
            width: 550 + "",
            height: 575 + ""
        },
        menus: ["Management"],
    },
    knowledge: {
        initPosition: {
            x: 200,
            y: 150,
            width: 550 + "",
            height: 250 + ""
        },
        menus: ["knowledge"],
    },
}