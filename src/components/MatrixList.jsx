import { useState } from "react";
import { useSelector } from "react-redux";
import { useTaskContext } from "../context/TaskContext";
import ContentTask from "./ContentTask";


export default function MatrixList({ tag }) {
    const todos = useSelector((state) => state.todos);
    const {setIsOpenTask, setTaskId, setInfoTask, borderColor, setIsOpenUpdateTask } = useTaskContext();
    const border = borderColor(tag);

    function filteredListByTag(tag) {
        const filteringList = todos.map((list) => {
            const key = Object.keys(list)[0];
            return { [key]: list[key].filter((item) => item.tag === tag) }
        })
        console.log(filteringList)
        return filteringList;
    }
    const filteredList = filteredListByTag(tag);

    return (
        <div className="matrix__list">
            <div className="info-tag">
                <div className={`tag ${border}`}></div>
                <h2>{tag}</h2>
            </div>
            <div className="dropdown__menu">
                {filteredList.map((list) => {
                    const key = Object.keys(list)[0];
                    const tasks = list[key];
                    return tasks.map((task) => (
                        <ContentTask
                            key={task.id}
                            task={task}
                            setIsOpenTask={setIsOpenTask}
                            setTaskId={setTaskId}
                            setInfoTask={setInfoTask}
                            borderColor={borderColor}
                            setIsOpenUpdateTask={setIsOpenUpdateTask} />
                    ))
                })}
            </div>
        </div>
    )
}