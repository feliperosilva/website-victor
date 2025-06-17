import './Section2.css'
import pic from '../../assets/section2.png'

const Section2 = () => {
  return (
    <div>
      <section className='section2'>
        <div className='section2-info'>
            <h1 className='section2-title'>
                UM EQUILÍBRIO PERFEITO ENTRE BELEZA, ESTRUTURA E CONVENIÊNCIA. <br /><br />AQUI VOCÊ TEM TUDO.
            </h1>
            <p className='section2-description'>
                Um cenário natural privilegiado, com lagoa e quilômetros de praias deslumbrantes. Grandes shoppings, mercados, gastronomia variada e serviços especializados.
            </p>
        </div>
        <div className='section2-img'><img src={pic} alt="" /></div>
      </section>
    </div>
  )
}

export default Section2
