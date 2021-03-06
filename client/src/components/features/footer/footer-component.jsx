import React, {useContext} from "react";
import './footer.css'

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import { themeContext } from "../../../context/theme-context/theme-context";


const Footer = () => {
  const {themeColor ,  setThemeColor , purpleMode , setPurpleMode } = useContext(themeContext);
  return (
    <>

      <div className="footer">

        <ArrowCircleUpIcon style={{ fontSize: '300%' }} />
        <div id="container" style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>

        <div className="Icons-container">
        <h2 className="Names">Shimon</h2>
        <a href="https://www.linkedin.com/in/shimon-samay-363a27217/"><i  class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        <a href="https://github.com/ShimonSamay"><i  class="fa fa-github fa-2x" aria-hidden="true"></i></a>
        <a href="shimonsamay7@gmail.com"><i  class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
        </div>

        <div className="Icons-container">
        <h2 className="Names">Yakov</h2>
        <a  href="https://www.linkedin.com/in/yaakov-shiber-31a466226/"><i  class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        <a  href="https://github.com/JacobShiber"><i  class="fa fa-github fa-2x" aria-hidden="true"></i></a>
        <a  href="Yaakovshiber@gmail.com"><i  class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
        </div>

        <div className="Icons-container">
        <h2 className="Names">Keren</h2>
        <a href="keren4509@gmail.com"><i  class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        <a  href="https://github.com/kerenhailu"><i  class="fa fa-github fa-2x" aria-hidden="true"></i></a>
        <a  href="keren4509@gmail.com"><i  class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
        </div>

        <div className="Icons-container">
        <h2 className="Names">Shay</h2>
        <a  href="shay600195@gmail.com"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        <a  href="https://github.com/ShayBelayneh"><i  class="fa fa-github fa-2x" aria-hidden="true"></i></a>
        <a  href="shay600195@gmail.com"><i  class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
        </div>

        </div>

      </div>
    </>
  );
};

export default Footer;

