import React, { useState } from 'react'

export const Form = () => {

  const [ appointment, updateAppointment ] = useState({
    petName: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  })

  const updateState = (e) => {
    updateAppointment({
      ...appointment,
      [ e.target.name ]: e.target.value
    })
  }

  const { petName, owner, date, hour, symptoms } = appointment

  const submitAppointment = (e) => {
    e.preventDefault()
    console.log('sending form')
  }

  return (
    <>
      <h2>add appointment</h2>
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
