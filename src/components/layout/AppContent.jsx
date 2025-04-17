import { Layout, Modal } from "antd";
import { useSelector } from "react-redux";

import ContentListTasks from "../ContentListTasks";
import Modals from "../Modals";
import { useTaskContext } from "../../context/TaskContext";

const contentStyle = {
    height: "100%",
    boxSizing: "border-box",
    paddingBottom: '20px',
    backgroundColor: '#fdfdfd',
    overflowY: "auto",
};

export default function AppContent() {
    const todos = useSelector((state) => state.todos);
    const { setOpenModalAddNewTask } = useTaskContext();
// Пока не добавят задачу не переренд-ать
    return (
        <Layout.Content style={contentStyle} className="content">
            <div className="content__header">
                <h2>Добро пожаловать</h2>
                <button className="btn" onClick={() => setOpenModalAddNewTask(true)}>Add Task</button>
            </div>
            <div className="tasks">
                {todos.map((item, index) => (
                    <ContentListTasks
                        key={index}
                        list={item}
                    />
                ))}
            </div>
            <Modals />
        </Layout.Content>
    )
}