import React from 'react'
import handylogo from '../assets/handylogo.jpg'
import arrowUp from '../assets/arrow-up.jpg'
import { Link } from 'react-router-dom'
// import '../sass/matching.scss'

function Matching() {
  return (
    <>
    <span
      ><img
        src={handylogo}
        alt="logo"
        style={{
            width:"200px",
            height:"120px"
        }}
        
        className="handylogo p-2"
    /></span>
    <div className="d-flex arrow" style={{justifyContent: "space-between"}}>
      <img src={arrowUp} alt="" style={{width:"20px", height:"20px" }}/>
      <h4>Exit</h4>
    </div>
     <section className="section">
        <div className="matching"><h2><strong>Let the marching begin....</strong></h2></div>
        <article>
          <h6>Give your project brief a title</h6>
          <p>
            Keep it short and simple-this will help us match you with the right
            artisan
          </p>
          <input type="text" name="" id="" placeholder="Title" className="input"/>
          <h6 style={{padding: "1rem 1rem 0 1rem"}}>What are you looking to get done?</h6>
          <p>This will help us get your brief to the right artisan.</p>
          <textarea name="" id="" cols="70" rows="8" placeholder='Describe what you are looking out for'>
     </textarea>
          <h6>What category best fit your project</h6>
          <select id="categories" name="categories">
            <option value="Janitor or Cleaning Services">
              Janitor or Cleaning Services
            </option>
            <option value="Painting">Painting</option>
            <option value="Welding">Welding</option>
            <option value="Automotive Repair">Automotive Repair</option>
            <option value="Construction">Construction</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical Work">Electrical Work</option>
            <option value="Carpentry">Carpentry</option>
            <option value="HVAC (Heating, Ventilation, and Air Conditioning)">
              Installation and maintenance of heating and cooling systems
            </option>
          </select>
          <h6>I’m looking to spend upto....</h6>
          <input type="text" name="" id="" className="input"/>
          <div style={{margin: ".7rem;"}}><input type="checkbox" id="check" name="check" value="check" />
            my budget is flexible</div>
          <h6>Time</h6>
          <p className="p-1">ideal delivery date</p>
          <input type="date" name="" id="" />

          <span>
            <div className="button">
              <Link to={'/dashboard'}>
              <button className="button_one">cancel</button></Link>
              <Link to={'/dashboard'}><button className="button_two">Schedule</button></Link>
              
              </div> 
            </span> 
         </article>
        
    </section>
    </>
  )
}

export default Matching