import React from 'react';
import { Counter, Form, AuthProvider, LoginButton, ThemeProvider,ThemedComponent, HookCounterOne,  LayoutEffectDemo, UserProfile, TimerComponent, WindowResizeListener, FontSizeComponent, FactorialComponent, CallbackDemo, Fetch, CounterWithReducer, Parent, useWindowWidth } from './Hooks';

const App = () => {
  return (
    <div>
      <Counter />
      <Form />
      <AuthProvider>
        <LoginButton />
      </AuthProvider>
      <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
        < UserProfile />
        < TimerComponent />
        < WindowResizeListener />
        < HookCounterOne />
        <  LayoutEffectDemo />
        < FontSizeComponent />
        < FactorialComponent />
        < CallbackDemo />
        < Fetch />
        < CounterWithReducer />
        < Parent />
        < useWindowWidth />
    </div>
  );
};

export default App;
