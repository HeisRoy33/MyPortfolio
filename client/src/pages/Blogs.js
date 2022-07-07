import React from 'react';
import "../styles/Blogs.css";

import blogs1 from '../assets/blogs.png';
import { BsArrowRight } from "react-icons/bs";


const Blogs = () => {
  return (
    <>
      <div className="blogs" id='blogs'>
        <div className="blogs_content">
          <h1 className="title">Blogs</h1>
        </div> 
        <div className="blogs_details">  
          <div className="blogs-techcontent">
            <div className="blogs-techthree">
              <div className="blogs-techcontent_box">
                <img src={blogs1} alt="blogs1" />
              </div> 
            </div>
          </div>     
          <div className="blogs-names">
            <div className='blogs-box'>
              <div className='blogs-year'>
                <h3>2022</h3>
              </div>
              <div className='blogs-about'>
                <div className='blogs-officedetails'>
                  <div className="blogs_head">
                    <h3><a href="https://medium.com/@ItsRoy69/all-about-hackathons-67260c45394d" style={{textDecoration: "none", color: '#000000'}}>All about Hackathons</a></h3>
                    <p>1st May, 2022</p>
                  </div>
                  <div className="blogs_body">
                    <p><a href="https://medium.com/@ItsRoy69/all-about-hackathons-67260c45394d" style={{textDecoration: "none", color: '#000000'}}>In this blog I've talked about all thew prerequisites of Hackathons.</a></p>                    
                  </div>
                </div>   
                <div className='blogs-officedetails'>
                  <div className="blogs_head">
                    <h3><a href="https://hashnode.com/post/how-to-make-ghost-buster-game-in-pygame-cl4715qtf02e782nve8m099i4" style={{textDecoration: "none", color: '#000000'}}>How to make Ghost Buster Game in Pygame?</a></h3>
                    <p>9th June, 2022</p>
                  </div>
                  <div className="blogs_body">
                    <p><a href="https://hashnode.com/post/how-to-make-ghost-buster-game-in-pygame-cl4715qtf02e782nve8m099i4" style={{textDecoration: "none", color: '#000000'}}>I've talked about how to make a game using Pygame.</a></p>
                  </div>
                </div>  
                <div className='blogs-officedetails'>
                 <div className="blogs_head">
                   <h3><a href="https://medium.com/@ItsRoy69/figma-plugins-for-designers-d2e6e2a35962" style={{textDecoration: "none", color: '#000000'}}>Figma Plugins For Designers</a></h3>
                   <p>26th June, 2022</p>
                 </div>
                 <div className="blogs_body">
                    <p><a href="https://medium.com/@ItsRoy69/figma-plugins-for-designers-d2e6e2a35962" style={{textDecoration: "none", color: '#000000'}}>I've listed few figma plugins that a designer can use to make their life easier when designing.</a></p>
                 </div>
               </div>           
              </div>              
            </div>            
          </div>    
        </div>
      </div>
    </>
  )
}

export default Blogs
