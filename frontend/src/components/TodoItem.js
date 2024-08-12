// src/components/TodoItem.js
import React from 'react';
import { connect } from 'react-redux';
import { removeTask, toggleTask } from '../actions/taskActions';

const TodoItem = ({ task, removeTask, toggleTask }) => (
    <div>
        <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
        </p>
        <button onClick={() => toggleTask(task)}>
            {task.completed ? 'Desmarcar' : 'Marcar como Concluída'}
        </button>
        <button onClick={() => removeTask(task.id)}>Excluir</button>
    </div>
);

export default connect(null, { removeTask, toggleTask })(TodoItem);
