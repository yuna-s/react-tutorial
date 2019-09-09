import { IIncident } from "./interfaces";

export const TESTDATA = [
    {
        title: "W181016-00005",
        submiiter: "OA 太郎(1604321)",
        assignee: {
            id: "0438175",
            company: "ソフトバンク株式会社",
            category: "正社員",
            name_kana: "オソロシイ　ペッパー",
            name: "恐ろしい　ペッパー",
            address: "",
            arias: [],
            mail_address: "",
            superior: "",
            role: "部長",
            enter_date: "2008/04/01",
            comment: "VIP"
        }
    },
    {
        title: "W181016-00006",
        submiiter: "test 太郎(1604321)",
        assignee: {
            id: "7777777",
            company: "ソフトバンク株式会社",
            category: "正社員",
            name_kana: "test",
            name: "test",
            address: "",
            arias: [],
            mail_address: "",
            superior: "",
            role: "部長",
            enter_date: "2008/04/01",
            comment: "VIP"
        }
    }
]

export const TEST_SUPPORT_LIST: IIncident[] = [
    {
        channel: "chat",
        status: "wait",
        no: "INC0000001",
        assignDate: new Date("2019-09-30"),
        updateDate: new Date("2019-09-30"),
        assignee: "test assignee",
        client: "test client",
        content: "test content",
        escaDate: new Date("2019-09-30"),
        escaTeam: "test team",
        title: "test title",
        serviceDate: new Date("2019-09-30"),
        priority: "normal"
    },
    {
        channel: "chat",
        status: "wait",
        no: "INC0000002",
        assignDate: new Date("2019-09-27"),
        updateDate: new Date("2019-09-27"),
        assignee: "test assignee2",
        client: "test client2",
        content: "test content2",
        escaDate: new Date("2019-09-27"),
        escaTeam: "test team2",
        title: "test title2",
        serviceDate: new Date("2019-09-27"),
        priority: "normal"
    },
    {
        channel: "chat",
        status: "wait",
        no: "INC0000003",
        assignDate: new Date("2019-09-28"),
        updateDate: new Date("2019-09-28"),
        assignee: "test assignee3",
        client: "test client3",
        content: "test content3",
        escaDate: new Date("2019-09-28"),
        escaTeam: "test team3",
        title: "test title3",
        serviceDate: new Date("2019-09-28"),
        priority: "normal"
    },
    {
        channel: "web",
        status: "wait",
        no: "INC0000004",
        assignDate: new Date("2019-08-28"),
        updateDate: new Date("2019-08-28"),
        assignee: "test assignee4",
        client: "test client4",
        content: "test content4",
        escaDate: new Date("2019-08-28"),
        escaTeam: "test team3",
        title: "test title4",
        serviceDate: new Date("2019-08-28"),
        priority: "normal"
    },
]


export const IMAGESRC = "//ww.namu.la/s/e81e2a83ce2701031c4257dab6bae8308522b5afa8f9c19c560c56ff091be0cc0cebf4968338fdf03ed0c23e224771ee01b4aa644c02cecce10096ed1df52c2943bce3fcf33741829071203dd9f068116f307ade54005bae23dd7e9a1bfddb78";