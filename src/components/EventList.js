
import styles from './Eventlist.module.css'

import React from 'react'

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {(events.map((event, index) => (
        <div key={event.id} className={styles.card}>
          <h2>{ index + 1} - {event.title}</h2>
          <p>Event-Date: {event.date}</p>
          <p>Event-Location: {event.location}</p>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      )))}
    </div>
  )
}
