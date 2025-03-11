import { useEffect, useState } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";

const styleInput = {
    width: '100%',
    border: '1px solid #cfcfcf',
    borderRadius: '8px',
    padding: '7px 10px',
    marginTop: 15
}
const tags = [
    { value: 'Срочно и важно', label: 'Срочно и важно' },
    { value: 'Не срочно, но важно', label: 'Не срочно, но важно' },
    { value: 'Срочно, но не важно', label: 'Срочно, но не важно' },
    { value: 'Не срочно и не важно', label: 'Не срочно и не важно' },
];

export default function NewTaskForm({
    // findTaskById,
    setTask,
    taskId,
    selectedTag,
    setSelectedTag,
    taskName,
    setTaskName,
    taskDesc,
    setTaskDesc,

    openModalAddNewTask,
    isOpenUpdateTask,

    selectedUpdateTag,
    setSelectedUpdateTag,
    taskUpdateName,
    setUpdateTaskName,
    taskUpdateDesc,
    setUpdateTaskDesc
}) {

    const todos = useSelector((state) => state.todos);
    // const [task, setTask] = useState(null);
    
    useEffect(() => {
        if (isOpenUpdateTask) {
            const foundTask = findTaskById(taskId);
            if (foundTask) {
                setTask(foundTask[0]);
                setSelectedUpdateTag(foundTask[0].tag);
                setUpdateTaskName(foundTask[0].name);
                setUpdateTaskDesc(foundTask[0].description);
            }
        }
    }, [taskId, todos]);

    function findTaskById(id) {
        const findTask = todos.map((list) => {
            const listTasks = Object.values(list)[0];
            const taskById = listTasks.find((t) => t.id === id);
            return taskById || null;
        });
        return findTask.filter((t) => t !== null);
    }
    console.log(selectedUpdateTag)
    const handleChangeTag = (value) => {
        setSelectedTag(value);
    };
    const handleChangeName = (event) => {
        setTaskName(event.target.value);
    };
    const handleChangeDesc = (event) => {
        setTaskDesc(event.target.value);
    };
    const handleChangeUpdateTag = (value) => {
        setSelectedUpdateTag(value);
    };
    const handleChangeUpdateName = (event) => {
        setUpdateTaskName(event.target.value);
    };
    const handleChangeUpdateDesc = (event) => {
        setUpdateTaskDesc(event.target.value);
    };

    return (
        <div>
            <div className='tag-color'></div>
            <Select
                defaultValue={isOpenUpdateTask ? selectedUpdateTag : selectedTag}
                value={selectedUpdateTag}
                style={{ width: 200 }}
                onChange={isOpenUpdateTask ? handleChangeUpdateTag : handleChangeTag}
                options={tags}
            />
            <form action="">
                <input
                    style={styleInput}
                    value={isOpenUpdateTask ? taskUpdateName : taskName} //
                    onChange={isOpenUpdateTask ? handleChangeUpdateName : handleChangeName}
                    className="input-name"
                    type="text"
                    placeholder="Что бы вы хотели сделать?" />
                <br />
                <input
                    style={styleInput}
                    value={isOpenUpdateTask ? taskUpdateDesc : taskDesc} //
                    onChange={isOpenUpdateTask ? handleChangeUpdateDesc : handleChangeDesc}
                    className="input-desc"
                    type="text"
                    placeholder="Описание" />
            </form>
        </div>
    )
}