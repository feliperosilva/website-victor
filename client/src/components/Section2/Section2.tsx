import './Section2.css'
import pic from '../../assets/section2.png'
import { easeOut, motion } from 'framer-motion'

const Section2 = () => {
  return (
    <div>
      <motion.section 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className='section2'
      >
        <div className='section2-info'>
            <h1 className='section2-title'>
                UM EQUILÍBRIO PERFEITO ENTRE BELEZA, ESTRUTURA E CONVENIÊNCIA. <br /><br />AQUI VOCÊ ENCONTRA TUDO AO SEU REDOR.
            </h1>
            <p className='section2-description'>
                A localização perfeita, um cenário natural privilegiado, cercado por montanhas, próximo à lagoa, a poucos metros da praia. Tudo a seu alcance, comodidade com fácil acesso ao metrô, shopping Citta Américas e Downtown. Supermercados. Cercado pelos principais serviços especializados da região.
            </p>
        </div>
        <div className='section2-img'><img src={pic} alt="" /></div>
      </motion.section>
    </div>
  )
}

export default Section2
