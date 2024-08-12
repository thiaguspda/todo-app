// src/App.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        ToDo App
      </Typography>
      <AddTodo />
      <TodoList />
    </Container>
  );
}

export default App;
