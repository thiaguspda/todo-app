// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton, Checkbox, TextField, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { getTasks, removeTask, toggleTask } from '../actions/taskActions';

const TodoList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label="Buscar Tarefas"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 2 }}
      />
      <List>
        {filteredTasks.map((task) => (
          <ListItem
            key={task.id}
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(removeTask(task.id))}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <Checkbox
              edge="start"
              checked={task.completed}
              tabIndex={-1}
              disableRipple
              onClick={() => dispatch(toggleTask(task))}
            />
            <ListItemText
              primary={task.title}
              sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
