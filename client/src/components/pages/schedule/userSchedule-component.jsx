import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect, useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { LoadingContext } from "../../../context/loading/loading-context";
import {GetAllSchedules} from '../../../services/schedule/schedule.service';

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
  let {loading,setLoading} = useContext(LoadingContext);

    useEffect(() => {
  setLoading(true);
      GetAllSchedules()
      .then(result => {
        result.map(event => {
          event.end = new Date(Date.parse(event.end))
          event.start = new Date(Date.parse(event.start))
          return null;
        })
        setAllEvents(result);
      })
  .finally(() => setLoading(false))
    }, [])
    return (
      <>{loading ? <img src="https://img1.picmix.com/output/stamp/normal/6/3/3/5/1025336_27291.gif" className='gifLoading' alt="gifLoading" />:
        <div className="UserSchedule">
            <h1>Calendar</h1>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    }</>);
}

export default UserSchedule;
