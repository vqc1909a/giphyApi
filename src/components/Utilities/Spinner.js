import React from 'react';
import "../../styles/Utilities/Spinner.css";

const Spinner = () => {
 return (
   <div className="wrapper-spinner">
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
   </div>
 );
}
 
export default Spinner;