import { useState } from 'react';

import ModalAddPoints from './ModalAddPoints';
import '../App.css'
import '../css/Header.css'

import logo from '../assets/logos/logo-header-desktop.svg';
import iconPoints from '../assets/iconos/icon-points-desktop.svg';
import iconUp from '../assets/iconos/icon-header-up.svg';
import iconDown from '../assets/iconos/icon-header-down.svg';

const Header = ({ puntos, setPuntos }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleOpenModal = (modal) => {
        setModalIsOpen(modal)
    }

    return (
        <div>
            <header className='header'>
                <img src={logo} alt="Logo Aerolab" className='logo-aerolab' />

                <div className='container-button-modal'>
                    <button className='button-points' onClick={() => handleOpenModal(!modalIsOpen)}>
                        <img src={iconPoints} alt="Icono Puntos" />
                        <p className='l1-default-text color-brand-default'> {puntos} </p>
                        <img src={modalIsOpen ? iconUp : iconDown} alt="Icono Puntos" className='icon-up'/>
                    </button>

                    {modalIsOpen && (
                        <ModalAddPoints modalIsOpen={modalIsOpen} puntos={puntos} setPuntos={setPuntos}/>
                    )}
                </div>

            </header>
        </div>
    )
}

export default Header