import '../App.css'
import '../css/ModalAddPoints.css'

import iconCardModal from '../assets/iconos/icon-card-modal.svg';
import iconModalAddPoints from '../assets/iconos/icon-modal-add-points.svg';
import { useState } from 'react';

const ModalAddPoints = ({ modalIsOpen, puntos, setPuntos }) => {

    if (!modalIsOpen) return null;

    const [puntosAñadir,setPuntosAñadir] = useState(0)

    const handlePuntosAñadir = (puntosAñadirParametro) => {
        setPuntosAñadir(puntosAñadirParametro)
    }

    const handleAddPoints = () => {
        setPuntos(puntos + puntosAñadir)
    }

    return(
        <div className="container-modal">
            <div className='content-modal'>
                <div className='modal-top'>
                    <p className='parrafo-add-balance l1-default-text'>Add Balance</p>
                </div>

                <div className='modal-bottom'>
                    <div className='card-credit-container'>
                        <div className='card-credit-top'>
                            <p className='parrafo-card-credit l1-default-text'>Aerocard</p>
                            <img src={iconCardModal} alt="Icon Card Points" />
                        </div>

                        <div className='card-credit-buttom'>
                            <p className='parrafo-card-credit l2-default-text'>John Kite</p>
                            <p className='parrafo-card-credit l2-default-text'>07/25</p>
                        </div>
                    </div>

                    <div className='container-buttons-modal'>
                        <div className='container-buttons-points'>
                            <button
                                className={`button-points-modal l1-default-text ${puntosAñadir === 1000 ? "button-points-modal-selected" : ""}`}
                                onClick={() => handlePuntosAñadir(1000)}
                            >
                                <p className={`${puntosAñadir === 1000 ? "parrafo-button-add-points" : "color-brand-default"}`}>1000</p>
                            </button>
                            <button
                                className={`button-points-modal l1-default-text ${puntosAñadir === 5000 ? "button-points-modal-selected" : ""}`}
                                onClick={() => handlePuntosAñadir(5000)}
                            >
                                <p className={`${puntosAñadir === 5000 ? "parrafo-button-add-points" : "color-brand-default"}`}>5000</p>
                            </button>
                            <button
                                className={`button-points-modal l1-default-text ${puntosAñadir === 7500 ? "button-points-modal-selected" : ""}`}
                                onClick={() => handlePuntosAñadir(7500)}
                            >
                                <p className={`${puntosAñadir === 7500 ? "parrafo-button-add-points" : "color-brand-default"}`}>7500</p>
                            </button>
                        </div>

                        <button className='button-add-points l1-default-text' onClick={() => handleAddPoints(puntosAñadir)}>
                            <img src={iconModalAddPoints} alt="Icon Add Points Button" />
                            Add Points
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddPoints