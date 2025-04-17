import { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todoSlice";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [isOpenTask, setIsOpenTask] = useState(false);
    const [openModalAddNewTask, setOpenModalAddNewTask] = useState(false);
    const [isOpenUpdateTask, setIsOpenUpdateTask] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [dark, setDark] = useState(true);

    const [task, setTask] = useState(null);
    const [taskId, setTaskId] = useState(0);
    const [infoTask, setInfoTask] = useState(null);
    const [chart, setChart] = useState([]);

    const [selectedTag, setSelectedTag] = useState('Не срочно и не важно');
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const [selectedUpdateTag, setSelectedUpdateTag] = useState('Не срочно и не важно');
    const [taskUpdateName, setUpdateTaskName] = useState('');
    const [taskUpdateDesc, setUpdateTaskDesc] = useState('');

    function borderColor(tag) {
        let tagTask;
        if (tag == 'Срочно и важно') {
            tagTask = 'red'
        }
        else if (tag == 'Не срочно, но важно') {
            tagTask = 'orange';
        }
        else if (tag == 'Срочно, но не важно') {
            tagTask = 'blue';
        }
        else {
            tagTask = 'grey'
        }
        return tagTask;
    }

    function addNewTask() {
        setIsLoading(true);
        setTimeout(() => {
            const newTask = {
                id: Math.floor(Math.random() * 10000),
                name: taskName,
                description: taskDesc,
                completed: false,
                tag: selectedTag,
            }
            dispatch(addTodo({ status: 'Не выполнено', task: newTask }));
            setTaskName('');
            setTaskDesc('');
            setOpenModalAddNewTask(false);
            setIsLoading(false);
        }, 100)
        
    }

    function updateTask() {
        setIsLoading(true);
        const updatedTask = {
            ...task,
            name: taskUpdateName,
            description: taskUpdateDesc,
            tag: selectedUpdateTag,
        };
        dispatch(updateTodo({ status: task.completed ? 'Выполнено' : 'Не выполнено', updateTask: updatedTask, taskId: taskId }));
        setIsOpenUpdateTask(false);
        setIsLoading(false);
    }

    return (
        <TaskContext.Provider value={{
            task,
            setTask,
            isOpenTask,
            setIsOpenTask,
            infoTask,
            setInfoTask,
            chart,
            setChart,
            taskId,
            setTaskId,
            isOpenUpdateTask,
            setIsOpenUpdateTask,
            openModalAddNewTask,
            setOpenModalAddNewTask,
            isLoading,
            setIsLoading,
            dark,
            setDark,
            taskName,
            setTaskName,
            taskDesc,
            setTaskDesc,
            selectedTag,
            setSelectedTag,
            selectedUpdateTag,
            setSelectedUpdateTag,
            taskUpdateName,
            setUpdateTaskName,
            taskUpdateDesc,
            setUpdateTaskDesc,
            borderColor,
            addNewTask,
            updateTask
        }}>{children}</TaskContext.Provider>
    )
};

export const useTaskContext = () => {
    return useContext(TaskContext);
}