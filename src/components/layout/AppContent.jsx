import { useState } from "react";
import { Layout, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

import ContentListTasks from "../ContentListTasks";
import InfoTaskModal from '../InfoTaskModal';
import NewTaskForm from "../NewTaskForm";

import { addTodo, updateTodo } from "../../features/todoSlice";

const contentStyle = {
    height: "100%",
    backgroundColor: '#fdfdfd',
    overflowY: "scroll",
};

export default function AppContent({ borderColor }) {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [isOpenTask, setIsOpenTask] = useState(false);
    const [openModalAddNewTask, setOpenModalAddNewTask] = useState(false);
    const [isOpenUpdateTask, setIsOpenUpdateTask] = useState(false);

    const [task, setTask] = useState(null);
    const [taskId, setTaskId] = useState(0);
    const [infoTask, setInfoTask] = useState(null);

    const [selectedTag, setSelectedTag] = useState('Не срочно и не важно');
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const [selectedUpdateTag, setSelectedUpdateTag] = useState('Не срочно и не важно');
    const [taskUpdateName, setUpdateTaskName] = useState('');
    const [taskUpdateDesc, setUpdateTaskDesc] = useState('');

    // const [selectedUpdateTag, setSelectedUpdateTag] = useState('');
    // const [taskUpdateName, setUpdateTaskName] = useState('');
    // const [taskUpdateDesc, setUpdateTaskDesc] = useState('');

    // function findTaskById(id) {
    //     const findTask = todos.map((list) => {
    //         const listTasks = Object.values(list)[0];
    //         const task = listTasks.find((t) => t.id === id);
    //         if (task) return task;
    //         return null;
    //     });
    //     const task = findTask.filter((t) => t !== null);
    //     if (task) return task;
    // }


    function addNewTask() {
        const newTask = {
            id: Math.floor(Math.random()*10000),
            name: taskName,
            description: taskDesc,
            completed: false,
            tag: selectedTag,
        }
        dispatch(addTodo({ status: 'Не выполнено', task: newTask }));
        // console.log(todos)

        setTaskName('');
        setTaskDesc('');
        setOpenModalAddNewTask(false);
    }

    function updateTask() {
        const updatedTask = {
            ...task,
            name: taskUpdateName,
            description: taskUpdateDesc,
            tag: selectedUpdateTag,
        };
        dispatch(updateTodo({status: task.completed ? 'Выполнено' : 'Не выполнено', updateTask: updatedTask, taskId: taskId}))
        setIsOpenUpdateTask(false);
    }
    console.log(task);

    return (
        <Layout.Content style={contentStyle}>
            <div className="content__header">
                <h2>Добро пожаловать</h2>
                <button onClick={() => setOpenModalAddNewTask(true)}>Add Task</button>
            </div>
            <div className="tasks">
                {todos.map((item, index) => (
                    <ContentListTasks
                        key={index}
                        list={item}
                        setIsOpenTask={setIsOpenTask}
                        // taskId={taskId}
                        setInfoTask={setInfoTask}
                        setTaskId={setTaskId}
                        borderColor={borderColor}
                        openUpdateModal={setIsOpenUpdateTask}
                    />
                ))}
            </div>
            <Modal
                title="Info Task"
                open={isOpenTask}
                onCancel={() => setIsOpenTask(false)}
                footer={null}>
                <InfoTaskModal
                    // taskId={taskId}
                    infoTask={infoTask}
                    borderColor={borderColor}
                    />
            </Modal>
            <Modal
                title="New Task"
                open={openModalAddNewTask}
                onOk={addNewTask}
                onCancel={() => {
                    setOpenModalAddNewTask(false)
                    // setSelectedTag('')
                    setTaskName('')
                    setTaskDesc('')
                }}>
                <NewTaskForm
                task={task}
                    borderColor={borderColor}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    taskName={taskName}
                    setTaskName={setTaskName}
                    taskDesc={taskDesc}
                    setTaskDesc={setTaskDesc}
                    openModalAddNewTask={openModalAddNewTask}
                    isOpenUpdateTask={isOpenUpdateTask}
                />
            </Modal>
            <Modal
                title="Update Task"
                open={isOpenUpdateTask}
                onOk={updateTask}
                onCancel={() => setIsOpenUpdateTask(false)}>
                <NewTaskForm
                    // findTaskById={findTaskById}
                    setTask={setTask}
                    taskId={taskId}

                    selectedUpdateTag={selectedUpdateTag}
                    setSelectedUpdateTag={setSelectedUpdateTag}
                    taskUpdateName={taskUpdateName}
                    setUpdateTaskName={setUpdateTaskName}
                    taskUpdateDesc={taskUpdateDesc}
                    setUpdateTaskDesc={setUpdateTaskDesc}

                    openModalAddNewTask={openModalAddNewTask}
                    isOpenUpdateTask={isOpenUpdateTask}
                />
            </Modal>
        </Layout.Content>
    )
}