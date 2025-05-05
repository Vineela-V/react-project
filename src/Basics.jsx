import React from "react";

// conditional rendering//
const isLoggedIn = true;
export const Status = () => (
    <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
);

export const Basics = () => <h2>Hello!</h2>;
export const Basics1 = () => <h3>This is my first webpage.</h3>;
export const Header = () => <h1>Welcome to my Page.</h1>;
export const Footer = () => <footer>@2025 My WebPage.</footer>;

// Embedding expressions
export const Greeting = () => {
  const name = 'Vineela';
  return <h4>Hello, {name}!</h4>;
};

// Passing children in JSX
export const Welcome = (props) => {
  return <div>{props.children}</div>;
};

// Jsx Represents objects //
export const Element = React.createElement(
    "button",
    {
      className: "btn",
      onClick: () => alert("Clicked!"),
    },
    "Click Me"
  );

// rendering a list //
const fruits = ["Apple", "Orange", "Kiwi", "Banana"];
export const FruitList = () => (
  <ul>
    {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
    ))}
  </ul>
);

// handling events //

 export const Button = () => {
 const handleClick = () => alert("Hey, I'm here!");
    return < button onClick={handleClick}>Click Me</button>
};

// styling in jsx //
export const StyledText = () => (
    <p style={{ color: "red", fontSize: "25px" }}>Hello, Here i am creating a mini paragraph. Which is styled in jsx.</p>
  );
  
// Fragment to return multiple elem //
export const MultiElement = () => (
    <>
      <h1>Title of the Page.</h1>
      <h2>Descirption</h2>
      <h3>About the Author</h3>
      <p>The complete story of the Book , Which was published by the famous author.</p>
      <h4>Conclusion and moral of the BOOK.</h4>
      <h5>Detailing of Author</h5>
      <h6>Price</h6>
    </>
);

// using React.createElement without jsx//
export const NoJsx = () => {
    return React.createElement("h1", null, "Rendered without JSX");
};