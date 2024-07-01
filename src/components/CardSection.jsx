import imageBrowseDesktop from '../assets/images/image-browse-desktop.svg';
import imageChooseDesktop from '../assets/images/image-choose-desktop.svg';
import imageEnjoyDesktop from '../assets/images/image-enjoy-desktop.svg';

import iconBrowseDesktop from '../assets/iconos/icon-card-browse.svg';
import iconChooseDesktop from '../assets/iconos/icon-card-choose.svg';
import iconEnjoyDesktop from '../assets/iconos/icon-card-enjoy.svg';

import '../App.css'
import '../css/CardSection.css'

const CardSection = () => {

    return(
        <section className='container-section-cards'>
            <div className='walkthrough-cards-bg'> </div>
            <div className='container-cards'>
                <div className='card'>
                    <div className='card-bg'>
                        <div className='bg-image-card'>
                            <img src={imageBrowseDesktop} alt="Image Brose information" />
                        </div>
                        <div className='container-buttom-card'>
                            <div className='title-icon-buttom-card'>
                                <div className='icon-wrapper-card'>
                                    <img src={iconBrowseDesktop} alt="Icon Browse" />
                                </div>
                                <h3 className='color-brand-default l3-default-title'>1-browse</h3>
                            </div>
                            <p className='l1-default-text parrafo-card'>Browse our tech catalog with more than 20 top tech products</p>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-bg'>
                        <div className='bg-image-card'>
                            <img src={imageChooseDesktop} alt="Image Choose information" />
                        </div>
                        <div className='container-buttom-card'>
                            <div className='title-icon-buttom-card'>
                                <div className='icon-wrapper-card'>
                                    <img src={iconChooseDesktop} alt="Icon Choose" />
                                </div>
                                <h3 className='color-brand-default l3-default-title'>2-choose</h3>
                            </div>
                            <p className='l1-default-text parrafo-card'>Exchange your hard-earned AeroPoints for a cool tech item</p>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-bg'>
                        <div className='bg-image-card'>
                            <img src={imageEnjoyDesktop} alt="Image Enjoy information" />
                        </div>
                        <div className='container-buttom-card'>
                            <div className='title-icon-buttom-card'>
                                <div className='icon-wrapper-card'>
                                    <img src={iconEnjoyDesktop} alt="Icon Enjoy" />
                                </div>
                                <h3 className='color-brand-default l3-default-title'>3-enjoy</h3>
                            </div>
                            <p className='l1-default-text parrafo-card'>All done We’ll take care of delivery of your tech item!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardSection