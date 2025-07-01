import './Footer.css'
import logo from '../../assets/Logo.png'
import { useState } from 'react'
import axios from 'axios'
import { collectMotionValues } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

const Footer = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',    
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

    const [errors, setErrors] = useState<FormErrors>({});

    const inputValidation = (data: FormData) => {
        const newErrors: FormErrors = {}
        if (!data.name.trim()) {
            newErrors.name='Campo obrigatório';
        } else if (data.name.trim().length < 2) {
                newErrors.name='Nome precisa ter 2 ou mais caracteres';
            }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.email.trim()) {
            newErrors.email='Campo obrigatório';
        } else if (!emailRegex.test(data.email.trim())){
            newErrors.email='Email inválido';
        }

        const phoneRegex = /^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/;

        if (!data.phone.trim()) {
            newErrors.phone='Campo obrigatório';
        } else if (!phoneRegex.test(data.phone.trim())){
            newErrors.phone='Telefone inválido';
        }

        if (!data.message.trim()) {
            newErrors.message='Campo obrigatório';
        } else if (data.message.trim().length < 10) {
            newErrors.message='Mensagem precisa ter mais que 10 (dez) caracteres';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name , value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const isValid = inputValidation(formData);
        if (!isValid) {
            setIsSubmitting(false)
            return;
        }

        try {
            await axios.post('https://firstclassrealty-backend.onrender.com/api/contact', formData)
            setMessageType('success')
            setFormMessage('Formulário enviado com sucesso!')
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            })
            setErrors({})         
        } catch(error) {
            setMessageType('error')
            setFormMessage('Erro ao enviar o formulário! Tente novamente!')
        } finally {
            setIsSubmitting(false)
        }
    }

  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-info'>
                <img src={logo} alt="Logo" />
                <div className='contact'>
                    <h2><strong>Contatos</strong></h2>
                    <span><strong>Telefone/Whatsapp: </strong>(21) 969773443</span>
                    <span><strong>Email: </strong>firstclassimoveis00@gmail.com</span>
                </div>
            </div>
            <div className='footer-form'>
                <h1>Entre em Contato</h1>
                <h3>Preencha o formulário para um atendimento personalizado</h3>
                <span className={messageType}>{formMessage}</span>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Nome* {errors.name && <span className='validation_err'>{errors.name}</span>}</label>
                    <input name='name' value={formData.name} id='name' type="text" onChange={handleChange}/>
                    <label htmlFor='email'>Email* {errors.email && <span className='validation_err'>{errors.email}</span>}</label>
                    <input name='email' value={formData.email} id='email' type="text" onChange={handleChange}/>
                    <label htmlFor='phone'>Telefone* {errors.phone && <span className='validation_err'>{errors.phone}</span>}</label>
                    <input name='phone' value={formData.phone} id='phone' type="text" onChange={handleChange}/>
                    <label htmlFor='message'>Mensagem* {errors.message && <span className='validation_err'>{errors.message}</span>}</label>
                    <textarea name="message" value={formData.message} id='message' onChange={handleChange}></textarea>
                    <div className='privacy-accept'>
                        <span>Ao clicar em enviar, você concorda com as nossas <a href="">Políticas de Privacidade</a>.</span>
                    </div>
                    <button className='submit' type='submit' disabled={isSubmitting}>{isSubmitting ? 'Enviando' : 'Enviar'}</button>
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
