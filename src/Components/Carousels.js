
import img1 from '../image_resources/img1.png'
import imageOne from '../image_resources/imageOne.png'
import imageTwo from '../image_resources/imageTwo.png'
import one from '../image_resources/one.png'
import img2 from '../image_resources/img2.png'
import './css/Carousels.css'


export default function Carousels() {
    return (
        <div>

            <div>
                <div className='body'>
                    <img src={img1} alt="airplane" className="carousel-img1" />
                    <img src={img2} alt="luggage" className="carousel-img2" />
                    <input type="radio" name="position" />
                    <input type="radio" name="position" defaultChecked />
                    <input type="radio" name="position" />
                    <main id="carousel">
                        <div class="item">
                            <img src={imageOne} alt="Scene 1" />
                            <h5 className="mb-0 text-center"><b>Faster & Better</b></h5>
                            <p className="text-center p-4">Book Flights to your dream travel destination at the comfort of your home</p>
                        </div>
                        <div class="item">
                            <img src={imageTwo} alt="Scene 2" />
                            <h5 className="mb-0 text-center"><b>A Smart Flight Option</b></h5>
                            <p className="text-center p-4">We care to make your journey amazing</p>
                        </div>
                        <div class="item">
                            <img src={one} alt="Scene 3" />
                            <h5 className="mb-0 text-center"><b>Hassel Free Travel</b></h5>
                            <p className="text-center p-4">Let's make travel tension a thing of the past</p>
                        </div>
                    </main>
                    <div class="link">
                        <ul>
                            <li>
                                <a href="SignUp.js" className="signIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-google">Sign up with Google</i></a>
                            </li>
                            <li>
                                <a href="#" className="guestAc">Or sign in as a Guest</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </div >



    )
}