import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <section className="navbar">
        <a href="">This is my logo</a>
        <div className='links'>
          <a href="">Sobre</a>
          <a href="">Empreencimento</a>
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
