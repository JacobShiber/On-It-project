import { useState, useEffect } from "react";
import { GetAllUsers } from "../../../services/users/users.service";

const ContactTable = () => {

  let [visibleData, setVisibleData] = useState([]);

  let [baseData , setBaseData] = useState([]) ;

  let message = "not exist , make sure you typed correctly" ;

  let [visibleMessage , setVisibleMessage] = useState(false) ;

  const fetchData = () => {
    GetAllUsers()
    .then((data) => {
      setBaseData(data);
      setVisibleData(data) ;
    })
    .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchData();
  }, []);


  const findByName = (e) => {

    setVisibleMessage(false);

      let filteredData = visibleData.filter (
      (user) => user.firstName.toLowerCase().indexOf(e.target.value) > -1
     );

    if(filteredData.length) {
      setVisibleData(filteredData) 
    }
    else {
      setVisibleMessage(true)
      let filteredBase = baseData.filter(user => user.firstName.toLowerCase().indexOf(e.target.value) > -1)
      if(filteredBase.length){ 
        setVisibleData (filteredBase) ; 
        setVisibleMessage(false)
      }
    }

    e.target.value === "" && fetchData();
  };

  return (
    <>
      <section style={{ display:"flex", justifyContent:"flex-end" , width: "95vw",height: "85vh", marginTop: "3vh", overflowX:"hidden" }} >
        <section style={{alignSelf:"self-start" , justifySelf: "center"}}>
         <input onChange={findByName} placeholder="Search By Name" style={{position:"absolute" , top:"5%" , left:"8%"}}/>
         {visibleMessage ? <p>{message}</p> : ""}
        </section>
        <table className="table-fill" style={{overflowX:"scroll"}}>
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Phone</th>
              <th className="text-left">Email</th>
              <th className="text-left">Course</th>
              <th className="text-left">School</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {visibleData.map((user, index) => (
                <tr key={index}>
                  <td className="text-left">{user.firstName}</td>
                  <td className="text-left">{user.phone}</td>
                  <td className="text-left">{user.email}</td>
                  <td className="text-left">{user.course}</td>
                  <td className="text-left">{user.school}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ContactTable;
 

