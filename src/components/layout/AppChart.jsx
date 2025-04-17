import { useEffect, useState } from 'react';

import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Срочно и важно', 'Не срочно, но важно', 'Срочно, но не важно', 'Не срочно и не важно', 'Выполнено'],
    datasets: [
        {
            label: 'Кол-во задач',
            data: [],
            backgroundColor: [
                'rgba(199, 4, 4, 0.9)',
                'rgba(230, 93, 2, 0.9)',
                'rgba(22, 98, 219, 0.9)',
                'rgba(104, 6, 189, 0.89',
                'rgba(8, 191, 35, 0.9)',
            ],
            borderWidth: 2,
        },
    ],
};

export default function AppChart() {
    const todos = useSelector((state) => state.todos);
    const tagArray = ['Срочно и важно', 'Не срочно, но важно', 'Срочно, но не важно', 'Не срочно и не важно'];
    const [countTasks, setCountTasks] = useState(null);
    // Пока не добавят задачу не переренд-ать
    // функция для опр длины всех массивов в todos
    function countTasksOnList() {
        const countTasks = tagArray.map((tag) => {
            const filterList = todos.map((list) => {
                const key = Object.keys(list)[0];
                return list[key].filter((item) => item.tag === tag)
            })
            // return {[tag]: filterList.flat()};
            return filterList.flat().length
        })
        const countCompleteTasks = todos[1]['Выполнено'].length;
        console.log(countCompleteTasks);
        return data.datasets[0].data = [countTasks, countCompleteTasks].flat();
    };

    const countTasksByTag = countTasksOnList();
    console.log(countTasksByTag);
    useEffect(() => {
        let count = 0;
        for (let i = 0; i < countTasksByTag.length - 1; i++ ) {
            count += countTasksByTag[i];
        }
        setCountTasks(count)
        console.log(countTasks)
    }, [todos])

    return (
        <div className="chart content">
            <div className="content__header">
                <h2>Диаграмма Задач</h2>
                <p>Всего задач: {countTasks}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', height: 500, marginTop: '40px' }}>
                <Pie style={{cursor: 'pointer'}} data={data} />
            </div>
        </div>
    )
}