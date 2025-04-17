import { useTaskContext } from "../../context/TaskContext";
import MatrixList from "../MatrixList";
import Modals from "../Modals";

export default function AppMatrix() {
    const { setOpenModalAddNewTask } = useTaskContext();
    
    const tagsList = ['Срочно и важно', 'Не срочно, но важно', 'Срочно, но не важно', 'Не срочно и не важно'];
    // Пока не добавят задачу не переренд-ать
    return (
        <div className="matrix content">
            <div className="content__header">
                <h2>Матрица Эйзенхауэра</h2>
                <button className="btn" onClick={() => setOpenModalAddNewTask(true)}>Add Task</button>
            </div>
            <div className="matrix__content">
                {tagsList.map((tag, index) => (
                    <MatrixList
                        key={index}
                        tag={tag}
                    />
                ))}
            </div>
            <Modals />
        </div>
    )
}