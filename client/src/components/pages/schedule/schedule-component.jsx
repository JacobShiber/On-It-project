import AdminSchedule from './adminSchedule-component';
import UserSchedule from './userSchedule-component';
import './schedule.css';

function Schedule() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className='mainSchedule'>
        { user.isAdmin === true? <AdminSchedule /> : <UserSchedule />}
      </div>
    );
}

export default Schedule;
