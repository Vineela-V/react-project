import React from 'react';
import { Parent, ParentComponent, ChildComponent, Parent1, NameForm, Parent2, UserForm} from './Component& Lifting State ';

const App = () => {
  return (
    <div>
      < Parent />
      < ParentComponent />
      < ChildComponent />
      < Parent1 />
      < NameForm />
      < Parent2 />
      < UserForm />
    </div>
  )
}

export default App