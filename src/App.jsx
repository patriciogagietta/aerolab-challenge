import { useState } from 'react'

import Header from './components/Header'
import TitleSection from './components/TitleSection'
import CardSection from './components/CardSection'
import Productos from './components/Productos'
import Footer from './components/Footer'
import Notificacion from './components/Notificacion'

function App() {

  const [puntos, setPuntos] = useState(10000)
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false)
  const [mensajeNotificacion, setMensajeNotificacion] = useState("")
  const [valorNotificacion, setValorNotificacion] = useState("")

  return (
    <div className="container-app">
      <Header puntos={puntos} setPuntos={setPuntos}/>
      <TitleSection />
      <CardSection />
      <div id='products-section'>
        <Productos 
          puntos={puntos} 
          setPuntos={setPuntos} 
          mostrarNotificacion={mostrarNotificacion} 
          setMostrarNotificacion={setMostrarNotificacion}
          mensajeNotificacion={mensajeNotificacion}
          setMensajeNotificacion={setMensajeNotificacion}
          setValorNotificacion={setValorNotificacion}
        />
      </div>
      <Notificacion 
        mensajeNotificacion={mensajeNotificacion} 
        mostrarNotificacion={mostrarNotificacion} 
        setMostrarNotificacion={setMostrarNotificacion}
        valorNotificacion={valorNotificacion}
      />
      <Footer />
    </div>
  )
}

export default App
