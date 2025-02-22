import { useState } from 'react';
import { DownOutlined, RightOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons';

export default function ContentListTasks({ list }) {
    const [downMenu, setDownMenu] = useState(true);

    const listName = Object.keys(list)[0]
    const tasks = list[listName];

    return (
        <div className="dropdown">
            <button className='dropdown__btn' onClick={() => setDownMenu((prev) => !prev)}>{listName} {downMenu ? <DownOutlined /> : <RightOutlined />}</button>
            <div className={`dropdown__menu ${downMenu ? 'open' : 'none'}`}>
                <ul>
                    {tasks.map((task) => (
                        <li className='drop-menu__item'>
                            <div>
                                <input type="checkbox" />
                                <a href="#!">{task.name}</a>
                            </div>
                            <div className='drop-menu__btns'>
                                <button className="edit-task"><EditOutlined /></button>
                                <button className="delete-task"><CloseOutlined /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}