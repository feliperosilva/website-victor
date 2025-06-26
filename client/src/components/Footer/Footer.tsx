import './Footer.css'
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-info'>
                <img src={logo} alt="Logo" />
                <div className='contact'>
                    <h2><strong>Contatos</strong></h2>
                    <span><strong>Telefone/Whatsapp: </strong>(21) 97914-3741</span>
                    <span><strong>Email: </strong>example@example.com</span>
                </div>
            </div>
            <div className='footer-form'>
                <h1>Entre em Contato</h1>
                <h3>Preencha o formulário para um atendimento personalizado</h3>
                <form action="" className='contact-form'>
                    <label>Nome*</label>
                    <input name='name' type="text" />
                    <label>Email*</label>
                    <input name='email' type="text" />
                    <label>Telefone*</label>
                    <input name='phone' type="text" />
                    <label>Mensagem*</label>
                    <textarea name="message" id=""></textarea>
                    <div className='privacy-accept'>
                        <span>Ao clicar em enviar, você concorda com as nossas <a href="">Políticas de Privacidade</a>.</span>
                    </div>
                    <button className='submit' type='submit'>Enviar</button>
                </form>
            </div>
        </div>
        <div className='footer-copyright'>
            <span>&copy; First Class Realty - Todos os direitos reservados.</span>
        </div>      
    </div>
  )
}

export default Footer
