import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90vh' }}>
      <div style={{ flex: 1, backgroundColor: 'black', color: 'white' }}>

      <div
          style={{
            position: 'relative',
            top: '18%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '4em',
            fontStyle: 'bold',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Your Text Here
        </div>

        
        <div
          style={{
            position: 'relative',
            top: '18%',
            left: '15%',
            marginTop: '20px',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '2em',
            textAlign: 'center',
          }}
        >
          Your Text Here

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginRight: '110px' }}>
          <Button variant="contained" color="primary" onClick={() => navigate('/lobby')}>
            Start Game
          </Button>
        </div>
        </div>



        <img src={require('../assets/images/AIimg.jpg')} alt="AI Image" 
        style={{ width: '90%', height: 'auto' , borderRadius: '16px',
          display: 'block',
          margin: '0 auto',}} />
        <div>
          <p>Welcome to the Home page!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
