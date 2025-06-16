import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div>
      <section className="navbar">
        <a href=""><img src={logo} alt="" className='logo'/></a>
        <div className='links'>
          <a href="">Sobre</a>
          <a href="">Empreendimento</a>
          <a href="">Contato</a>
        </div>
        <div className='nav_buttons'>
          <button>Whatsapp</button>
          <button>PT</button>
          <button>EN</button>
        </div>
      </section>      
    </div>
  )
}

export default Navbar
