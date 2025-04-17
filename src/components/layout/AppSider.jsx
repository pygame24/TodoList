import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux"

import SiderListTasks from "../SiderListTasks";
import { useTaskContext } from "../../context/TaskContext";

const siderStyle = {
    height: "100%",
    boxSizing: "border-box",
    backgroundColor: '#00cae3',
    paddingBottom: "20px",
    overflowY: "auto",
};

export default function AppSider() {
    const todos = useSelector((state) => state.todos);
    const { borderColor } = useTaskContext()
    // Пока не добавят задачу не переренд-ать
    return (
        <Layout.Sider width="25%" style={siderStyle} className="sider">
            {todos.map((item, index) => (
                <SiderListTasks 
                    key={index}
                    list={item}
                    borderColor={borderColor}
                />
            ))}
        </Layout.Sider>
    )
}