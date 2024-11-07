import React from 'react';
import {useLocation} from "react-router-dom";
function Tempauthpage(){
    const location = useLocation();
    const email = location.state?.email;
    const splitEmail = email.split("@")[0];
    console.log("authpage",email)
  return  (
        <div>
            <h1>SUCCESSFUL LOGIN </h1>
            <h2>WELCOME {splitEmail}</h2>
        </div>
    )
}
export default Tempauthpage;