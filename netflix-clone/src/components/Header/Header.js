// import React from 'react'
// import './Header.css';
// const Header = () => {
//   return (
//     <div className="Header_outer_container">
//       <div className="header _container">
//         <div className="header _left">
//           <ul>
//             {/* <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li> */}
//             <li>Netflix</li>
//             <li>Home</li>
//             <li>TVShows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>MyList</li>
//             <li>Browse by Languages</li>
//           </ul>
//         </div>
//         <div className="header_right">
//           <ul>
//             {/* <li><SearchIcon /></li>
//          <li><NotificationsNoneIcon /></li>
//          <li><AccountBoxIcon /></li>
//          <li><ArrowDropDownIcon /></li> */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header




import React, { useEffect, useState } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header_outer_container ${show ? "nav_black" : ""}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
        <SearchIcon />
          <NotificationsNoneIcon />
         <AccountBoxIcon />
         <ArrowDropDownIcon />  
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;