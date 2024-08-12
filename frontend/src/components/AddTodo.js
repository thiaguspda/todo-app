// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box } from '@mui/material';
import { addTask } from '../actions/taskActions';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({ title, completed: false }));
      setTitle(''); // Limpar o campo após adicionar a tarefa
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2, display: 'flex', gap: 1 }}>
      <TextField
        label="Adicionar Tarefa"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Adicionar
      </Button>
    </Box>
  );
};

export default AddTodo;
