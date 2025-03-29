import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Lobby: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90vh' }}>
        <Box sx={{ width: '70%', height: '70%', margin: 'auto', marginTop: 10, borderRadius: 5, color: 'black', border:"2px solid black" }}>
          <div style={{ paddingLeft: 20 }}>
            <h2>Lobby Page</h2>
            <p>Welcome to the Lobby page!</p>
            <Button variant="outlined" onClick={() => navigate('/game')}>Confirm</Button>
          </div>
        </Box>
    </div>
  );
};

export default Lobby;
