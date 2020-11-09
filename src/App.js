import React, { useState } from 'react'
import Appointment from './components/Appointment';
import { Form } from './components/Form';

function App () {

  const [ appointments, saveAppointment ] = useState([])
  const createAppointment = appointment => {
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
            <h2>Manage your dates</h2>
            { appointments.map(appointment => (
              <Appointment
                key={ appointment.id }
                appointment={ appointment }
              />
            ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
