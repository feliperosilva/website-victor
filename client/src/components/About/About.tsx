import './About.css'
import pic from '../../assets/about.png'

const About = () => {
  return (
    <div>
      <section className='about'>
        <div className='about-info'>
            <h1 className='about-title'>
                UM EQUILÍBRIO PERFEITO ENTRE BELEZA, ESTRUTURA E CONVENIÊNCIA. <br /><br />AQUI VOCÊ TEM TUDO.
            </h1>
            <p className='about-description'>
                Um cenário natural privilegiado, com lagoa e quilômetros de praias deslumbrantes. Grandes shoppings, mercados, gastronomia variada e serviços especializados.
            </p>
        </div>
        <div className='about-img'><img src={pic} alt="" /></div>
      </section>
    </div>
  )
}

export default About
