import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Person } from "@mui/icons-material";

const Lobby: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', height: '120vh', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', height: "100%", width: '70%', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column'}}>
          <h2>Lobby</h2>
          <Box
            sx={{
              width: '100%',
              height: '70%',
              borderRadius: 5,
              color: 'black',
              border: '2px solid black',
              padding: 3,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: "90%",
                height: 75,
                backgroundColor: 'white',
                boxShadow: 3, // MUI shadow level (0-24)
                borderRadius: 2, // Optional rounded corners
                p: 2, // Padding
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ flexDirection: 'column' }}>
                <h2>Lobby Name</h2>
                <h5>Category: Human</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Person sx={{ fontSize: 30, color: "black" }} />
                <h3 style={{ marginLeft: 10 }}>1/2</h3>
                <Button variant="outlined" style={{ marginLeft: 15 }} onClick={() => { navigate('/game') }}>Enter</Button>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};


export default Lobby;
