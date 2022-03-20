import AdminSchedule from './adminSchedule-component';
import UserSchedule from './userSchedule-component';

function Schedule() {

    const user = JSON.parse(localStorage.getItem('user'));

    return (
      <div>
        { user.isAdmin === true? <AdminSchedule /> : <UserSchedule />}
      </div>
    );
}

export default Schedule;
