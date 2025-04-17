import { useState } from "react";
import {  useDispatch } from 'react-redux';
import { completedTask } from "../features/todoSlice";

export default function SiderTask({ task, borderColor }) {
    const [complete, setComplete] = useState(task.completed);
    const borderInput = borderColor(task.tag);

    const dispatch = useDispatch();

    return (
        <li key={task.id}>
            <input
                    id='ckeck'
                    className={`custom-checkbox ${borderInput}`}
                    checked={complete}
                    type="checkbox"
                    onChange={() => {
                        // setComplete(!complete);
                        dispatch(completedTask({status: task.completed ? 'Не выполнено' : 'Выполнено', task: task}))
                    }
                    }
                />
                <label for='check'></label>
            <a href="#!">{task.name}</a>
        </li>
    )
}