import myImage from './images/LandScape.jpg';
import myImage2 from './images/LawnM.jpg';
import ModalS from './modal.jsx';
import React, { useState } from 'react';

function Card() {
    const [isLawnMaintenanceModalOpen, setLawnMaintenanceModalOpen] = useState(false);
    const [isLawnCareModalOpen, setLawnCareModalOpen] = useState(false);

    const toggleLawnMaintenanceModal = () => {
        setLawnMaintenanceModalOpen(!isLawnMaintenanceModalOpen);
    };

    const toggleLawnCareModal = () => {
        setLawnCareModalOpen(!isLawnCareModalOpen);
    };

    return (
        <>
            <div className="cards">
                <div id='card1'>
                    <img src={myImage2} alt="Lawn Maintenance" id="image2"/>
                    <h2>Lawn Maintenance</h2>
                    <ul style={{ listStyleType: 'none' }}>
                        <div id="cardList">
                            <li>Bush Trimming</li>
                            <li>One Time Mows</li>
                            <li>Overgrown Properties</li>
                            <li>Real Estate Showings</li>
                        </div>
                    </ul>
                    <div className="container mt-5">
                        <button onClick={toggleLawnMaintenanceModal}>
                            Get Quote
                        </button>
                        <ModalS isOpen={isLawnMaintenanceModalOpen} onClose={toggleLawnMaintenanceModal} />
                    </div>
                </div>
                
                <div id='card2'>
                    <img src={myImage} alt="Monarca Lawn Care" id="image1" />
                    <h2>Lawn Care</h2>
                    <ul style={{ listStyleType: 'none' }}>
                        <div id="cardList">
                            <li>Flower Beds</li>
                            <li>Resodding</li>
                            <li>Mulch</li>
                            <li>Landscape Lighting</li>
                        </div>
                    </ul>
                    <div className="container mt-5">
                        <button onClick={toggleLawnCareModal}>
                            Get Quote
                        </button>
                        <ModalS isOpen={isLawnCareModalOpen} onClose={toggleLawnCareModal} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;