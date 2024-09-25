import './App.css'
import { Logoscene } from './Logoscene';

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
          <a href="https://www.facebook.com/monarcaoutdoor" target="_blank" rel="noopener noreferrer"><img src="facebookLogo.jpeg" id="fbLogo"  style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}/></a>
          <a href="https://www.tiktok.com/@monarca.outdoor" target="_blank" rel="noopener noreferrer"><img src="tiktok-icon2.jpg" id="tikTok"  style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}/></a>
          <a href="https://www.instagram.com/monarca.outdoor/" target="_blank" rel="noopener noreferrer"><img src="Instagram_logo_2016.jpeg" id="igLogo"  style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}/></a>
        </div>
    </>
    )
}
export default NavigationBar;