import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [{
        "Не выполнено": [{
            id: Math.floor(Math.random()*10000),
            name: 'Задача 1',
            description: 'Описание задачи 1',
            tag: 'Срочно и важно',
            completed: false,
        },
        {
            id: Math.floor(Math.random()*10000),
            name: 'Задача 2',
            description: 'Описание задачи 2',
            tag: 'Срочно, но не важно',
            completed: false,
        },
        ]
    },
    {
        'Выполнено': [
            {
                id: Math.floor(Math.random()*10000),
                name: 'Задача 3',
                description: 'Описание задачи 3',
                tag: 'Не срочно, но важно',
                completed: true,
            },
        ]
    }
    ],
    reducers: {
        addTodo: (state, action) => {
            const { status, task } = action.payload;
            const todoList = state.find((todo) => todo[status])
            if (todoList) {
                todoList[status].push(task)
            }
        },
        updateTodo: (state, action) => {
            const { status, updateTask } = action.payload;
            const todoList = state.find((todo) => todo[status]);
            if (todoList) {
                const taskIndex = todoList[status].findIndex(t => t.id === updateTask.id);
                if (taskIndex !== -1) {
                    todoList[status][taskIndex] = { ...todoList[status][taskIndex], ...updateTask };
                }
                // todoList[status].push(updateTask);
                // todoList[status] = todoList[status].filter((t) => t.id !== taskId)
            }
        },

        deleteTodo: (state, action) => {
            const { status, task } = action.payload;
            const todoList = state.find((todo) => todo[status])
            if (todoList) {
                todoList[status] = todoList[status].filter((todo) => todo.id !== task.id)
            }
        },
        completedTask: (state, action) => {
            const { status, task } = action.payload;
            const todoList = state.find((todo) => todo[status]);
            const taskTag = task.completed ? 'Выполнено' : 'Не выполнено';

            // if (todoList) {
            //     const taskIndex = todoList[status].findIndex((t) => t.id === task.id);
            //     if (taskIndex !== -1) {
            //         const uptateTask = {
            //             ...todoList[status][taskIndex],
            //             completed: !todoList[status][taskIndex].completed
            //         };
            //         todoList[status][taskIndex] = uptateTask;
            //     }
            // }
            const taskComplete = {
                ...task,
                completed: !task.completed,
            }
            todoList[status].push(taskComplete);

            const todoListItemToFilter = state.find(item => item[taskTag]);
            if (todoListItemToFilter) {
                todoListItemToFilter[taskTag] = todoListItemToFilter[taskTag].filter(t => t.id !== task.id);
            }
            // todoList[taskTag] = todoList[taskTag].filter((t) => t.id !== task.id);
        }
    },
});

export const { addTodo, deleteTodo, updateTodo, completedTask } = todoSlice.actions;
export default todoSlice.reducer;