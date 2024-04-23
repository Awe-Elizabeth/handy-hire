import React from 'react'
import logo from '../assets/handylogo.jpg'
import search from '../assets/search.png'
import arrowRight from '../assets/arrow-right.png'
import message from '../assets/message.png'
import home from '../assets/home.png'
import portfolio from '../assets/portfolio.png'
import listing from '../assets/listing.png'
import setting from '../assets/setting.png'
import support from '../assets/support.png'
import logout from '../assets/logout.png'



function Jobs() {
  return (
    <>
     <div>
        <header className="header">
        
            <div className="logos"><img src={logo} alt="logo" style={{width:"200px",
                height:"120px"}}/></div>
            <div className="header_icons">
                <div className="search_bar" style={{marginRight: "10rem"}}>  <img src={search} alt="search" style={{width:"25px", height:"25px"}} className="p-1"/> <p className="mr-2">What service are you looking for?</p></div>
                <div className="header_img"> <button style={{backgroundColor:"#4862BE", border: "none", borderRadius: "10px", color: "white", padding: "8px"}}>VIEW ALL</button> <button  style={{backgroundColor: "#4862BE",  border: "none", borderRadius: "10px", color: "white", padding: "8px"}}>EXPORT TO CSV</button></div>
           
                </div>
            
        </header>

    </div>

          <section className="sections">
            <div className="sections_div">
                <div className="side_bar  m-0"><span className="d-flex"><img src={home} alt="" className="img"/><p>Home </p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"  style={{backgroundColor: "#4862BE", color: "white"}}><span><img src={portfolio} alt="" className="img"/><p>Users</p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={message} alt="" className="imgs"/><p>Messages</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={message} alt="" className="imgs"/><p>Reports</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={message} alt="" className="imgs"/><p> Transaction</p></span> <img src={arrowRight} alt="" className="images"/></div>
                
                <div className="side_bar"><span><img src={listing} alt="" className="imgs"/><p>Listing</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar" style={{marginTop: "4rem"}}><span><img src={setting} alt="" className="img"/><p>Settings</p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={support} alt="" className="img"/><p>Help Center </p></span><img src={arrowRight} alt="" className="images"/></div>
               
                <div className="side_bar"><span><img src={logout} alt="" className="imgs"/><p>Logout </p></span><img src={arrowRight} alt="" className="images"/></div>
            </div>

            
             
         <div style={{marginLeft:"3rem"}} className="table_div">

             <div className="d-flex job" style={{justifyContent: "space-between", width: "900px"}}>
                <span><h4>40%</h4><h6>Profile Completed</h6></span>
                <span><h4>14,000</h4><h6>Profile Visit</h6></span>
                <span><h4>#700,000</h4><h6>Total Revenue</h6></span>
                <span><h4>8.6</h4><h6>Efficacy Level</h6></span>
             </div>
              <span className="d-flex"> <h5 style={{marginTop: "1.5rem", marginLeft: "3rem"}}><strong>Total Jobs</strong></h5>
              <h5 style={{marginTop: "1.5rem", marginLeft: "3rem"}}><strong>100</strong></h5>
            </span>
            <table style={{marginTop: "2rem"}}>
                <thead>
      
                  <tr>
                    <th> Job ID</th>
                    <th>Job Name</th>
                    <th>Job Description</th>
                    <th>Category</th>
                    <th>Client Name</th>
                    <th>Selected Artisan</th>
                    <th>Status</th>
                    <th>Budget</th>
                  </tr> 
                </thead>
                <tbody>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>
                  <tr>
                    <td> #96AA11</td>
                    <td>Painter</td>
                    <td>Looking for a Painter</td>
                    <td>Interior</td>
                    <td>Igwe Chike</td>
                    <td>Kate . O</td>
                    <td>INDISCUSSSION</td>
                    <td>#50,000</td>
                
                  </tr>

                  
                </tbody>
              </table>
              
         </div>
          
          
        </section>
    </>
  )
}

export default Jobs