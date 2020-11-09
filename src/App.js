import React, { useState } from 'react'
import { Form } from './components/Form';

function App () {

  const [ appointments, saveAppointment ] = useState([])

  const createAppointment = appointment => {
    console.log(appointment)
    saveAppointment([
      ...appointments,
      appointment
    ])
  }

  return (
    <>
      <h1>Pets-schedule</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={ createAppointment }

            />
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
