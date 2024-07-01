import iconGithub from '../assets/iconos/icon-github-footer-desktop.svg';

import '../App.css'
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className='container-footer'>
            <img src={iconGithub} alt="Icon GitHub" />
            <a href="https://github.com/patriciogagietta?tab=repositories" className="parrafo-footer l1-default-text" target="_blank" rel="noopener noreferrer">
            View this repository
            </a>
        </div>
    );
}

export default Footer