import './Navbar.css'
import logo from '../../assets/Logo.png'
import whatsapp from '../../assets/whatsapp-24.png'

interface NavbarProps {
  onHeroClick: () => void;
  onAboutClick: () => void;
}

const Navbar = ({ onHeroClick, onAboutClick}: NavbarProps) => {
  return (
    <div>
      <section className="navbar">
        <a onClick={onHeroClick}><img src={logo} alt="" className='logo'/></a>
        <div className='links'>
          <a onClick={onAboutClick}>Sobre</a>
          <a href="">Empreendimento</a>
          <a href="">Contato</a>
        </div>
        <div className='nav_buttons'>
          <button className='whatsapp'>Atendimento Exclusivo <img src={whatsapp} alt="" /></button>
        </div>
      </section>      
    </div>
  )
}

export default Navbar
