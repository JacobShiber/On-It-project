import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {GetAllSchedules, PostSchedules} from '../../../services/schedule/schedule.service'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
    
});

let events = [
];

function AdminSchedule() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    useEffect(() => {
      GetAllSchedules()
      .then(result => {
        result.map(event => {
          event.end = new Date(Date.parse(event.end))
          event.start = new Date(Date.parse(event.start))
          return null;
        })
        setAllEvents(result);
      })
    }, [])


    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
        newEvent.allDay = false;
        PostSchedules(newEvent).then(result => console.log(result));
        // console.log(newEvent);
    }


    return (
        <div className="AdminSchedule">
            <h1>Calendar</h1>
            <div className="addEvent">
            <h2>Add New Event</h2>
                <input type="text" className="inputText" placeholder="Add Title" style={{ width: "37%", marginRight: "5px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker minDate={new Date()} showTimeSelect dateFormat="Pp" placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker minDate={newEvent.start} showTimeSelect dateFormat="Pp" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button className="saveEvent" stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
                <br/>
                <img src="https://cdn-icons-png.flaticon.com/512/1513/1513520.png"
                alt="gifClock" />
            </div>
            <Calendar className="maimSchedule" localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default AdminSchedule;