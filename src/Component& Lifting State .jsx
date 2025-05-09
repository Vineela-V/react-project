// Lifting state up //

import { useState } from "react";

export function Parent() {
    const [name, setName] = useState('');
    return (
        <>
        <NameInput name={name} onNameChange={setName}/>
        <NamePreview name={name} />
        </>
    );
}
function NameInput({name, onNameChange }) {
        return (
            <input value={name} onChange={(e) =>onNameChange(e.target.value)}
            placeholder="Type your name"
            />
        );
}
function NamePreview({ name }) {
    return <p>Hello, {name || 'Stranger'}!</p>;
}

// Passing callbacks between components //
// parent component //

export function ParentComponent() {
  const [message, setMessage] = useState('Hello from Parent');

  const handleChildClick = () => {
    setMessage('Child clicked the button!');
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>{message}</p>
      <ChildComponent onButtonClick={handleChildClick} />
    </div>
  );
}

// child componnet //

export function ChildComponent({ onButtonClick }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
}

// Prop Drilling Example (Callback passed through multiple components) //

export function Parent1() {
  const [names, setNames] = useState([]);

  const handleAddName = (newName) => {
    setNames(prev => [...prev, newName]);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <NameForm onSubmitName={handleAddName} />
      <h2>Submitted Names:</h2>
      <ul>
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

// Name Form //

export function NameForm({ onSubmitName }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmitName(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// usecase: form in child //

export function Parent2() {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <UserForm onSubmit={handleFormSubmit} />
      
      {userData && (
        <div style={{ marginTop: '1rem' }}>
          <h2>Received from Child:</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      )}
    </div>
  );
}

// userform //

export function UserForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email: </label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
