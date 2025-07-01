import './Navbar.css'
import logo from '../../assets/Logo.png'
import whatsapp from '../../assets/whatsapp-24.png'

interface NavbarProps {
  onHeroClick: () => void;
  onAboutClick: () => void;
  onProjectClick: () => void;
  onFooterClick: () => void;
}

const Navbar = ({ onHeroClick, onAboutClick, onProjectClick, onFooterClick}: NavbarProps) => {
  
  const phoneNumber = '5521969773443'
  const message = 'Olá! Gostaria de mais informações sobre o projeto Green Park!'

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return (
    <div>
      <section className="navbar">
        <a onClick={onHeroClick}><img src={logo} alt="" className='logo'/></a>
        <button className='burger-menu'>&#9776;</button>
        <div className='links'>
          <a onClick={onHeroClick}>Home</a>
          <a onClick={onAboutClick}>Sobre</a>
          <a onClick={onProjectClick}>Empreendimento</a>
          <a onClick={onFooterClick}>Contato</a>
        </div>
        <div className='nav_buttons'>
          <button className='whatsapp' onClick={handleClick}>Atendimento Exclusivo <img src={whatsapp} alt="" /></button>
        </div>
      </section>      
    </div>
  )
}

export default Navbar
