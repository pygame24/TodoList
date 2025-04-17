import { useDispatch } from 'react-redux';

import { EditOutlined, CloseOutlined } from '@ant-design/icons';

import { deleteTodo, completedTask } from "../features/todoSlice";
import { useTaskContext } from '../context/TaskContext';

export default function ContentTask({ task }) {
    const dispatch = useDispatch();

    const { setIsOpenTask, setTaskId, setInfoTask, borderColor, setIsOpenUpdateTask } = useTaskContext();
    const borderInput = borderColor(task.tag);

    return (
        <li className='drop-menu__item'>
            <div className='item__right'>
                <div className="custom-input">
                    <input
                        id='ckeck'
                        className={`custom-checkbox ${borderInput}`}
                        checked={task.completed}
                        type="checkbox"
                        onChange={() => dispatch(completedTask({status: task.completed ? 'Не выполнено' : 'Выполнено', task: task}))}
                    />
                    <label for='check'></label>
                </div>
                <div className='task-info'>
                    <a href="#!" onClick={() => {
                        setIsOpenTask(true);
                        setTaskId(task.id)
                        setInfoTask(task)
                    }}>{task.name}</a>
                    <p className='task-desc'>{task.description}</p>
                </div>
            </div>
            <div className='drop-menu__btns'>
                <button onClick={() => {
                    setIsOpenUpdateTask(true);
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