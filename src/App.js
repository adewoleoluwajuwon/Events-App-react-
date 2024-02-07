
import { useState } from 'react'
import './App.css'
import React from 'react'
import EventList from './components/EventList'
import Modal from './components/Modal'
import NewEventForm from './components/NewEventForm'


export default function App() {
  const isSaleModal = true;
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([ ]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent])
  };

  const handleClick = (id) => {
    setEvents(prevEvents => 
      prevEvents.filter(event => id !== event.id))
  }

  return(
    <div className='App'>

      {showEvents && <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div> }

      {!showEvents && <div>
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      </div> }

      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {showModal && (<Modal isSalesModal={isSaleModal} setShowModal={setShowModal}>
        <NewEventForm addEvent={addEvent} setShowModal={setShowModal}/>
      </Modal>) }

      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>
  )
}