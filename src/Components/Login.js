import React from 'react'
import './css/Login.css'
import image1 from '../image_resources/image 1.png'
import image2 from '../image_resources/image 2.png'
import image3 from '../image_resources/image 3.png'
import image4 from '../image_resources/image 4.png'
import image5 from '../image_resources/image 5.png'
import image6 from '../image_resources/image 6.png'
import One from '../image_resources/1.png'
import VectorLogo from '../image_resources/Vector.png'



export default function Login() {
    return (
        <div>
            <div className="register-photo">
                <h2 className="text">The Journey is our home</h2>
                <div className="form-container">
                    <form method="post">
                        <h2 className="text-center">One Last Step.</h2>
                        <h5>Fill these essential details and you're good to go</h5>
                        <div className="form-group"><input className="form-control" type="text" name="name" placeholder="Name" /></div>
                        <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                        <div className="form-group"><input className="form-control" type="tel" name="Phone_no" placeholder="Phone no" /></div>
                        <div className="form-group">
                            <div className="form-check">By clicking the following button you accept the terms and conditions</div>
                        </div>
                        <div className="form-group"><button className="btn btn-success btn-block" type="submit">Let's go</button></div>
                    </form>
                </div>

            </div>
            <div class="image-holder">
                <img src={VectorLogo} alt="logo" className="logo" />
                <img src={One} alt="scene7" className="One" />
                <img src={image6} alt="scene6" className="image6" />
                <img src={image1} alt="scene1" className="image1" />
                <img src={image5} alt="scene5" className="image5" />
                <img src={image4} alt="scene4" className="image4" />
                <img src={image3} alt="scene3" className="image3" />
                <img src={image2} alt="scene2" className="image2" />
            </div>
        </div>

    )
}
