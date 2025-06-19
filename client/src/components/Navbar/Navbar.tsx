import './Navbar.css'
import logo from '../../assets/Logo.png'
import whatsapp from '../../assets/whatsapp-24.png'

interface NavbarProps {
  onHeroClick: () => void;
  onAboutClick: () => void;
  onProjectClick: () => void;
}

const Navbar = ({ onHeroClick, onAboutClick, onProjectClick}: NavbarProps) => {
  return (
    <div>
      <section className="navbar">
        <a onClick={onHeroClick}><img src={logo} alt="" className='logo'/></a>
        <div className='links'>
          <a onClick={onHeroClick}>Home</a>
          <a onClick={onAboutClick}>Sobre</a>
          <a onClick={onProjectClick}>Empreendimento</a>
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
