import React, { useState } from "react"
import { createStyles, makeStyles, Tabs, Tab, IconButton } from "@material-ui/core";
import { Rnd } from "react-rnd";
import Scrollbars from "react-custom-scrollbars";
import { CloseOutlined, DragIndicatorOutlined } from "@material-ui/icons";
import { IForm } from "../Constance/interfaces";


const useStyles = makeStyles(theme => createStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    tabs: {
        color: theme.palette.common.white,
        flexGrow: 1
    },
    tab: {
        minWidth: 80
    },
    tabIcon: {
        color: theme.palette.common.white,
    },
    tabBar: {
        backgroundColor: theme.palette.primary.main,
        display: "flex"
    },
    mainContent: {
        backgroundColor: theme.palette.primary.light,
        border: "1px solid black",
        flexGrow: 1,
        zIndex: 1,
        position: "relative",
        paddingTop: "8px"
    },
    drag: {},
}))

interface IProps {
    initPosition: {
        x: number,
        y: number,
        width: string,
        height: string
    },
    menus:string[],
    boxName:string

}

const DraggableBox: React.FC<IForm & IProps> = (props) => {
    const classes = useStyles(props);
    const [selectedTab, setSelect] = useState(0);
    const [position, setPosition] = useState(
        props.initPosition
    );

    return (
        <div
            hidden={props.hidden}
            style={{
                position: "relative",
                zIndex: props.zIndex
            }}
            onClick={props.refrechZIndex}
        >
            <Rnd
                default={position}
                onDragStop={(e, d) => { setPosition({ x: d.x, y: d.y, ...position }) }}
                onResize={(e, direction, ref, delta, position) => {
                    const { width, height } = ref.style
                    setPosition({
                        width: width ? width : "0",
                        height: height ? height : "0",
                        ...position
                    })
                }}
                dragHandleClassName={classes.drag}
                minWidth={80*props.menus.length+96}
                minHeight={400}
                bounds=".DRAG_CONTAINER"
            >
                <div
                    className={classes.container}
                >
                    <div className={classes.tabBar}>
                        <Tabs
                            className={classes.tabs}
                            value={selectedTab}
                            onChange={(e, v) => { setSelect(v) }}
                        >
                            {
                                props.menus.map((item, index) => {
                                    return (
                                        <Tab
                                            className={classes.tab}
                                            key={index}
                                            label={item}
                                        />
                                    );
                                })
                            }
                        </Tabs>
                        <IconButton
                            onClick={() => {
                                props.toggleHidden()
                            }}
                            className={classes.tabIcon}
                        >
                            <CloseOutlined />
                        </IconButton>
                        <IconButton
                            className={classes.tabIcon + " " + classes.drag}
                        >
                            <DragIndicatorOutlined />
                        </IconButton>
                    </div>
                    <div
                        className={classes.mainContent}
                    >
                        <Scrollbars>
                            {React.Children.toArray(props.children)[selectedTab]}
                        </Scrollbars>
                    </div>
                </div>
            </Rnd>
        </div>
    );
}

export default DraggableBox;