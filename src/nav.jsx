import './App.css'
import { Logoscene } from './Logoscene';

function NavigationBar() {

    


    return (
    <>
    <body>
        <nav id='nav'>
        <div id="canvas2">
            <Logoscene />
        </div>
            <ul>
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
    </body>
    </>
    )
}
export default NavigationBar;