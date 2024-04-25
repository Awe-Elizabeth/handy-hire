import React from 'react'
import logo from '../assets/handylogo.jpg'
import search from '../assets/search.png'
import arrowRight from '../assets/arrow-right.png'
import message from '../assets/message.png'
import home from '../assets/home.png'
import faq from '../assets/faq.png'
import notification from '../assets/notification.png'
import portfolio from '../assets/portfolio.png'
import listing from '../assets/listing.png'
import setting from '../assets/setting.png'
import support from '../assets/support.png'
import logout from '../assets/logout.png'
import mary from '../assets/mary.png'
import arrowDown from '../assets/arrow-down.png'
import frame from '../assets/Frame1.png'
import frame3 from '../assets/Frame3.png'
import frame4 from '../assets/Frame4.png'
import frame2 from '../assets/frame2.png'
import phone from '../assets/Phone.png'
import { Link } from 'react-router-dom'

function HelpCenter() {
  var firstName = sessionStorage.getItem("firstName");
  var lastName = sessionStorage.getItem("lastName");
  return (
    <>
    <div>
        <header className="header">
        
        <Link to={'/dashboard'}><div className="logos"><img src={logo} alt="logo"width="200px"
                height="120px"/></div></Link>
            
            <div className="header_icons">
            <div className="header_img"> <img src={faq} alt="#" width="50px" height="50px"/> <img src={notification} alt=""  width="50px" height="50px"/> <span><img src={mary} alt=""/> <Link style={{textDecoration: 'none', color: 'black'}} to={'/profile'}><strong>{firstName ? firstName : 'Mary'}  {lastName ? lastName : 'Maxwell'}</strong></Link><img src={arrowDown} alt=""/></span>
            </div>
            </div>
            
        </header>

    </div>

    <section className="sections helpcenter">
        <div className="sections_div helpcenter_nav">
          <Link Link to={'/dashboard'} style={{textDecoration: 'none', color: 'black'}}><div className="side_bar  m-0"><span className="d-flex"><img src={home} alt="" className="img"/><p>Home </p></span><img src={arrowRight} alt="" className="images"/></div></Link>
          <Link to={'/portfoliobrief'} style={{textDecoration: 'none', color: 'black'}}><div className="side_bar"><span><img src={portfolio} alt="" className="img"/><p>Portfolio </p></span><img src={arrowRight} alt="" className="images"/></div></Link>
          <Link to={'/messages'} style={{textDecoration: 'none', color: 'black'}}><div className="side_bar"><span><img src={message} alt="" className="imgs"/><p>Messages</p></span> <img src={arrowRight} alt="" className="images"/></div></Link>

          <Link to={'/transaction'} style={{textDecoration: 'none', color: 'black'}}><div className="side_bar"><span><img src={message} alt="" className="imgs"/><p>Transaction</p></span> <img src={arrowRight} alt="" className="images"/></div></Link>
          
          
          <div className="side_bar"><span><img src={listing} alt="" className="imgs"/><p>Listing</p></span> <img src={arrowRight} alt="" className="images"/></div>
          <Link to={'/settings'} style={{textDecoration: 'none', color: 'black'}}>
          <div className="side_bar" style={{marginTop: "4rem"}}><span><img src={setting} alt="" className="img"/><p>Settings</p></span><img src={arrowRight} alt="" className="images"/></div>
          </Link>
          <div className="side_bar" style={{backgroundColor: "#4862BE"}}><span><img src={support} alt="" className="img"/><p>Help Center </p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={logout} alt="" className="imgs"/><p>Logout </p></span><img src={arrowRight} alt="" className="images"/></div>
        </div>
         
      <div className="Dashboard help">
        <div className="">
            <h4 className="text" style={{textAlign: "center", marginRight: "4rem"}}><strong>Hello, How can we help you?</strong></h4>
            <div className="search_bar mt-4" style={{position: "relative", left: "25%"}}><img src={search} alt="search" width="25px" height="25px" className="p-1"/> <p className="mr-2">Ask a question</p></div>
               <p style={{textAlign: "center", margin:"1rem 0 2rem 0"}}>Or choose a category to quickly find the help that you need</p>
              <div className="Dashboard_header help_header">
               <span className="frame"><img src={frame} alt=""/><p>Getting Started</p></span>
               <span className="frame pt-4"><img src={frame2} alt=""/><p>Pricing</p></span>
               <span className="frame"><img src={frame3} alt=""/><p>Payment and invoice</p></span>
               <span className="frame"><img src={frame4} alt=""/><p>Usage Guide</p></span>
              </div>
           
            <div  className="helpcenter_footer">
                <div>
                    <h5>Frequently Asked Question</h5>
                     <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How do i communicate with clients?
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the first item's accordion body.</strong>  You can modify any of this with custom CSS or overriding our default variables.  <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How do i create Invoice?
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the second item's accordion body.</strong> 
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What is Portfolio?
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collaps
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                  How do i make money with Handyhire?
                              </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong>
                              </div>
                            </div>
                          </div>
                     </div>
                      
                </div>
                 <div className="help_box">
                        <p  style={{textAlign: "center"}}>Still have questions?</p>
                        <p style={{textAlign: "center"}}> If you can ‘t find answers to your questions,
                            you can contact us. We will answer to you shortly</p>

                     <div className="box">
                        <span>
                            <img src={phone} alt=""/>
                            <p>+234 901 000 1000</p>
                            <p>We are always happy to help.</p>
                        </span>
                        <span>
                            <img src={support} alt=""/>
                            <p>Support@helpcentre,com</p>
                            <p>The best way to get answer faster</p>
                        </span>
                     </div>                         
                </div>
            </div>
            
           
            
         </div>
        </div>
    </section>
    </>
  )
}

export default HelpCenter