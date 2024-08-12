// src/reducers/taskReducer.js
import { GET_TASKS, ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from '../actions/taskActions';

const initialState = {
    tasks: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        default:
            return state;
    }
};

export default taskReducer;
