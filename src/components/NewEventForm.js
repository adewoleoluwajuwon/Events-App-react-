
import './Neweventform.css'
import React, { useState } from 'react'

export default function NewEventForm( { addEvent, setShowModal } ) {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');

    const handleEventTitle = (e) => {
        setEventTitle(e.target.value);
    };
    const handleEventDate = (e) => {
        setEventDate(e.target.value);
    };
    const handleEventLocation = (e) => {
        setEventLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(eventTitle && eventDate && eventLocation){
            const newEvent = {
                id: Math.floor(Math.random() * 10000),
                title: eventTitle,
                date: eventDate,
                location: eventLocation
            }
            addEvent(newEvent)
            setShowModal(false)
        } else{alert('Please fill event fields')};
        resetForm();
    };
    const resetForm = () => {
        setEventTitle('');
        setEventDate('');
        setEventLocation('');
    };

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span>Enter new event</span>
            <input 
                type='text'
                value= {eventTitle}
                onChange={handleEventTitle}
            />
        </label>
        <label>
            <span>Enter new date</span>
            <input 
                type='date'
                value={eventDate}
                onChange={handleEventDate}
            />
        </label>
        <label>
            <span>Enter event location: </span>
            <select value={eventLocation} onChange={handleEventLocation}>
                <option></option>
                <option value='manchester'>Manchester</option>
                <option value='cardiff'>Cardiff</option>
                <option value='london'>London</option>
            </select>
        </label>

        <button type='submit'>Submit Event</button>
    </form>
  )
};
