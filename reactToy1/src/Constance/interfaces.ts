export interface IForm {
    hidden: boolean,
    toggleHidden: () => void,
    zIndex: number,
    refrechZIndex: () => void;
}

export interface IIncident {
    channel: string,
    status: string,
    no: string,
    assignDate: Date,
    updateDate: Date,
    assignee: string,
    client: string,
    content: string,
    escaDate: Date,
    escaTeam: string,
    title: string,
    serviceDate: Date,
    priority: string
}

export type IIncidentKeyTypes = "channel" | "status" | "no" | "assignDate" | "updateDate" | "assignee" | "client" | "content" | "escaDate" | "escaTeam" | "title" | "serviceDate" | "priority"

export const Incident_Keys: IIncidentKeyTypes[] = ["channel", "status", "no", "assignDate", "updateDate", "assignee", "client", "content", "escaDate", "escaTeam", "title", "serviceDate", "priority"]