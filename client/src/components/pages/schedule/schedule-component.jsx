import React, { useEffect, useState } from "react";
import { ScheduleContextProvider } from "../../../context/schedule/schedule-context";
import { GetAllSchedules } from "../../../services/schedule/schedule.service";
import UserSchedule from "./userSchedule-component";

const Schedule = () => {
  // const [scheduleData,setScheduleData]=useState({});
  // useEffect(()=>{
  //   GetAllSchedules()
  //   .then((res)=>setScheduleData({...res})) 
  //   console.log(scheduleData);
  // },[])
  return (
    <ScheduleContextProvider>
      <UserSchedule />
    </ScheduleContextProvider>
  );
};
export default Schedule;
