import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { EditOutlined, CloseOutlined } from '@ant-design/icons';

import { deleteTodo, completedTask } from "../features/todoSlice";

export default function ContentTask({ task, setIsOpenTask, setTaskId, setInfoTask, borderColor, openUpdateModal }) {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // const [classInput, setClassInput] = useState('')

    const [complete, setComplete] = useState(task.completed);

    // console.log(task);

    const borderInput = borderColor(task);
    // console.log(borderInput)
    // console.log(todos)
    return (
        <li className='drop-menu__item'>
            <div>
                <input
                    id='ckeck'
                    // className={borderInput}
                    className={`custom-checkbox ${borderInput}`}
                    checked={complete}
                    type="checkbox"
                    onClick={() => {
                        // setComplete(task.completed);
                        dispatch(completedTask({status: task.completed ? 'Не выполнено' : 'Выполнено', task: task}))
                    }}
                />
                <label for='check'></label>
                <a href="#!" onClick={() => {
                    setIsOpenTask(true);
                    setTaskId(task.id)
                    setInfoTask(task)
                }}>{task.name}</a>
            </div>
            <div className='drop-menu__btns'>
                <button onClick={() => {
                    openUpdateModal(true);
                    setTaskId(task.id);
                }} className="edit-task"><EditOutlined /></button>
                <button 
                onClick={() => dispatch(deleteTodo({ status: task.completed ? 'Выполнено' : 'Не выполнено', task: task }))}
                className="delete-task">
                    <CloseOutlined /></button>
            </div>
        </li>
    )
}