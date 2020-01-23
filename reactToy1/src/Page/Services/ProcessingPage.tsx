import React, { useState } from 'react';
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DraggableBox from '../../Components/DraggableBox';
import { DRAGGABLE_BOXES, DRAGGABLE_BOXES_PROPS } from '../../Constance/Boxes';
import EmployeeInfoTable from './ProcessingItems/EmployeeInfoComponent/EmployeeInfoTable';
import ChatContainer from './ProcessingItems/ChatComponent/ChatContainer';
import ManagementSelector from './ProcessingItems/ManagementComponent/ManagementSelector';
import KnowledgeContainer from './ProcessingItems/KnowledgeComponent/KnowledgeContainer';

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            display: "flex",
            flexGrow: 1
        },
        content: {
            flexGrow: 1,
            margin: theme.spacing(3),
        },
        sub: {
            position: "fixed",
            right: 0,
            height: "100%",
            width: theme.spacing(3),
            display: "flex",
            flexDirection: "column",
            paddingTop: "64px"
        },
        verticalText: {
            writingMode: "vertical-lr",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            marginTop: "12px",
            padding: "4px",
            height: "140px",
            textAlign: "center"
        }
    }
})

const initOpen = [
    "empInfo", "chat", "manage",
]

const initClose = [
    "knowledge"
]

const ProcessingPage: React.FC = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [openedMenu, toggleOpen] = useState<string[]>(initOpen);
    const [closedMenu, toggleClose] = useState<string[]>(initClose)
    const [zIndexList, setZIndexList] = useState<string[]>([...initOpen, ...initClose]);

    const refrechZIndex = (name: string) => {
        const index = zIndexList.indexOf(name)
        zIndexList.splice(index, 1);
        const newList = [...zIndexList, name];
        setZIndexList(newList);
    }

    const toggle = (isHidden: boolean, name: string) => {
        if (isHidden) {
            const newClosedMenu = closedMenu.filter((item) => {
                return item !== name
            })
            toggleClose(newClosedMenu)
            toggleOpen([...openedMenu, name])
            refrechZIndex(name);
        } else {
            const newOpenedMenu = openedMenu.filter((item) => {
                return item !== name
            })
            toggleOpen(newOpenedMenu)
            toggleClose([...closedMenu, name])
        }
    }

    return (
        <div className={classes.container}>
            <div
                className={classes.content + " DRAG_CONTAINER"}
            >
                {
                    DRAGGABLE_BOXES.map((item, index) => {
                        let result: any = "";
                        if (item === "empInfo") {
                            result = (
                                <EmployeeInfoTable />
                            )
                        } else if (item === "chat") {
                            result = (
                                <ChatContainer />
                            )
                        } else if (item === "manage") {
                            result = (
                                <ManagementSelector />
                            )
                        } else if (item === "knowledge") {
                            result = (
                                <KnowledgeContainer />
                            )
                        }
                        return (
                            <DraggableBox
                                {...DRAGGABLE_BOXES_PROPS[item]}
                                key={index}
                                boxName={item}
                                zIndex={zIndexList.indexOf(item)}
                                refrechZIndex={() => { refrechZIndex(item) }}
                                hidden={openedMenu.indexOf(item) === -1}
                                toggleHidden={() => { toggle(openedMenu.indexOf(item) === -1, item) }}
                            >
                                {result}
                            </DraggableBox>
                        );
                    })
                }
            </div>
            <div
                className={classes.sub}
            >
                {
                    closedMenu.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={classes.verticalText}
                            >
                                <Typography
                                    key={index}
                                    onClick={() => {
                                        toggle(true, item)
                                    }}
                                >
                                    {item}
                                </Typography>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ProcessingPage;