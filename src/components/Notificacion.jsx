import { useEffect } from 'react'

import '../App.css'
import '../css/Notificacion.css'

import iconRedeemedDesktop from '../assets/iconos/icon-redeemed-desktop.svg';
import iconCloseNotification from '../assets/iconos/icon-close-notification.svg';
import iconNotificationErrorDesktop from '../assets/iconos/icon-notification-error--desktop.svg';

const Notificacion = ({ mensajeNotificacion, mostrarNotificacion, setMostrarNotificacion, valorNotificacion }) => {

    useEffect(() => {
        if (mostrarNotificacion) {
            const timer = setTimeout(() => {
                setMostrarNotificacion(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [mostrarNotificacion]);

    const handleCloseNotification = () => {
        setMostrarNotificacion(false)
    }

    return (
        <div className={`notificacion-container ${valorNotificacion === 'correcto' ? 'notificacion-container-successfully' : 'notificacion-container-error'} ${mostrarNotificacion ? 'notificacion-activa' : ''}`}>
            <div className='notificacion-left'>
                <img src={`${valorNotificacion === "correcto" ? iconRedeemedDesktop : iconNotificationErrorDesktop}`} alt="Icon Reedem Successfully" />
                <p className='parrafo-notificacion'>{mensajeNotificacion}</p>
            </div>
            <div className='cursor-active'>
                <img className='icon-close-notificacion' onClick={handleCloseNotification} src={iconCloseNotification} alt="Icon Close Notification" />
            </div>
        </div>
    )
}

export default Notificacion