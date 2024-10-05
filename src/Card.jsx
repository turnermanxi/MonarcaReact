import myImage from './images/LandScape.jpg';
import myImage2 from './images/backyard.jpg';
import myIcon from './images/bush1.png';
import myIcon2 from './images/lawn-mower.png';
import myIcon3 from './images/grass1.png';
import myIcon4 from './images/house.png';
import myIcon5 from './images/flower.png';
import myIcon6 from './images/sod.png';
import myIcon7 from './images/mulch.png';
import myIcon8 from './images/lighting.png';
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
            <div className='topCard'>
            <h2>What we do</h2>
            <p>Lorem lorem lorem lorem stuff more lorem
            Lorem lorem lorem lorem stuff more lorem 
            Lorem lorem lorem lorem stuff more lorem 
            Lorem lorem lorem lorem stuff more lorem 
            Lorem lorem lorem lorem stuff more lorem 
            Lorem lorem lorem lorem stuff more lorem 
            Lorem lorem lorem lorem stuff more lorem 
            Lorem lorem lorem lorem stuff more lorem 
            Lorem lorem lorem lorem stuff more lorem 
            Lorem lorem lorem lorem stuff more lorem 
             </p>
        </div>
                <div id='card1'>
                    <img src={myImage2} alt="Lawn Maintenance" id="image2"/>
                    <h2>Lawn Maintenance</h2>
                    <ul style={{ listStyleType: 'none' }}>
                        <div id="cardList">
                            <li><img src={myIcon} alt="Monarca bush icon" 
                            className='icon' />Bush Trimming</li>
                            <li><img src={myIcon2} alt="Monarca mower icon" 
                            className='icon' />One Time Mows</li>
                            <li><img src={myIcon3} alt="Monarca grass icon" 
                            className='icon' />Overgrown Properties</li>
                            <li><img src={myIcon4} alt="Monarca grass icon" 
                            className='icon' />Real Estate Showings</li>
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
                            <li><img src={myIcon5} alt="Monarca flowerbed icon" 
                            className='icon' />Flower Beds</li>
                            <li><img src={myIcon6} alt="Monarca resod icon" 
                            className='icon' />Resodding</li>
                            <li><img src={myIcon7} alt="Monarca mulch icon" 
                            className='icon' />Mulch</li>
                            <li><img src={myIcon8} alt="Monarca landscape icon" 
                            className='icon' />Landscape Lighting</li>
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