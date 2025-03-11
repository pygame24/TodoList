import { useState } from "react";
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import SiderTask from "./SiderTask";

export default function SiderListTasks({ list, borderColor }) {
    const [downMenu, setDownMenu] = useState(true);

    const listName = Object.keys(list)[0];
    const tasks = list[listName];
    // console.log(list)
    // console.log(tasks, listName)

    return (
        <div className="dropdown">
            <button onClick={() => setDownMenu((prev) => !prev)}>{listName}  {downMenu ? <DownOutlined /> : <RightOutlined />}</button>
            <div className={`dropdown__menu ${downMenu ? 'open' : 'none'}`}>
                <ul>
                    {tasks.map((task) => (
                        <SiderTask 
                            task={task}
                            borderColor={borderColor}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}