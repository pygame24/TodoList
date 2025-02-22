import React from "react";
import { Layout } from "antd";
import ContentListTasks from "./ContentListTasks";

// потом через redux
import { tasks } from "../../tasks";

const contentStyle = {
    height: "100%",
    backgroundColor: '#fdfdfd',
    overflowY: "scroll",
};

export default function AppContent() {
    return (
        <Layout.Content style={contentStyle}>
            <div className="content__header">
                <h2>Добро пожаловать</h2>
                <button>Add Task</button>
            </div>
            <div className="tasks">
                {tasks.map((item, index) => (
                    <ContentListTasks
                        key={index}
                        list={item}
                    />
                ))}
            </div>
            {/* </div> */}
        </Layout.Content>
    )
}