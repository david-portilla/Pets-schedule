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

  // remove appointments by id
  const removeAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    saveAppointment(newAppointments)
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
            { appointments.length > 0 ? <h2>Manage your dates</h2> : <h2>Add a new appointment</h2> }
            { appointments.map(appointment => (
              <Appointment
                key={ appointment.id }
                appointment={ appointment }
                removeAppointment={ removeAppointment }
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
