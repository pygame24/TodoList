import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux"

import SiderListTasks from "../SiderListTasks";

const siderStyle = {
    backgroundColor: '#00cae3',
    paddingBottom: "20px",
    overflowY: "scroll",
};

export default function AppSider({ borderColor }) {
    const todos = useSelector((state) => state.todos);

    return (
        <Layout.Sider width="25%" style={siderStyle}>
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