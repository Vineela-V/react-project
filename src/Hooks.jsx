// counter using useState //

import { useState, createContext, useContext, useEffect, useLayoutEffect,useInsertionEffect, useMemo,useCallback, useFetch, useRef, useReducer, useImperativeHandle,forwardRef  } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    };
    return (
            <button onClick={handleClick}>
                Click {count} me
            </button>
    );
}

// Managing form input state //

export function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
    };
    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name'/>
            <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter your Age'/>
            <button onClick={handleSubmit}>Submit</button>
            {submitted && <p>Form Submitted!</p>}
        </div>
    );
}

//Context Hook //
// Managing Authentication with useContext //

export const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
            { children }
        </AuthContext.Provider>
    );
}
export function LoginButton() {
    const { isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    return (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}> {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    );
}

// sharing a theme across components //

// ThemeContext and ThemeProvider

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

// effect hooks//
//useEffect() //

export function HookCounterOne() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    }, [count]);
    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times{" "}
            </button>
        </div>
    );
}

// componentDidMount() Equivalent with useEffect //

export function UserProfile() {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("Component mounted");
    fetchUserData();
  }, []); 

  const fetchUserData = () => {
    setTimeout(() => {
      setData({
        name: "Vinela",
        age: 23,
      });
    }, 1000);
  };

  return (
    <div>
      <h2>User Profile</h2>
      {data ? (
        <p>Name: {data.name}, Age: {data.age}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

// unmount() //

export function TimerComponent() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(timer); 
      console.log("Timer stopped, component unmounted");
    };
  }, []); 

  return (
    <div>
      <h2>Time: {time} seconds</h2>
    </div>
  );
}

// EVENT Listners cleanup //
export function WindowResizeListener() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); 
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Window resize listener cleaned up');
    };
  }, []);

  return (
    <div>
      <h2>Window Width: {windowWidth}px</h2>
    </div>
  );
}

// useLayoutEffect hook //

export const LayoutEffectDemo = () => {
    const [value, setValue] = useState("ABC");
    useLayoutEffect(() => {
        console.log(
            "UseLayoutEffect is called with the value of ", value
        );
    }, [value]);
    setTimeout(() => {
        setValue("Änything will work");
    }, 2000);
    return (
        <div style={{
            textAlign: "center",
            margin: "auto",
        }}
        >
          <h1  style={{ color: "blue" }}>{value}</h1> is the greatest motivation for work.
        </div>
    );
};

// useInsertion Effect hook //

export function FontSizeComponent() {
  const [isLargeFont, setIsLargeFont] = useState(false);
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-size: ${isLargeFont ? '24px' : '14px'};
      }
      @media (max-width: 600px) {
        body {
          font-size: ${isLargeFont ? '18px' : '12px'};
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [isLargeFont]);

  return (
    <div>
      <p>The current font size is {isLargeFont ? 'large' : 'small'}.</p>
      <button onClick={() => setIsLargeFont((prev) => !prev)}>
        Toggle Font Size
      </button>
    </div>
  );
}

// 4. Performance Hook//
// useMemo hook //

export function FactorialComponent() {
  const [number, setNumber] = useState(5);
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const calculateFactorial = (n) => {
      if (n <= 0) return 1;
      return n * calculateFactorial(n - 1);
    };
    return calculateFactorial(number);
  }, [number]); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Factorial of {number} is: {factorial}</h2>
      <button onClick={() => setNumber(number + 1)} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Increase Number
      </button>
    </div>
  );
}

// useCallback hook //
export const funcSet = new Set();
export const CallbackDemo = () => {
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);

    const incCnt = useCallback(() => setCnt(cnt + 1), [cnt]);
    const decCnt = useCallback(() => setCnt(cnt - 1), [cnt]);
    const incNum = useCallback(() => setNum(num + 1), [num]);

    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);
    alert(funcSet.size);

    return (
        <div>
            <h2>With useCallback Hook</h2>
            <button onClick={incCnt}>Increase Counter</button>
            <button onClick={decCnt}>Decrease Counter</button>
            <button onClick={incNum}>Increase Number</button>
        </div>
    );
};

// useFetch hook //
export function Fetch() {
    const countRef = useRef(0);
    const [forceRender, setForceRender] = useState(false);

    const increment = () => {
        countRef.current += 1;
        setForceRender(!forceRender);
    };

    return (
        <div>
            <h1>Count: {countRef.current}</h1> {/* Display count value */}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

// useReducer Hook //
function reducer (state, action) {
  switch (action.type) {
    case   'increment':
      return {count: state.count + 1};
    case  'decrement':
      return {count: state.count - 1};
    case 'reset' :
      return {count: 0};
    default:
      return state;
  }
}
export function CounterWithReducer() {
    const initialState = {count: 0};
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
      </div>
    );
}

// useImperativeHandle hook //

 const Child = forwardRef((props, ref) => {
  const showAlert = () => {
    alert('Hello from Child component!');
  };
  useImperativeHandle(ref, () => ({
    showAlert
  }));

  return <p>I'm the Child component</p>;
});
export function Parent() {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.showAlert(); 
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Child ref={childRef} />
      <button onClick={handleClick}>Call Child Method</button>
    </div>
  );
}

// custom hooks //

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Controlled component //

export function ControlledForm () {
  const [name, setName] = useState('');
  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
}

// Uncontrolled Components //

export function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
