import { FloatingWhatsApp } from 'react-floating-whatsapp'

import Navbar from './Navbar'
import styles from './AboutUs.module.css'
import logo from '/logo.svg'
import logoColor from '/logo_color.svg'

export default function AboutUs() {
  return (
    <>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <p>Somos un estudio que busca crear experiencias interactivas, combinando el arte tradicional con la tecnología. 
        Para la tradicional noche de rábanos, juntamos un equipo interdisciplinario para crear una obra que honra los 126 años de este evento.</p>
        <a href={'https://doggointeractive.com'} target="_blank" rel='noreferrer'>Visita nuestra página web</a>
        <p> Escribenos a: contact@doggointeractive.com</p>
        <p>O en Whatsapp:</p>
      </div>
      <FloatingWhatsApp phoneNumber={"+529511007363"} accountName='Mau Doggo' avatar={logoColor} chatMessage={'Hola! Deja tu mensaje aqui!'}/>
      <Navbar />
    </>
  )
}
