import { useState, useEffect , useContext } from "react";
import { GetAllUsers } from "../../../services/users/users.service";
import { themeContext } from "../../../context/theme-context/theme-context";
import './contact.css' ;

const ContactTable = () => {

  const {themeColor ,  setThemeColor , purpleMode , setPurpleMode } = useContext(themeContext);

  let [visibleData, setVisibleData] = useState([]);

  let [baseData , setBaseData] = useState([]) ;

  let message = "not found" ;

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
      <section className="cntcMain">

         <section className="cntcSearchCnt">
         <input className="sortNameInput" onChange={findByName} placeholder="Search By Name"/>
         {visibleMessage ? <p className="errorName">{message}</p> : ""}
        </section>

        <div className="table-container">
        <table className="info-table">
          <thead>
            <tr>
              <th className="text-left"  style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Name</th>
              <th className="text-left"  style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Phone</th>
              <th className="text-left"  style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Email</th>
              <th className="text-left"  style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Course</th>
              <th className="text-left"  style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>School</th>
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
        </div> 

      </section>
    </>
  );
};

export default ContactTable;
 

