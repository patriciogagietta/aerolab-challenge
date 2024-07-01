import iconRightPageActive from '../assets/iconos/icon-right-page.svg';
import iconLeftPageDisable from '../assets/iconos/icon-left-page.svg';
import iconRightPageDisable from '../assets/iconos/icon-right-page-disable.svg';
import iconLeftPageActive from '../assets/iconos/icon-left-page-active.svg';

import '../App.css'
import '../css/ButtonChangePage.css'

const ButtonChangePage = ({ setCurrentPage, currentPage, totalPages }) => {

    const handleChangePageBack = () => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleChangePageNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }  

    return(
        <div className='buttons-pages'>
            <div className='icon-wrapper-pages cursor-active' onClick={handleChangePageBack}>
                <img
                    src={`${currentPage === 1 ? iconLeftPageDisable : iconLeftPageActive}`}
                    alt="Icon Left Page" 
                />
            </div>
            <p className='l1-default-text parrafo-controls'>Page <span className='color-brand-default '>{currentPage} of {totalPages}</span></p>
            <div className='icon-wrapper-pages cursor-active' onClick={handleChangePageNext}>
                <img 
                    src={`${currentPage === totalPages ? iconRightPageDisable : iconRightPageActive}`}
                    alt="Icon Right Page"
                />
            </div>
        </div>
    );
}

export default ButtonChangePage