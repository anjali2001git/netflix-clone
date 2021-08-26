import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [show,handleShow]=useState(false);
   const history=useHistory();
  const transitionNavbar=()=>{
    if(window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll",transitionNavbar);
    return ()=>window.removeEventListener("scroll",transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
        <img
        onClick={()=>history.push("/")}
        className="nav_logo"
         src="https://cdn.iconscout.com/icon/free/png-512/netflix-282224.png" alt=""/>
        
        <img 
        onClick={()=>history.push("/profile")}
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
        
     </div>
    </div>
  );
}



export default Nav;
