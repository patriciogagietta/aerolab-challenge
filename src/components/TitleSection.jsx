import imageTitle from '../assets/images/title-section-desktop.svg';
import iconButton from '../assets/iconos/icon-section-title-button.svg';

import '../App.css'
import '../css/Title-section.css'

const TitleSection = () => {

    return (
        <div className='section-title-container'>
            <div className='container-left-section'>
                <h1 className='h1-title'>
                    <span className='l1-all-caps-text span-1'>explore the</span>
                    <span className='l1-default-title color-brand-default '>tech</span>
                    <span className='l1-default-title span-3'>zone</span>
                    <span className='l1-default-text span-4'>
                        Here you’ll be able to exchange all of your hard-earned <br />
                        Aeropoints and exchange them for cool tech.
                    </span>
                </h1>

                <a href='#products-section' className='button-all-products'>
                    <p className='button-all-products-p l1-default-text'>VIEW ALL PRODUCTS</p>
                    <img src={iconButton} alt="Icono flecha" />
                </a>
            </div>

            <div className='container-image'>
                <div className='ilustration-bg'></div>
                <img src={imageTitle} className='img-title' alt="Image Title" />
            </div>
        </div>
    )
}

export default TitleSection