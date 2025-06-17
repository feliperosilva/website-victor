import './About.css'
import about from '../../assets/about.png'
import { useState } from 'react';

const items = [
  {
    title: 'Mobilidade',
    content: 'Mobilidade e agilidade graças ao fácil acesso ao metrô, permitindo chegar mais rápido a outras regiões da cidade.'
  },
  {
    title: 'Conveniência',
    content: 'Conveniência de ter os principais shoppings, hipermercados e centros empresariais da região.'
  },
  {
    title: 'Qualidade de Vida',
    content: 'Perto do mar, com vista para a Pedra da Gávea e o Maciço da Tijuca. No Green Park Barra, localização é qualidade de vida.'
  },
  {
    title: 'Tranquilidade',
    content: 'Tecnologia de ponta e monitoramento completo garantem a tranquilidade de viver em um ambiente seguro, com controle de acesso, câmeras, alarmes e botão de emergência nas áreas comuns.'
  }
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="about">
        <h1 className='about-header'>Descubra o que torna o Green Park Barra único</h1>
        <div className='about-container'>
            <div className='about-content'>
                <div className='about-img'><img src={about} alt="" /></div>
            </div>
            <div className='about-description'>
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
                    <button>Saber Mais</button>
                </div>                
            </div>      
        </div>
        
    </section>
  )
}

export default About
