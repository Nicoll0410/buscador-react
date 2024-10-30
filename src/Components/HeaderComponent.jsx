import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

export const HeaderComponent = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Inicio  <FcHome /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/buscador'>Bucador  <FcSearch/></Link>
                    </li>
                </ul>
            </nav>
    )
}
