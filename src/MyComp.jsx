import React, { Component } from 'react';

// class components //
export class MyComp extends Component {
  render() {
    return <div>Hello, {this.props.name}.</div>;
  }
};

// componentDidMount() Method //

 export class WelcomeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "Welcome to ReactJS!" });
    }, 2000);
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}


// componentDidUpdate() method //

export class Counter extends Component {
  state = {
    count: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// props //

export default function Greet(props) {
  return <h2>Welcome, {props.username}!</h2>;
}
<Greet username="Vinni" />;
