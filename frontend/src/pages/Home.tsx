import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: 'black', color: 'white' }}>
        <h2>Home Page</h2>
        <p>Welcome to the Home page!</p>
      </div>
    </div>
  );
};

export default Home;
