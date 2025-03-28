import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import Game from './pages/Game';
import Home from './pages/Home';
import Lobby from './pages/Lobby';
import Result from './pages/Result';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <React.Fragment>
        <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black', height: '6vh' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ marginRight: 5, fontWeight: 'bold' }}>
                Logo
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                  <Typography variant="body1">Home</Typography>
                </Link>
                <Link to="/lobby" style={{ textDecoration: 'none', color: 'black' }}>
                  <Typography variant="body1">Lobby</Typography>
                </Link>
              </Box>
            </Box>
            <IconButton onClick={() => navigate('/profile')}>
              <Avatar sx={{ width: 40, height: 40 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

const RootApp: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default RootApp;
