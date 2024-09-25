import './App.css'
import { Logoscene } from './Logoscene';
import logo1 from "./images/facebookLogo.jpeg"
import logo2 from "./images/tiktok-icon2.jpg"
import logo3 from "./images/Instagram_logo_2016.jpeg"

function NavigationBar() {

    


    return (
    <>
        <nav id='nav'>
        <div id="canvas2">
            <Logoscene />
        </div>
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    About
                </li>
                <li>
                    Lawn Maintenance
                </li>
                <li>
                    Landscaping
                </li>
                <li>
                    Gallery
                </li>
                <li>
                    555-555-5555
                </li>
            </ul>
        </nav>
        <div className="socials">
          <a href="https://www.facebook.com/monarcaoutdoor" target="_blank" rel="noopener noreferrer"><img src={logo1} id="fbLogo"  style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}/></a>
          <a href="https://www.tiktok.com/@monarca.outdoor" target="_blank" rel="noopener noreferrer"><img src={logo2} id="tikTok"  style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}/></a>
          <a href="https://www.instagram.com/monarca.outdoor/" target="_blank" rel="noopener noreferrer"><img src={logo3} id="igLogo"  style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}/></a>
        </div>
    </>
    )
}
export default NavigationBar;