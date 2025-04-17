import { Modal } from "antd";

import InfoTaskModal from './InfoTaskModal';
import NewTaskForm from "./NewTaskForm";
import { useTaskContext } from "../context/TaskContext";

export default function Modals() {
    const {
        // task,
        isOpenTask,
        setIsOpenTask,
        openModalAddNewTask,
        setOpenModalAddNewTask,
        isOpenUpdateTask,
        setIsOpenUpdateTask,
        // addNewTask,
        // updateTask,
        setTaskName,
        setTaskDesc } = useTaskContext();

    return (
        <>
            <Modal
                title="Информация о задаче"
                open={isOpenTask}
                onCancel={() => setIsOpenTask(false)}
                footer={null}>
                <InfoTaskModal />
            </Modal>
            <Modal
                title="Добавить задачу"
                open={openModalAddNewTask}
                // onOk={addNewTask}
                footer={null}
                onCancel={() => {
                    setOpenModalAddNewTask(false)
                    // setSelectedTag('')
                    setTaskName('')
                    setTaskDesc('')
                }}>
                <NewTaskForm />
            </Modal>
            <Modal
                title="Обновить задачу"
                open={isOpenUpdateTask}
                // onOk={updateTask}
                footer={null}
                onCancel={() => setIsOpenUpdateTask(false)}>
                <NewTaskForm />
            </Modal>
        </>
    )
}