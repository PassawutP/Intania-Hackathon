import React from 'react';
import imageDefault from '../assets/images/image-default.png';
import imagePlaceholder from '../assets/images/place-holder.png';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const Game: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90vh' }}>
        <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <h1 style={{ color: 'black' }}>Match</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', flexDirection: "column", gap: "15px"}}>
                    <div>
                        <h3>Player 1</h3>
                        <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        label={"Describe the picture.."}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: 20 }}>
                        <Button variant="outlined">Confirm</Button>
                        <Button variant="outlined">Submit</Button>
                    </div>
                    <hr style={{ border: '1px solid black', margin: '20px 0' }} />
                    <div style={{ width: '150px', height: '150px' }}>
                        <h3>Test Images</h3>
                        <img src={imagePlaceholder} alt="Default" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                </div>
                <div style={{ width: '420px', height: '515px' }}>
                    <img src={imageDefault} alt="Default" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <div style={{ color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', flexDirection: "column", gap: "15px"}}>
                    <div>
                        <h3>Player 2</h3>
                        <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        label={"Describe the picture.."}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: 20 }}>
                        <Button variant="outlined">Confirm</Button>
                        <Button variant="outlined">Submit</Button>
                    </div>
                    <hr style={{ border: '1px solid black', margin: '20px 0' }} />
                    <div style={{ width: '150px', height: '150px' }}>
                        <h3>Test Images</h3>
                        <img src={imagePlaceholder} alt="Default" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Game;
