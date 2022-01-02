import React from 'react';
import Popup from './Popup';
import { useState } from 'react';
import Check from '../image_resources/check.png';
import Account from '../image_resources/Ellipse 1.png';
import Logo from '../image_resources/Vector.png';
import './css/Info.css';
import Arrow from '../image_resources/Group 1953.png';

function Info() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className='info'>
            {/* <div>
                <h1>React PopUps</h1>
                <br /><br />
                <button onClick={() => setButtonPopup(true)}>Open PopUp</button>
                <br />
           </div>*/}
            <img src={Logo} alt="vector" className="logo" />
            <ul className='nav-bar'>
                <li><a href="#" className='home'>Home</a></li>
                <li><a href="#" className='history'>History</a></li>
                <li><a href="#" className='points'>Points</a></li>
                <li><a href="#" className='account'>Account</a></li>
                <li><img src={Account} alt="ellipse" className="ellipse" /></li>
            </ul>

            <div className='container'>
                <div className='card'>
                    <article className='card-content'>
                        <h2 className='title' >Flight Information</h2>
                        <h3 className='secondary-title'>SpiceJet Airways</h3>
                        <div className='flight-info'>
                            <p>Flight info</p>
                            <div className="place-info">
                                <h7 ><span>Bangalore</span><small>Source</small></h7>
                                <img src={Arrow} alt="Arrow" className='arrow' />
                                <h7 ><span>Chennai</span><small>Destination</small></h7>
                                <p className='duration'>8:00 hrs</p>
                            </div>
                            <div className='date-time'>
                                <h7><span>30th March</span><small>Date</small></h7>
                                <h7><span>7:30 A.M</span><small>Departure Time</small></h7>
                            </div>
                            <div className='Passenger-info'>
                                <h7><span>Aditya K</span><small>Passenger Name</small></h7>
                                <h7><span>ISPC108</span><small>Flight No</small></h7>
                            </div>

                        </div>
                        <div className='class'>
                            <h5>Select Class</h5>
                            <h7><button className='first'>A</button><small>First Class</small></h7>
                            <h7><button className='business'>B</button><small>Business Class</small></h7>
                            <h7><button className='economy'>C</button><small>Economy Class</small></h7>
                        </div>
                        <div className='price-info'>
                            <h7>Rs.3670</h7>
                            <p>Price</p>
                        </div>
                        <div className='footer'>
                            <div className='buttons'>
                                <button className='submit' onClick={() => setButtonPopup(true)}>Book</button>
                                <button className='back'>Back</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img src={Check} alt="Check"></img>

                <h2>Sucess</h2>
                <p >Your booking is confirmed and you've earned</p>
                <h1>32</h1>
                <h5>Points</h5>
            </Popup>




        </div>


    )
}

export default Info;
