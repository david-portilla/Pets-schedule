import React from 'react'

const Appointment = ({ appointment }) => (
  <div className="cita">
    <p>Pet Name: <span>{ appointment.petName }</span></p>
    <p>Owner: <span>{ appointment.owner }</span></p>
    <p>Date: <span>{ appointment.date }</span></p>
    <p>Hour: <span>{ appointment.hour }</span></p>
    <p>Symptoms: <span>{ appointment.symptoms }</span></p>
  </div>
)

export default Appointment
