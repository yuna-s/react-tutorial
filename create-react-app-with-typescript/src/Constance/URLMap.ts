export const MENU_URLS: URLMapArray = [
    {
        name: "アカウント",
        URL: "/accountSearch",
        icon: "account"
    },
    {
        name: "システム権限",
        URL: "/userPermissons",
        icon: "userPermissons"

    },
    {
        name: "申請書",
        URL: "/applicationSearch",
        icon: "application"

    }
]

export const SUBMENU_URLS_MASTER: URLMapArray = [
    {
        name: "承認グループ",
        URL: "/approvalGroupMaster",
        icon: "approvalGroup"
    },
    {
        name: "申請グループ",
        URL: "/applicationGroupMaster",
        icon: "applicationGroup"
    },
    {
        name: "システムグループ",
        URL: "/systemGroupMaster",
        icon: "systemGroup"
    },
    {
        name: "インフォメーション",
        URL: "/infoMaster",
        icon: "info"
    }
]
export const SUBMENU_URLS_TOOLS: URLMapArray = [
    {
        name: "STRAIGHT互換認証API",
        URL: "/straightApi",
        icon: "straightApi"
    }
]
export const SUBMENU_URLS: URLMapArray = [
    {
        name: "マスタ",
        URL: "/master",
        icon: "master",
        subsubmenu: SUBMENU_URLS_MASTER
    },
    {
        name: "ツール",
        URL: "/tools",
        icon: "tools",
        subsubmenu: SUBMENU_URLS_TOOLS

    }
]

interface URLMap {
    name: string,
    URL: string,
    icon: string,
    subsubmenu?: URLMap[]
}
interface URLMapArray extends Array<URLMap> { }
