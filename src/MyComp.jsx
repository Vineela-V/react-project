import React, { useState, Component } from 'react';
import { createRoot } from 'react-dom/client'; 


// Class Components //
export class MyComp extends Component {
  render() {
    return <div>Hello, {this.props.name}.</div>;
  }
}

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

// componentDidUpdate() Method //
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

// Named Function Component //
export function Greet(props) {
  return <h2>Welcome, {props.username}!</h2>;
}

// Main App Component //
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Greet username="Vinni" />
      <MyComp name="Vineela" />
    </div>
  );
}

// React 18 root rendering
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 
root.render(<App />);

// Using If/Else Statements //

let hour = 14;
let message;
if (hour < 12) {
  message = 'Good Morning';
} else {
  message = 'Good Afternoon';
}
console.log(message);

// using tenary operator //

let hour1 = 14;
let message1 = (hour1 < 12) ? 'Gud mrng' : 'Gud afternoon';
console.log(message1); 

// Logical AND (&&) Operator //

const SimpleAndExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Welcome to My Website</h1>
      {isLoggedIn && <p>You are logged in!</p>}

      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
};

export default SimpleAndExample;

// switch Statement //
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "MONDAY";
    break;
  case 2:
    dayName = "TUESDAY";
    break;
  case 3:
    dayName = "WEDNESDAY";
    break;
  case 4:
    dayName = "THURSDAY";
    break;
  case 5:
    dayName = "FRIDAY";
    break;
  case 6:
    dayName = "SATURDAY";
    break;
  case 7:
    dayName = "SUNDAY";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);

// Conditional Rendering in Lists (Using .map()) //

const items = ["Apple", "Banana", "Cherry"];
const fruitList = items.map((item, index) =>
    item.includes("a") ? <p key={index}>{item}</p> : null
);


// Rendering a List and keys//

 export const FruitsList = () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};


const users = [
  { id: 1, name: 'Vineela', email: 'vineela@example.com' },
  { id: 2, name: 'Abada', email: 'abada@example.com' },
  { id: 3, name: 'Shyafh', email: 'shyafh@example.com' },
];

export function UserList() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// add or remove //

export const FruitManager = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Mango' }
  ]);
  const [newFruit, setNewFruit] = useState('');

  const addFruit = () => {
    if (newFruit.trim() === '') return;
    const newItem = {
      id: Date.now(),
      name: newFruit
    };
    setFruits([...fruits, newItem]);
    setNewFruit('');
  };

  const removeFruit = (id) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2> Fruit List</h2>
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Enter fruit name"
        style={{ padding: '8px' }}
      />
      <button onClick={addFruit} style={{ marginLeft: '10px', padding: '8px' }}>
        Add Fruit
      </button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {fruits.map(fruit => (
          <li key={fruit.id} style={{ margin: '10px 0' }}>
            {fruit.name}
            <button
              onClick={() => removeFruit(fruit.id)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
