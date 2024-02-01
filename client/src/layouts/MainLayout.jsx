// import React from "react";
// import Proptypes from "prop-types";

// const MainLayout = ({ children}) => {
//   return (
//     <React.Fragment>
     
//       {children}
      
//     </React.Fragment>
//   );
// };

// export default MainLayout;

// MainLayout.propTypes = {
//   children: Proptypes.node,
// };

import {useState} from "react";
import Proptypes from "prop-types";
import Navbar2 from "../pages/Navbar2/Navbar2";
import Search from "../Components/Search/Search";

const MainLayout = ({ children}) => {
  const [isSearchShow, setIsSearchShow] = useState(false);

  return (
    
      
      <div className="main-layout">

<Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
<Navbar2 setIsSearchShow={setIsSearchShow} />
{children}
</div>
    
   
  
      
      
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};