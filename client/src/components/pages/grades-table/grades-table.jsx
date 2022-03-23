import React, { useState } from "react";
import AdminGradesTable from "../../features/admin-grades-table/admin-grade-table";
import UserGradesTable from "../../features/user-grade-table/user-grade-table"; 
// import UserCardInfo from '../../features/user-card/user-card';

import './grades.css'
const GradesTable = () => {
  let [view, setView] = useState(false);

  let changeView = () => {
    setView(!view);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div >
      {/* <UserCardInfo /> */}
      {user.isAdmin === false ? <UserGradesTable /> : <AdminGradesTable />}
    </div>
  );
};

export default GradesTable;
