import { useState } from 'react';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import ContentTask from './ContentTask';

export default function ContentListTasks({ list }) {
    const [downMenu, setDownMenu] = useState(true);

    const listName = Object.keys(list);
    const tasks = list[listName];

    return (
        <div className="dropdown">
            <button className='dropdown__btn' onClick={() => setDownMenu((prev) => !prev)}>{listName} {downMenu ? <DownOutlined /> : <RightOutlined />}</button>
            <div className={`dropdown__menu ${downMenu ? 'open' : 'none'}`}>
                <ul>
                    {tasks.map((task) => (
                        <ContentTask
                            key={task.id}
                            task={task}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}