import React from 'react';
import Todo from './components/Todo';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start" // Changed to flex-start to keep elements at the top
        paddingTop={4}
        minHeight="100vh"
      >
        <Typography variant="h3" gutterBottom>
          React TODO App
        </Typography>
        <Todo />
      </Box>
    </Container>
  );
}

export default App;
