import './About.css'
import about from '../../assets/about.png'
import { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Deslocamento rápido e eficiente',
    content: 'Aproveite a praticidade de estar a poucos metros do metrô, garantindo mobilidade ágil para ir a outras regiões da cidade com conforto. Chegando a seu destino de forma rápida, segura e sem trânsito. Próximo à estação de metrô jardim oceânico e a estação de brt Afrânio Costa.'
  },
  {
    title: 'Facilidade e acesso privilegiado',
    content: 'Desfrute da comodidade de estar próximo aos principais shoppings, supermercados e centros empresariais da região. Uma localização estratégica que garante praticidade no dia a dia, conectando você a tudo que precisa com rapidez e conveniência.'
  },
  {
    title: 'Vista privilegiada e qualidade de vida',
    content: 'Desfrute da localização única do Green Park Barra, onde o Mar se faz presente e a paisagem revela o verde e a imponente Pedra da Gávea. O cenário espetacular que combina natureza, conforto e bem-estar, garantindo uma experiência de vida incomparável.'
  },
  {
    title: 'Segurança 24 horas em um bairro planejado',
    content: 'O Green Park Barra é mais do que um endereço. É um espaço cuidadosamente planejado para oferecer qualidade de vida e tranquilidade. Com monitoramento completo tecnologia de ponta e segurança 24 horas por dia. Um condomínio protegido com segurança de alto desempenho, pensando para garantir o bem estar de quem ira viver aqui.'
  }
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const phoneNumber = '5521969773443'
  const message = 'Olá! Gostaria de mais informações sobre o projeto Green Park!'

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return (
    <section className="about">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <h1 className='about-header'>Descubra o que torna o Green Park Barra único</h1>
      </motion.div>
        <div className='about-container'>
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className='about-content'
            >
                <div className='about-img'><img src={about} alt="" /></div>
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className='about-description'
            >
                <h2 className='list-header'>Explore cada detalhe que faz deste empreendimento um verdadeiro privilégio de viver</h2>
                <ul className="dropdown-list">
                    {items.map((item, index) => (
                    <li key={index} className={`dropdown-item ${activeIndex === index ? 'active' : ''}`}>
                        <button onClick={() => toggle(index)} className="dropdown-button">
                        {item.title}
                        <span>{activeIndex === index ? '▲' : '▼'}</span>
                        </button>
                        {activeIndex === index && (
                        <div className="dropdown-content">
                            <p>{item.content}</p>
                        </div>
                        )}
                    </li>
                    ))}
                </ul>
                <div className='button-cta'>
                    <button onClick={handleClick}>Saber Mais</button>
                </div>                
            </motion.div>      
        </div>
        
    </section>
  )
}

export default About
