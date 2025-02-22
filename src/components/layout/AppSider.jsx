import React from "react";
import { Layout } from "antd";
import SiderListTasks from "./SiderListTasks";

// потом через redux
import { tasks } from "../../tasks";

const siderStyle = {
    backgroundColor: '#00cae3',
    paddingBottom: "20px",
    overflowY: "scroll",
};

export default function AppSider() {
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {tasks.map((item, index) => (
                <SiderListTasks 
                    key={index}
                    list={item}
                />
            ))}
        </Layout.Sider>
    )
}