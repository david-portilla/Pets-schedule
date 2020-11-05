import React from 'react'
import { Form } from './components/Form';

function App () {
  return (
    <>
      <h1>Pets-schedule</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form></Form>
          </div>
          <div className="one-half column">
            col2
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
