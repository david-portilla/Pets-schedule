import React from 'react'

export const Form = () => {
  return (
    <>
      <h2>add appointment</h2>
      <form>

        <label>Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Pet name"
        />

        <label>Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
        />

        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
        />

        <label>Symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        > Create appointment</button>

      </form>
    </>
  )
}
