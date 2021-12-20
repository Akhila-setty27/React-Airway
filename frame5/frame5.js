import React from 'react';
import 'frame5.css' ;


var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <nav>
            <div className="logo">
              <p>
                <a href="#airway"><img src="/images/Vector (1).svg" alt="Airway" />
                </a></p><a href="#airway">
              </a></div><a href="#airway">
            </a><div className="home"><a href="#airway">
              </a><li><a href="#airway" /><a href="#Home">Home</a></li>
            </div>
            <div className="history">
              <li><a href="#History">History</a></li>
            </div>
            <div className="points">
              <li><a href="#Points">Points</a></li>
            </div>
            <div className="account">
              <li><a href="#Account">Account</a></li>
            </div>
            <div className="photo">
              <a href="#"><img src="/images/Ellipse 1 (1).svg" alt="Photo" />
              </a></div><a href="#"> 
            </a><div className="photo2"><a href="#">
              </a><a href="#"><img src="/images/Ellipse 2 (3).svg " alt="photo2" />
              </a></div><a href="#">
              <div className="rectangle14">
                <img src="images/Rectangle 14 (1).svg" />
              </div>
              <div className="rectangle13">
                <img src="images/Rectangle 13.svg" />
              </div>
              <div className="rectangle61">
                <img src="images/Rectangle 6.svg" />
              </div>
              <div className="rectangle62">
                <img src="images/Rectangle 6.svg" />
              </div>
              <div className="rectangle63">
                <img src="images/Rectangle 6.svg" />
              </div>
              <div className="rectangle71">
                <img src="images/Rectangle 7 (3).svg" />
              </div>
              <div className="rectangle72">
                <img src="images/Rectangle 7 (3).svg" />
              </div>
              <div className="rectangle73">
                <img src="images/Rectangle 7 (3).svg" />
              </div>
              <div className="arrow1">
                <img src="images/Arrow left 1 (1).svg" />
              </div>
              <div className="arrow2">
                <img src="images/Arrow left 1 (1).svg" />
              </div>
              <div className="arrow3">
                <img src="images/Arrow left 1 (1).svg" />
              </div>
              <div className="settings">
                <p><img src="images/Settings.svg" alt="settings" /></p>
              </div>
              <div className="clone">
                <p><img src="images/Clone.svg" /></p>
              </div>
              <div className="user">
                <p><img src="images/User.svg" /></p>
              </div>
            </a><div className="edit_info"><a href="#">
              </a><a href="#">Edit info</a>
            </div>
            <div className="transaction">
              <a href="#">Transaction History</a>
            </div>
            <div className="help">
              <a href="#">Get Help</a>
            </div>   
            <div className="log_out">
              <p>Log out</p>
            </div>   
            <div className="photo1">
              <a href="#"><img src="images/Ellipse 1 (2).svg" />
              </a></div><a href="#">
            </a><div className="photo21"><a href="#">
              </a><a href="#"><img src="images/Ellipse 2 (4).svg" />
              </a></div><a href="#"> 
            </a><div className="Name"><a href="#">
              </a><a href="#">John Doe</a>
            </div>
            <div className="Email">
              <a href="#">johndoe@ypp.com</a>
            </div>                          
            <div className="policy">
              <a href="#policy">Privacy Policy</a>
            </div>
            <div className="terms">
              <a href="#terms">Terms &amp; Conditions</a>
            </div>
            <div className="dot">
              <img scr="/images/Ellipse4.jpg" />
            </div>
            <div className="air">
              <a href="#air">©Airway 2020</a>
            </div>
          </nav>
          <form action="#">
            <div className="con">
              <div className="con1" />
              <header className="head-form">
                <h2>Edit Account</h2>
              </header>
              <br />
              <div className="field-set">
                <div className="input_box">
                  <label htmlFor="full_name">Full name</label><br />
                  <input className="full_name" id="full_name" placeholder="John Doe" type="text" required /><br />
                  <div className="icon1"><img src="images/User.svg" /></div>
                </div>
                <div className="input_box"> 
                  <label htmlFor="email">Email</label><br />
                  <input className="email" id="email" placeholder="johndoe@ypp.com" type="text" required /><br />
                  <div className="icon2"><img src="images/Message open.svg" /></div>
                </div>
                <div className="input_box">
                  <label htmlFor="phone_no">Phone no'</label><br />
                  <input className="phone_no" id="phone_no" placeholder={9535616743} type="text" required /><br />
                  <div className="icon3"><img src="images/Vector.svg" /></div> 
                  <div className="icon4"><img src="images/Vector (2).svg" /></div>
                </div>
                <br />
                <button className="save"> Save </button>
                <button className="cancel"> Cancel </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  });