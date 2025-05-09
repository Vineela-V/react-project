import React from 'react';
import { App1, App2, PreventForm,keyboardEvents, App3,DoubleClickExample, ScrollExample,BlurExample } from './DOM events';

const App = () => {
  return (
    <div>
      < App1 />
      < App2 />
      < PreventForm />
      < keyboardEvents />
      < App3 />
      < DoubleClickExample />
      < ScrollExample />
      < BlurExample />
    </div>
  )
}

export default App