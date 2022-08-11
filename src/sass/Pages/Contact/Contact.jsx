import React from 'react';
import './css/all.css'
import './css/css.css'
import './css/style.css'
import img1 from './images/cover-3.png'
import img2 from './images/cover-2 (1).png'
import img3 from './images/google-play.png'
import img4 from './images/cover-1-1024x773.png'
import img5 from './images/app-store.png'
import img6 from './images/iknowledge.png'

const Contact = () => {
    return (
       <div id="warpper">
  
  <div id="contact">
    <div id="header-contact">
      <div className="text-head">
        <div className="item">
          <span>PLATFORM EDUCATION</span>
        </div><br />
        <div className="us">
          <h1 className="font-size">
            <span className="one">CONTACT</span>
            <span className="two">US</span>
          </h1>
        </div>
        <div className="home">
          <p>
            <a href>Home</a>/Contact
          </p>
        </div>
      </div>
      <div className="plane-star-img">
        <div className="logo-cover-3">
          <img src={img1} alt />
        </div>
        <div className="logo-cover-2">
          <img src={img2} alt />
        </div>
      </div>
    </div>
  
    <div id="wp-content-contact">
      <div className="h2">
        <h2 className="font-size">
          <p>
            <span className="one-h2">Talk</span>
            <span className="two-h2">With Us.</span>
          </p>
        </h2>
      </div>
      <div id="content-contact">
        <div className="left-content-contact">
          <h4>CONTACT</h4>
          <form action className="form-css">
            <label className="color-white" htmlFor="username"><span className="color-white">Your
                Name</span></label><br />
            <input className="margin-buttom" type="text" name="username" id="username" placeholder="user name" /><br />
            <label className="color-white" htmlFor="Email"><span className="color-white">Your
                Email</span></label><br />
            <input className="margin-buttom" type="email" name="email" id="email" placeholder="enter email" /><br />
            <label className="color-white" htmlFor="post-content" /><span className="color-white">your-message</span><br />
            <textarea className="margin-buttom" name="post-content" id="post-content" cols={30} rows={10} defaultValue={""} />
          </form>
          <div className="let-go margin-buttom">
            <span>I am ready to get in</span>
          </div>
          <div className="term">
            <span className="color-white">TERMS &amp; CONDITIONS</span>
          </div>
        </div>
        <div className="right-content-contact">
          <div className="let-is">
            <h4 className="h4-text">LET'S TALK</h4>
            <p className="p-text">Let’s talk convallis convallis tellus id interdum velit laoreet id donec
              ultrices. Eget
              nunc
              lobortis mattis faucibus commodo nulla facilisi nullam vehicula ipsum consectetur a erat
              nam
              at Convallis convallis tellus id interdum velit laoreet id donec ultrices. Eget nunc
              lobortis mattis faucibus commodo.</p>
          </div>
          <div className="website">
            <h5>Website</h5>
            <p>www.rometheme.net</p>
          </div>
          <div className="phone">
            <h5>Phone / Cell</h5>
            <p>+ (808) 123 4567 8900</p>
          </div>
          <div className="address">
            <h5 className="color-padding-h5">Address / FAX</h5>
            <p>SA. Qelilink St &amp; 88 99Th Axe Pekanbaru</p>
          </div>
          <div className="email">
            <h5>Email</h5>
            <p>@exampleiknowledge.com</p>
          </div>
        </div>
      </div>
    </div>
    <div id="footer-contact">
      <div className="cover-contact">
        <img src={img4} alt />
      </div>
      <div className="update">
        <h2>
          <span>Download</span>
          <span>for get Update</span><br />
          <span>Every New Courses.</span>
        </h2>
      </div>
      <div className="date">
        <h5>Join Event 21 December - 30 December Student Course.</h5>
      </div>
      <div className="logo-contact">
        <img src={img3} alt />
        <img src={img5} alt />
      </div>
    </div>
  </div>
 
</div>

    );
};

export default Contact;