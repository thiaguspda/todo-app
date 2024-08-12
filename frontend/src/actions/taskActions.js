// src/actions/taskActions.js
import axios from '../api/axiosConfig'; // Importar a configuração do axios

export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const getTasks = () => async dispatch => {
    try {
        const res = await axios.get('/tasks'); // Requisição GET para listar as tarefas
        dispatch({
            type: GET_TASKS,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

export const addTask = task => async dispatch => {
    try {
        const res = await axios.post('/tasks', task); // Requisição POST para adicionar nova tarefa
        dispatch({
            type: ADD_TASK,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

export const removeTask = id => async dispatch => {
    try {
        await axios.delete(`/tasks/${id}`); // Requisição DELETE para remover tarefa
        dispatch({
            type: REMOVE_TASK,
            payload: id,
        });
    } catch (err) {
        console.error(err);
    }
};

export const toggleTask = task => async dispatch => {
    try {
        const res = await axios.put(`/tasks/${task.id}`, {
            ...task,
            completed: !task.completed,
        }); // Requisição PUT para alternar o status da tarefa
        dispatch({
            type: TOGGLE_TASK,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};
