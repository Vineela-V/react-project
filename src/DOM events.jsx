// onClick event //

import "./App.css"

import React, {useState} from "react";

export const App1 = () => {
    const [num, setNum] = useState(false);
    const [btn, setBtn] = useState(false);
    const handleClick = () => {
        setNum(!num);
        setBtn(!btn);
    };

    return (
        <div className="App">
            <h2> {
                num ?
                    "onClick event performed" :
                    "onClick event not performed"
            }
            </h2>
            <button onClick={handleClick}>
                {btn ? "clicked" : "onClick"}
            </button>
        </div>
    );
};

// onChange event //

export function App2() {
    const [value, setValue] = useState("HTML");
    function handleChange(e) {
        setValue(e.target.value);
    }
    return (
        <div
            style={{ textAlign: "center", margin: "auto" }}
        >
            <h1 style={{ color: "Green" }}>
                Languages in FrontEnd
            </h1>
            <h3>
                Example for React onChange Event Handler
            </h3>
            <select value={value} onChange={handleChange}>
                <option value={"HTML"}>HTML</option>
                <option value={"CSS"}>CSS</option>
                <option value={"JavaScript"}>
                    JavaScript
                </option>
            </select>
            <br />
            <div>User Input:- {value}</div>
        </div>
    );
}

// onSubmit //

export function PreventForm() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      alert("Input cannot be empty!");
      return;
    }
    setResult(trimmed);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Text:
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setResult("");
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

// onKeyDown Event & onKeyUp Event//

export function keyboardEvents() {
    const [keyDown, setKeyDown] = useState("");
    const [keyUp, setKeyUp] = useState("");
    const handleKeyDown = (e) => {
        setKeyDown(`key down: ${e.key}`);
    };
    const handleKeyUp = (e) => {
        setKeyUp(`key up: ${e.key}`);
    };
    return (
        <div style={{padding: "2rem"}}>
          <h2>React  onKeyDown/ onKeyUp Example</h2>
          <input type="text" placeholder="Type something..." onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}
        />
        <p>{keyDown}</p>
        <p>{keyUp}</p>
        </div>
    );
}

// onMouseEnter Event //

export const App3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColor = isHovered ? 'red' : 'black';
  return (
    <h1
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: textColor }}
    >
      Hover over me to change text color
    </h1>
  );
};

// DoubleClick Event //

export function DoubleClickExample() {
  const [isRed, setIsRed] = useState(false);

  const handleDoubleClick = () => {
    setIsRed(prev => !prev);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2
        onDoubleClick={handleDoubleClick}
        style={{ color: isRed ? 'red' : 'black', cursor: 'pointer' }}
      >
        Double-click me to change my color!
      </h2>
    </div>
  );
}

// onScroll Event //

export function ScrollExample() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Scroll Example</h2>
      <div
        onScroll={handleScroll}
        style={{
          border: '1px solid #ccc',
          height: '200px',
          width: '300px',
          overflowY: 'scroll',
          padding: '1rem',
        }}
      >
        <div style={{ height: '600px' }}>
          <p>Scroll down to see the scroll position update.</p>
        </div>
      </div>
      <p>Scroll position: {scrollTop}px</p>
    </div>
  );
}

// onBlur Event //

export function BlurExample() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const handleBlur = () => {
    if (!name.trim()) {
      setError('Name is required.');
    } else {
      setError('');
    }
  };
  return (
    <div style={{ padding: '2rem' }}>
      <h2>onBlur Example</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleBlur}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
