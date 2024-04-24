import React from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import search from '../assets/search.jpg'
import email from '../assets/Email.png'
import filter from '../assets/Filter.png'
import picture from '../assets/picture.png'


function Text() {
  return (
    <>
    <span><strong><h2 className="" style={{padding: "2rem 0 0 2rem;"}}>Messages</h2></strong></span>
    <span className="arrow d-flex" style={{justifyContent: "space-between", width: "85%"}} >
      <span className="d-flex">
        <img src={{arrowUp}} alt="" style={{width:"20px", height:"20px"}} /> 
        <div className="search_bar" style={{marginLeft: "1rem"}}>  <img src={{search}} alt="search"style={{width:"25px", height:"25px"}} className="p-1"/> <p className="mr-2">Type to search</p></div> <img src={filter} alt=""  style="width: 40px; height: 40px;"/>
        </span>
      
      </span>
      
      
      <section style={{display: "flex", width: "100%"}}>
        <div style={{width: "50%", marginLeft: "2rem"}}>
            <span className="d-flex mt-4"><img src={email} alt=""  width="17px" height="15px" className="mt-2"/><h4 style="color: blue; margin-left: 2rem;">Unread</h4></span>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <img src={picture} alt=""/>
            </div>
            <h4 style={{textAlign: "center"}} className="mt-5"><strong>No Conversations </strong></h4>

            <h6 style={{width: "400px", textAlign: "center", marginLeft: "7rem"}} className="mt-5"> Try using a different filter or seatch for 
                the conversation you are looking for
            </h6>
        </div>
       <div className="landingpage" style={{width: "50%"}}>
           <div>  
            <h4 style={{width: "400px", textAlign: "center", marginRight: "5rem"}}><strong>Welcome to Messages</strong></h4>
            <h6 style={{width: "400px", textAlign: "center", marginRight: "5rem"}} className="mt-5"> Once you connect with a client , 
                you will be able to chat and collaborate here
            </h6>
            <button style={{width:"300px", textAlign: "center", marginLeft: "3rem"}}>Search for Jobs</button>
           </div>
       </div>
      
    </section>
    </>
  )
}

export default Text