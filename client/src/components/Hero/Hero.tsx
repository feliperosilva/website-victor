import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className='hero-title'>
            <h1>Bem-vindo ao Green Park Barra</h1>
            <h3>Seu novo estilo de vida começa aqui</h3>
        </div>
      </motion.section>
    </div>
  )
}

export default Hero
