import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Grid, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo(''); // Clear the text field after adding the new todo
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Box width="100%">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="New Todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            InputProps={{ style: { height: '100%' } }} // Match height with button
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAddTodo}
            style={{ height: '56px' }} // Set button height to match text field
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#e0e0e0',
            }}
          >
            <ListItemText primary={todo} />
            <IconButton onClick={() => handleDeleteTodo(index)} edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Todo;