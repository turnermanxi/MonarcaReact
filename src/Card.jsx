import myImage from './images/LandScape.jpg'
import myImage2 from './images/LawnM.jpg'
import ModalS from './modal.jsx'
import React, { useState } from 'react';


function Card() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
        <div className="cards">
            <div id='card1'>
                <img src={myImage2}></img>
                <h2>Lawn Maintenance</h2>
                <ul style={{ listStyleType: 'none' }}>
                    <div id="cardList">
                        <li>
                            Bush Trimming
                        </li>
                        <li>
                            One Time Mows
                        </li>
                        <li>
                            Overgrown Properties
                        </li>
                        <li>
                            Real Estate Showings
                        </li>
                    </div>
                </ul>
                <div className="container mt-5">
                    <button className="btn btn-primary" onClick={toggleModal}>
                        Get Quote
                    </button>
                    <ModalS isOpen={isModalOpen} onClose={toggleModal} />
                </div>
            </div>
            <div id='card2'>
            <img src={myImage} alt="Monarca Lawn Care Image" id="image1" />
                    <h2>Lawn Care</h2>
                    <ul style={{ listStyleType: 'none' }}>
                        <div id="cardList">
                            <li>
                                Flower Beds
                            </li>
                            <li>
                                Resodding
                            </li>
                            <li>
                                Mulch
                            </li>
                            <li>
                                Landscape Lighting
                            </li>
                        </div>
                    </ul>
                    <button id='quote'>Get Quote</button>
                </div>
        </div>
            </>

        

    );

}

export default Card;