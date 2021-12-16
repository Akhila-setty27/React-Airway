import React from 'react';
import Accordion from './Accordion';
import techSupport from '../image_resources/techi.png';
import './css/FAQ.css';
import Account from '../image_resources/Ellipse 1.png';
import Logo from '../image_resources/Vector.png';

const App = () => {
    const accordionData = [
        {
            title: 'What is cake',
            content: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. '
        },
        {
            title: 'Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de ',
            content: `Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. `
        },
        {
            title: 'más o menos normal de las letras',
            content: `Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. `
        },
        {
            title: 'Muchas versiones han evolucionado a través',
            content: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. '
        },
        {
            title: 'usar textos como por ',
            content: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. '
        },
        {
            title: 'sino que tambien ingresó ',
            content: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. '
        },
        {
            title: 'Lorem Ipsum ha sido el texto de relleno estándar ',
            content: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. '
        },
        {
            title: 'con el contenido del texto de',
            content: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. '
        }
    ];

    return (
        <div>
            <img src={Logo} alt="vector" className="logo" />
            <div className="navbar">
                <ul>

                    <li><a href="#Home" className="home">Home</a></li>


                    <li><a href="#History" className="history">History</a></li>


                    <li><a href="#Points" className="points">Points</a></li>


                    <li><a href="#Account" className="account">Account</a></li>
                    <li><img src={Account} alt="ellipse" className="ellipse" /></li>

                </ul>
            </div>
            <div>
                <div className="image">
                    <img src={techSupport} alt="techi" className="techi" />
                </div>
                <div className="text">
                    <p>Have something on your mind?</p>
                    <p>Contact us on <a href="#" className="link">Support@airway.com</a></p>
                </div>
                <div className="faq">
                    <h1>Frequently
                        Asked Questions
                    </h1>

                    <div className="accordion">
                        {accordionData.map(({ title, content }) => (
                            <Accordion title={title} content={content} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
