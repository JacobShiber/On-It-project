import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import {GetAllSchedules} from '../../../services/schedule/schedule.service'

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

function UserSchedule() {
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



    return (
        <div className="App">
            <h1>Calendar</h1>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default UserSchedule;