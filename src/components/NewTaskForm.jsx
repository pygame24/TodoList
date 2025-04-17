import { useEffect } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";
import { useTaskContext } from "../context/TaskContext";

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

export default function NewTaskForm() {

    const todos = useSelector((state) => state.todos);
    const {
        setTask,
        taskId,
        selectedTag,
        setSelectedTag,
        taskName,
        setTaskName,
        taskDesc,
        setTaskDesc,
        isLoading,
        // setIsLoading,

        isOpenUpdateTask,
        addNewTask,
        updateTask,

        selectedUpdateTag,
        setSelectedUpdateTag,
        taskUpdateName,
        setUpdateTaskName,
        taskUpdateDesc,
        setUpdateTaskDesc
    } = useTaskContext();

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

    let typeBtn = isOpenUpdateTask ? 'Update Task' : 'Add Task';
    let typeLoad = typeBtn === 'Update Task' ? 'Updating...' : 'Adding...';

    return (
        <div style={{marginBottom: 30}}>
            <Select
                defaultValue={isOpenUpdateTask ? selectedUpdateTag : selectedTag}
                value={isOpenUpdateTask ? selectedUpdateTag : selectedTag}
                style={{ width: 200 }}
                onChange={isOpenUpdateTask ? handleChangeUpdateTag : handleChangeTag}
                options={tags}
            />
            <form action="" style={{height: '240px'}}>
                <input
                    style={styleInput}
                    value={isOpenUpdateTask ? taskUpdateName : taskName} //
                    onChange={isOpenUpdateTask ? handleChangeUpdateName : handleChangeName}
                    className={!(isOpenUpdateTask ? taskUpdateName : taskName) && "invalid-value"}
                    type="text"
                    spellCheck="true"
                    placeholder="Что бы вы хотели сделать?"
                    required
                />
                <br />
                <textarea
                    style={styleInput}
                    value={isOpenUpdateTask ? taskUpdateDesc : taskDesc} //
                    onChange={isOpenUpdateTask ? handleChangeUpdateDesc : handleChangeDesc}
                    className="input-desc"
                    type="text"
                    spellCheck="true"
                    placeholder="Описание" />
            </form>
            <div style={{float: 'right'}}>
                <button className={`btn ${(isLoading || !(isOpenUpdateTask ? taskUpdateName : taskName)) && 'loading'}`}
                    disabled={isLoading || !(isOpenUpdateTask ? taskUpdateName : taskName)}
                    onClick={isOpenUpdateTask ? updateTask : addNewTask}
                >{isLoading ? typeLoad : typeBtn}</button>
            </div>
        </div>
    )
}