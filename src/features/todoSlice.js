import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [{
        "Не выполнено": [{
            id: Math.floor(Math.random()*10000),
            name: '✔ Создавайте задачи, освобождайте свой разум',
            description: 'Если вы часто забываете, что должны сделать, запишите, чтобы освободить свой разум.',
            tag: 'Срочно и важно',
            completed: false,
        },
        {
            id: Math.floor(Math.random()*10000),
            name: '🎯 Матрица Эйзенхауэра: Приоритизация задач',
            description: 'Если у вас каждый день много дел, использование матрицы Эйзенхауера поможет вам сосредоточиться на важных и срочных делах.',
            tag: 'Срочно, но не важно',
            completed: false,
        },
        {
            id: Math.floor(Math.random()*10000),
            name: '📈 Диаграмма задач',
            description: 'Вы также можете отслеживать количество задач отсортированных по категориям: Срочно и важно; Важно, но не срочно; Срочно, но не важно; Не срочно и не важно; Выполнено',
            tag: 'Срочно, но не важно',
            completed: false,
        },
        ]
    },
    {
        'Выполнено': []
    }
    ],
    reducers: {
        addTodo: (state, action) => {
            const { status, task } = action.payload;
            const todoList = state.find((todo) => todo[status])
            if (todoList) {
                todoList[status].unshift(task)
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

            const taskComplete = {
                ...task,
                completed: !task.completed,
            }
            todoList[status].push(taskComplete);

            const todoListItemToFilter = state.find(item => item[taskTag]);
            if (todoListItemToFilter) {
                todoListItemToFilter[taskTag] = todoListItemToFilter[taskTag].filter(t => t.id !== task.id);
            }
        }
    },
});

export const { addTodo, deleteTodo, updateTodo, completedTask } = todoSlice.actions;
export default todoSlice.reducer;