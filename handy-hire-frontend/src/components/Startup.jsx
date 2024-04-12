import React, { useContext, useState } from 'react';
import handyimg from '../assets/handyimg.jpg'
import handyicon3 from '../assets/handyicon3.jpg'
import handyicon from '../assets/handyicon.jpg'
import handylogo from '../assets/handylogo.jpg'
import handyicon2 from '../assets/handyicon2.jpg'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/userContex';


function Startup() {
    const [logo, setLogo] = useState(handyicon3);
    const [logo2, setLogo2] = useState(handyicon3);
    const [role, setRole] = useState('');
    const [display, setDisplay] = useState('none');
    const {setUser, user} = useContext(UserContext);
    const navigate = useNavigate()

    const handleClick = () => {
      if(role !== 'business' && role !== 'artisan'){
        setDisplay('block');
        return;
      }
      setUser({role: role});
      navigate('/register')
    }
    

  return (
    <>
     <div className="d-flex signup_page ">
      <img src={handyimg} alt="plumber_img" className="img" />
      <div className="signup_page_form">
        <img
          src={handylogo}
          alt="logo"
          style={{
            width:"200px",
            height:"120px"
          }}
          
        />
        <h3 style={{textAlign: "center"}}>
          Join as an artisan or
          <h4 style={{textAlign: "center", marginTop: "30px"}}>client</h4>
        </h3>

        <div className="signup_page_span">
          <span
            ><img
            src={handyicon}
            alt="icon"
            style={{
              width:"24px",
              height:"24px"
            }}
            />
            <h5>I’m a client, hiring for project</h5>
            <input className="check_box" value='business' type="radio" name='check' />
            <label className='check_box_label' htmlFor="check_box">
            <img
              src={logo}
              alt="icon"
              width="24px"
              height="24px"
              onClick={() => {
                logo === handyicon3 ? setLogo(handyicon2) : setLogo(handyicon3)
                setLogo2(handyicon3)
                setRole('business')
              }
                
            }
            />
            </label>
            
            
          </span>
          <br />
          <span
            ><img
              src={handyicon}
              alt="icon"
              style={{
                width:"24px",
                height:"24px"
              }}
              
            />
            <h5>I’m an artisan, looking for work </h5>
            <input className="check_box" value='artisan' type="radio" name='check' />
            <label className='check_box_label' htmlFor="check_box">
            <img
              src={logo2}
              alt="icon"
              style={{
                width:"24px",
                height:"24px"
              }}
              onClick={() =>{
                logo2 === handyicon3 ? setLogo2(handyicon2) : setLogo2(handyicon3)
                setLogo(handyicon3)
                setRole('artisan')
            }}
            />
            </label>
            
          </span>
          <p style={{marginTop: "20px", color: "red", fontSize: "1rem", display: display}}>Please select a valid role</p>
          <button
          onClick={
            handleClick
          }
          ><a>
            Create Account
            </a></button>
          <h6>Already have an Account?<a ><Link to={'/login'}>Login</Link></a></h6>
        </div>
      </div>
    </div>
    </>
  )
}

export default Startup