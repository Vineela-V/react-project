import React from 'react';
import { Footer, Header, Basics, Basics1, Greeting, Welcome , Element, Status, FruitList, Button, StyledText, MultiElement, NoJsx } from "./Basics";

const App = () => {
  return (
    <div>
      <Header />
      <Basics />
      <Basics1 />
      <Greeting />
      <Welcome>
        <h1>Hello, I'm Vineela.</h1>
        <p>Welcome to my React Basics.</p>
      </Welcome>
      <Status />
      <FruitList />
      <Button />
      <StyledText />
      <MultiElement />
      <NoJsx />
      <Footer />
    </div>
  );
};

export default App;
