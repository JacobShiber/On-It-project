import React, { useState } from "react";
import AdminGradesTable from "../../features/admin-grades-table/admin-grade-table";
import UserGradesTable from "../../features/user-grade-table/user-grade-table";

const GradesTable = () => {
  let [view, setView] = useState(false);

  let changeView = () => {
    setView(!view);
  };

  return (
    <div>
      <button onClick={changeView}>{view ? "Admin-View" : "Student-View"}</button>
      {view ? <UserGradesTable /> : <AdminGradesTable />}
    </div>
  );
};

export default GradesTable;
