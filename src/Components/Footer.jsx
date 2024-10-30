import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import '../Styles/movieSearch.css'
import '../Styles/index.css'

export const Footer = () => {
    return (
        <footer className='barra-footer'>
            <div className="contenedor-footer">
                <div className="content-foo">
                    <h4>Télefono  <FaPhone /></h4><i className='bx bx-phone' ></i>
                    <p>3207708308</p>
                    <p>3173017151</p>
                </div>
                <div className="content-foo">
                    <h4>Instagram  <AiFillInstagram/></h4><i className='bx bxl-instagram'></i>
                    <p>NMpelis.1712</p>
                </div>
                <div className="content-foo">
                    <h4>Ubicación  <FaLocationDot/></h4><i className='bx bx-current-location'></i>
                    <p>Bello</p>
                </div>
            </div>
            <h2 className="titulo-final">&copy; Nicoll Giraldo - Miguel Chica | NM Pelis</h2>
        </footer>
    )
}
