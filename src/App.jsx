import React, { Component } from 'react';
import MyComp, { WelcomeMessage, Counter } from './MyComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hey, I'm Vineela!",
    };
  }

  changeMessage = () => {
    this.setState({ message: 'Welcome to React!' });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{this.state.message}</h1>
        <button
          onClick={this.changeMessage}
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
}

export default App;
