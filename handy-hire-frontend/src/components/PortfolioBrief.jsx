import React, { useContext, useState } from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import{Link, useNavigate} from 'react-router-dom'
import UserContext from '../context/userContex';



function PortfolioBrief() {
  const {setUser, user} = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [display, setDisplay] = useState('none');
  const navigate = useNavigate();

  const handleClick = () => {
    if(title === '' || date === ''){
      setDisplay('block');
      return;
    }
    setUser({title: title, date: date});
    console.log(title)
    console.log(date)
    navigate('/createportfolio')
  }

  return (
    <>
     <span><strong><h2 className="" style={{padding: "2rem 0 0 2rem"}}>Portfolio</h2></strong></span>
    <span className="arrow" style={{justifyContent: "space-between"}}>
      <img src={arrowUp} alt="" style={{width:"20px", height:"20px"}} /></span><br/>
      
      <section className="port_section">
        
            <div className="port_section_div" style={{padding: "2rem 0 0 2rem"}} > 
             <button >Add Portfolio Project</button>
                <h6 className="text">Add Details</h6>
                <h6 className="text">Preview</h6>  
            </div>
    
        
          <div className="port_section_div2">
            <h2 ><strong>Add portfolio project</strong></h2>
            <p className="mt-4">
             <h5 className="p-1">Portfolio Title</h5>
             <input type="text" placeholder="Add project title"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             />
            </p>
            <h5 className="mt-4">Completion Date</h5>
            <input type="date" name="" id="" className="mt-3"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            /><br/>
             <p style={{ color: "red", fontSize: "1rem", display: display}}>Project title and date are required</p> 
            <span>
              <Link to={'/dashboard'}>
              <button className="btn1">Cancel</button>
              </Link>
             
            <button className="btn2"
            onClick={ handleClick}
            >Continue</button>
          </span>
         
          </div>
        </section>
    </>
  )
}

export default PortfolioBrief