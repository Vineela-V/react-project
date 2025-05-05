
import { useState } from 'react';
import MyComp from './MyComp';

function App() {
  const [message, setMessage] = useState("Hey, I'm Vineela!");

  const changeMessage = () => {
    setMessage("Welcome to React!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
      <button
        onClick={changeMessage}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Click Here!
      </button>
      <MyComp name="Vineela" />
    </div>
  );
}

export default App;
