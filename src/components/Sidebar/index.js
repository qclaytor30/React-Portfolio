import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
               <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#6568AA" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/quincy-claytor/"
                        target="_blank"
                        rel="noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/qclaytor30"
                        target="_blank"
                        rel="noreferrer" >
                        <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar