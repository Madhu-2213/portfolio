// src/App.js
import React from 'react';
import { CssBaseline, Box, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'light', // Change to 'dark' if you prefer
    primary: {
      main: '#ff5858',
    },
    secondary: {
      main: '#f857a6',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box component="main" sx={{ mt: '80px' }}>
        <Box id="home" sx={{ scrollMarginTop: '80px' }}>
          <Home />
        </Box>

        <Box id="about" sx={{ scrollMarginTop: '80px' }}>
          <About />
        </Box>

        <Box id="resume" sx={{ scrollMarginTop: '80px' }}>
          <Resume />
        </Box>

        <Box id="portfolio" sx={{ scrollMarginTop: '80px' }}>
          <Portfolio />
        </Box>

        <Box id="contact" sx={{ scrollMarginTop: '80px' }}>
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
