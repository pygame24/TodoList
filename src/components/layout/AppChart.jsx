import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Срочно и важно', 'Не срочно, но важно', 'Срочно, но не важно', 'Не срочно и не важно', 'Выполнено'],
    datasets: [
        {
            //   label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [

                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                '#c70404',
                '#e65d02',
                '#1662db',
                '#5d03ab',
                '#08bf23',
            ],
            borderWidth: 0,
        },
    ],
};

export default function AppChart() {
    return (
        <div>
            <h1>Диаграмма Задач</h1>
            <p>Всего задач: </p>
            <div style={{display: 'flex', justifyContent: 'center', height: 400}}>
                <Pie data={data} />
            </div>
        </div>
    )
}