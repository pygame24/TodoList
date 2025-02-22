import { useState } from "react";
import { DownOutlined, RightOutlined } from '@ant-design/icons';

export default function SiderListTasks({ list }) {
    const [downMenu, setDownMenu] = useState(true);

    const listName = Object.keys(list)[0]
    const tasks = list[listName];

    return (
        <div className="dropdown">
            <button onClick={() => setDownMenu((prev) => !prev)}>{listName}  {downMenu ? <DownOutlined /> : <RightOutlined />}</button>
            <div className={`dropdown__menu ${downMenu ? 'open' : 'none'}`}>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input type="checkbox" />
                            <a href="#!">{task.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}