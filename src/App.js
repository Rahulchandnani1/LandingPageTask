import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import headimg from "./Banner.png";
import headimg2 from "./napa.jpg";
import prev from "./prev.png";
import next from "./next.png";
import next2 from "./next2.png";
import t1 from "./t1.png";
import t2 from "./t2.png";
import t3 from "./t3.png";
import bridgeimg from "./bridgeimg1.png";
import img1 from "./img1.png";
import ladyimg from "./ladyimg.png";
import commaimg from "./commaimg.png";
import arbtn from "./arbtn.png";
import map from "./map.png";
import bigi1 from "./bigi1.png";
import bigi2 from "./bigi2.png";
import im5 from "./im5.png";
import bigi3 from "./bigi3.png";
import im1 from "./im1.png";
import im2 from "./im2.png";
import im3 from "./im3.png";
import im4 from "./im4.png";
import logo1 from "./logo.png";
import newim from "./napa.jpg";
import link from "./link.png";
import face from "./face.png";
import insta from "./insta.png";
import arr from "./arr.png"
import { useState } from 'react';
function App() {
  const [imgc,setimgc]=useState("header");
  const [imgc1,setimgc1]=useState(img1);

  const [text1,settext1]=useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.");
  return (
    <div className="App">
      <div className={imgc}>
     <Navbar />
     {/* <div className='imgcarousel'>
      <img className='headimg' src={imgc}/>
     
     </div> */}
     <div className='textdiv'>
        <p className='t1'>Home / Why work with us</p>
        <p className='t2'>
        Headline #1
        </p>
        <p className='t3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='btndiv'>
      <button onClick={()=>{imgc=="header"?setimgc("header2"):setimgc("header")}} ><img src={prev}/></button>
      <button onClick={()=>{imgc=="header2"?setimgc("header"):setimgc("header2")}}><img src={next}/></button>
      </div>
      </div>
     <div className='tabdiv'>
      <div className='textdiv2'>
        <p className='ntab'>01</p>
        <div>
          <p>We stay connected</p>
          <button><img src={next2}/></button>
        </div>
      </div>
      <div className='textdiv2'>
        <p className='ntab1'>02</p>
        <div>
          <p>We believe in diversity & inclusion</p>
          <button><img src={next2}/></button>
        </div>
      </div>
      <div className='textdiv2'>
        <p className='ntab2'>03</p>
        <div>
          <p>We celebrate success</p>
          <button><img src={next2}/></button>
        </div>
      </div>
     </div>

     <div className='sdiv'>
      <div className='tdiv2'>
       <p className='st1'>We <span className='slay'>slay connected</span>
       </p>

       <p className='t1'><img src={t1}/><span>Quarterly Business Updates</span></p>
       <p className='t2'>We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.</p>
      <p className='t3'><img src={t2}/><span>Industry Events & Networking</span></p>
      <p className='t4'><img src={t3}/><span>Associations Memberships</span></p>
      </div>
      <div className='imdiv2'><img src={imgc1}/>
      <div className='btndiv2'>
      <button onClick={()=>{setimgc1(img1)}} ><img src={prev}/></button>
      <button onClick={()=>{setimgc1(newim)}}><img src={next}/></button>
      </div>
      </div>
     </div>
     <div className='thdiv'>
      <div className='thtextdiv'>
      <div className='thtext'>We believe in <span>diversity & inclusion</span></div>
      <div className='thtext2'>At CaSE we do not just accept difference — we celebrate it, we support it, and we thrive on it for the benefit of our employees, our services, our industry and our community. We are proud to be an equal opportunity
employer. Guided by our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them.<br/>
<br/>
Our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them Our Commitment to reinventing the standard. With more than 20 nationalities represented in our global workforce, we firmly believe that our ability to deliver high-quality results is fueled by our active efforts to embed diversity and inclusion. We recognise, respect, and strive to create an environment where employees can excel and feel a true sense of belonging. 
<br/>
<br/>
<span>Some of our strategic initiatives include:</span></div>
</div>
<div className='briddiv'><img src={bridgeimg}/></div>
     </div>

<div className='bigimgdiv2'>
  <div className='topdiv'>
<div className='bim'>
  <div className='imonly'>
    <img className='im1' src={im1}/>
    <img className="im2"src={im2}/>
  </div>
  <div className='imtext'>
    <img className='im3' src={im3}/>
    <div>
      <p className='t1'>We celebrate <span>success</span></p>
      <p className='t2'>At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
celebrating these moments because they underscore the commitment and effort put into each project.
</p>
<p className='t2'>Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.</p>

    </div>
  </div>
</div>
<div className='im25'>
  <img src={im4}/>
</div>
 </div>
 <img  className="im5"src={im5}/>
</div>
<div className='bigimgdiv'>
  <div className='bigd1'>
   <div className='bigt'>
    <p>Employee <span className='bigsp'>Appreciation Program</span></p>
  
    <p className='bigsp1'>
    <span>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club
and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our
company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and
recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is
celebrated with the grandeur it deserves
</span>
    </p>
    </div>
    <img src={bigi3}/>

  </div>
  <div className='bigd2'>
    <img className='bigi3' src={bigi1}/>
    <img className="bigi4"src={bigi2}/>
  </div>
</div>
     <div className='sldiv'>
<div className='slimgdiv'><img src={ladyimg}/></div>
<div className='sltext'>
<img className='commaimg' src={commaimg}/>
<p className='t1'>{text1}
<br/>
<br/>
Title 
<br/>
Name
<br/>
<br/></p>

<p className='t2'><img src={arbtn}/><span>Read my story</span></p>
<div className='btndiv1'>
      <button onClick={()=>{settext1("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.")}} ><img src={prev}/></button>
      <button onClick={()=>{settext1(" Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. imperdiet.")}}><img src={next}/></button>
      </div>
</div>
     </div>
     <div className='lastdiv'>
      <div className='lasttext'>
<p>As a <span className='sp1'>global business</span>, we encourage you to contact us no matter where you are located in the world.
<br/>

<br/><span className='sp2'>
Browse our job opportunities across the globe.</span>

<span className='sp3'>Open Roles <div className='arrimg'><img src={arr}/></div></span>
</p>
      </div>
     <div className='lastimg'>
      <img src={map}/>
     </div>
     </div>
<div className='footer1'>
<div className='logodiv'>
<img src={logo1}/>
<div className='socialicons'>
  <img src={insta}/>
  <img src={face}/>
  <img src={link}/>
</div>
</div>
<div className='f1div1'>
  <p>Expertise</p>
<p className='dtext'>Design</p>
<p>Specialist Expertise</p>
<p>Commercial Advice</p>
<p>Traffic & Transport</p>
</div>
<div className='f1div2'>

<div className='f1div3'>
  <p className='p1'>Sectors</p>
<p className='dtext'>Road</p>
<p>Tunners</p>
<p>Bridge</p>
<p>others</p>
</div>
<div className='f1div3'>
  <p className='p1'>Our Business</p>

<p>Work With Us</p>
<p>Projects</p>
<p>News</p>
</div>
<div className='f1div3'>
  <p className='p1'>Our capabilities</p>

<p>Engineers</p>
<p>Contact</p>

</div>
</div>

</div>
     <div className='footer2'>
<div className='leftpart'>2021 Case International. All right reserved.</div>
<div className='rightpart'>
  <p>Terms & Condition</p>
  <p>Privacy Policy</p>
</div>
     </div>
    </div>
  );
}

export default App;
