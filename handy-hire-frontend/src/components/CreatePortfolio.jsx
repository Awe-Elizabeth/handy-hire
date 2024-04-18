import React, { useContext, useState } from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import pencil from '../assets/pencil.png'
import UserContext from '../context/userContex';


function CreatePortfolio() {
  const {setUser, user} = useContext(UserContext);
  const [image, setImage] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const [about, setAbout] = useState('');
  const [hireDetail, setHireDetails] = useState('');
  const images = []

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const base64 = event.target.result;
      images.push(base64);
    };
    console.log(images)
  };

  const createPortfolioData = {
    title: user.title,
    completionDate: user.date,
    images: images,
    skills: skills,
    about: about,
    hireDetail: hireDetail
  }
  
  return (
    <>
    <span><strong><h2 className="" style={{padding: "2rem 0 0 2rem"}}>Portfolio</h2></strong></span>
    <span className="arrow" style={{justifyContent: "space-between"}}>
      <img src={arrowUp} alt="" style={{width:"20px", height:"20px"}} /></span><br/>
      
      <section className="port_section">
        
        <div className="port_section_div"style={{padding: "2rem 0 0 2rem"}} > 
          <button >Add Portfolio Project</button>
                <h6 className="text">Add Details</h6>
                <h6 className="text">Preview</h6>  
         </div>
    
        
          <div className="port_section_div2">
            <h2 ><strong>Add Details</strong></h2>
            <p className="mt-4">
             <h6 className="p-1">You must add at least one image or a video link to your project</h6>
             <div style={{border:"1px solid black", width: "57%", marginTop: "2rem"}}><input type="file" placeholder="Add project title"
             onChange={handleFileInputChange}
             /></div>
            </p>
            <h5 className="mt-4">Skills</h5>
            <input type="text" name="" id="" className="mt-3" placeholder="Enter skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)} 
            /><br/>
            <h5 className="mt-4">About</h5>
            <textarea name="" id="" cols="70" rows="5" placeholder='Brief Bio about yourself'
            value={about}
            onChange={(e) => setAbout(e.target.value)} 
            ></textarea><br/>
            <h5 className="mt-4">Why you should hire me?</h5>
            <textarea name="" id="" cols="70" rows="5" placeholder='Write the reason why you should be hired'
            value={hireDetail}
            onChange={(e) => setHireDetails(e.target.value)} 
            ></textarea><br/>
           <h5 className="mt-4">Project Description</h5>
           <textarea name="" id="" cols="70" rows="5" placeholder='Describe what you did on the project'
           value={description}
           onChange={(e) => setDescription(e.target.value)} 
           ></textarea><br/>
           <span><button className="btn1">Cancel</button> <button className="btn2">Continue</button></span>
          </div>
    </section>
    </>
    
  )
}

export default CreatePortfolio