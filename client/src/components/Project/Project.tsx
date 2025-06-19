import './Project.css'
import { useRef } from 'react';
import ReactPlayer from 'react-player';
import video from '../../assets/Green Park.mp4'

const Project = () => {
    const playerRef = useRef<ReactPlayer>(null);

    return (
        <div>
        <section className='project'>
            <div className='project-container'>
                <div className='project-header'>
                    <h1 className='project-title'>Um novo padrão de viver na Barra</h1>
                    <h3 className='project-subtitle'>Mergulhe nos detalhes do Green Park Barra e descubra por que ele é tão especial</h3>
                </div>
                <div className='video'>
                    <ReactPlayer
                        ref={playerRef}
                        url={video}
                        controls={true}
                        width="70%"
                        height="auto"
                    />
                </div>
            </div>
        </section>
        </div>
    )
}

export default Project
