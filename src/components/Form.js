import React, { useState } from 'react'
import uuid from "uuid/v4";

export const Form = ({ createAppointment }) => {

  const [ appointment, updateAppointment ] = useState({
    petName: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  })

  const [ error, updateError ] = useState(false)

  const updateState = (e) => {
    updateAppointment({
      ...appointment,
      [ e.target.name ]: e.target.value
    })
  }

  const { petName, owner, date, hour, symptoms } = appointment

  const submitAppointment = (e) => {
    e.preventDefault()
    // validate empty fields
    if (petName.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
      updateError(true)
      return
    }
    // remove error msg
    updateError(false)
    // add unique ID to each appointment
    appointment.id = uuid()
    // send appointment data object
    createAppointment(appointment)
    // reset form with empty state
    updateAppointment({
      petName: '',
      owner: '',
      date: '',
      hour: '',
      symptoms: ''
    })
  }

  return (
    <>
      <h2>add appointment</h2>

      {error ? <p className="alerta-error">All the fields are mandatory</p> : null }

      <form
        onSubmit={ submitAppointment }
      >

        <label>Name</label>
        <input
          type="text"
          name="petName"
          className="u-full-width"
          placeholder="Pet name"
          onChange={ updateState }
          value={ petName }
        />

        <label>Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={ updateState }
          value={ owner }
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={ updateState }
          value={ date }
        />

        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={ updateState }
          value={ hour }
        />

        <label>Symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={ updateState }
          value={ symptoms }
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        > Create appointment</button>

      </form>
    </>
  )
}
