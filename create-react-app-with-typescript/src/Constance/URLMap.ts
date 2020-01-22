export const MENU_URLS = [
    {
        name: "アカウント",
        URL: "/home",
        icon: "account"
    },
    {
        name: "共有アカウント",
        URL: "/docs",
        icon: "sharedAccount"

    },
    {
        name: "システム権限",
        URL: "/issue",
        icon: "authority"

    },
    {
        name: "申請書",
        URL: "/issue",
        icon: "application"

    }
]

export const SUBMENU_URLS_MASTER = [
    {
        name: "承認グループ",
        URL: "/apply",
        icon: "approval"
    },
    {
        name: "申請グループ",
        URL: "/contact",
        icon: "authority"
    },
    {
        name: "システムグループ",
        URL: "/apply",
        icon: "system"
    },
    {
        name: "インフォメーション",
        URL: "/contact",
        icon: "info"
    }
]
export const SUBMENU_URLS_TOOLS = [
    {
        name: "STRAIGHT互換認証API",
        URL: "/apply",
        icon: "straightApi"
    },
    {
        name: "管理者機能",
        URL: "/contact",
        icon: "settingUsers"
    }
]
export const SUBMENU_URLS = [
    {
        name: "マスタ",
        URL: "/apply",
        icon: "master",
        subsubmenu: SUBMENU_URLS_MASTER
    },
    {
        name: "ツール",
        URL: "/contact",
        icon: "tools",
        subsubmenu: SUBMENU_URLS_TOOLS

    }
]