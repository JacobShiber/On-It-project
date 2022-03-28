import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect, useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LoadingContext } from "../../../context/loading/loading-context";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {GetAllSchedules, PostSchedules, DeleteSchedules} from '../../../services/schedule/schedule.service' ;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 410,
    borderRadius: "5px" ,
    bgcolor:"rgb(0,0,0,0.7)",
    color: "white",
    border: '3px solid white',
    boxShadow: 24,
    p: 4,
  };

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
    let {loading,setLoading} = useContext(LoadingContext);
    const [open, setOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const [eventId, setEventId] = useState('');

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

    const deleteEvent = async() => {
        await DeleteSchedules(eventId)
        .then(() =>
            GetAllSchedules()
                .then(res => {
                    res.map(event => {
                    event.end = new Date(Date.parse(event.end))
                    event.start = new Date(Date.parse(event.start))
                    return null;
            })
            setAllEvents(res);
          })  
        )
        .finally(() => setOpen(!open))
    }

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
        newEvent.allDay = false;
        PostSchedules(newEvent).then(result => console.log(result));
    }

    return (
        <>
        {
           loading ? <img src="https://img1.picmix.com/output/stamp/normal/6/3/3/5/1025336_27291.gif" className='gifLoading' alt="gifLoading" />:
        <div className="AdminSchedule">
            <h1>Calendar</h1>
            <div className="addEvent">
            <h2>Add New Event</h2>
                <input type="text" className="inputText" placeholder="Add Title"  value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker className="inputText" minDate={new Date()} showTimeSelect dateFormat="Pp" placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker  className="inputText" minDate={newEvent.start} showTimeSelect dateFormat="Pp" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button className="saveEvent" style={{ marginTop: "18px" }} onClick={handleAddEvent}>
                    Add
                </button>
                <br/>
                <img className="imgSchedule" src="https://cdn-icons-png.flaticon.com/512/1513/1513520.png"
                alt="gifClock" />
            </div>
            <Calendar onSelectEvent={event => {setEventId(event._id); setOpen(!open) }} className="maimSchedule" localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <p>Are you sure you want to delete ? </p>
           <div style={{display:"flex" , justifyContent:"space-around" , marginTop:"5%"}}>
           <p style={{cursor:"pointer"}} onClick={deleteEvent}>&#9989;</p>
           <p style={{cursor:"pointer"}} onClick={() => {setOpen(!open)}}>&#10060;</p>
           </div>
          </Typography>
        </Box>
      </Modal>
        </div>
   }</>);
};
export default AdminSchedule;