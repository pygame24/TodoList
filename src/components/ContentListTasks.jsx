import { useState } from 'react';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import ContentTask from './ContentTask';

export default function ContentListTasks({ list, setIsOpenTask, setTaskId, setInfoTask, borderColor, openUpdateModal }) {
    const [downMenu, setDownMenu] = useState(true);

    const listName = Object.keys(list);
    const tasks = list[listName];
    // console.log(listName,tasks)
    // console.log(list)

    return (
        <div className="dropdown">
            <button className='dropdown__btn' onClick={() => setDownMenu((prev) => !prev)}>{listName} {downMenu ? <DownOutlined /> : <RightOutlined />}</button>
            <div className={`dropdown__menu ${downMenu ? 'open' : 'none'}`}>
                <ul>
                    {tasks.map((task) => (
                        <ContentTask 
                        key={task.id}
                            task={task}
                            setIsOpenTask={setIsOpenTask}
                            setTaskId={setTaskId}
                            setInfoTask={setInfoTask}
                            borderColor={borderColor}
                            openUpdateModal={openUpdateModal}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}