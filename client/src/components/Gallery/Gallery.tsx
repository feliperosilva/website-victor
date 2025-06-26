import './Gallery.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../../assets/img01.png'
import img2 from '../../assets/img02.jpg'
import img3 from '../../assets/img03.jpg'
import img4 from '../../assets/img04.jpg'
import img5 from '../../assets/img05.png'
import img6 from '../../assets/img06.png'
import img7 from '../../assets/img07.jpg'
import img8 from '../../assets/img08.jpg'
import img9 from '../../assets/img09.png'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.png'
import img12 from '../../assets/img12.png'
import img13 from '../../assets/img13.png'
import img14 from '../../assets/img14.png'
import img15 from '../../assets/img15.png'

const mediaItems = [
    { type: 'image', src: img1 },
    { type: 'image', src: img2 },
    { type: 'image', src: img3 },
    { type: 'image', src: img4 },
    { type: 'image', src: img5 },
    { type: 'image', src: img6 },
    { type: 'image', src: img7 },
    { type: 'image', src: img8 },
    { type: 'image', src: img9 },
    { type: 'image', src: img10 },
    { type: 'image', src: img11 },
    { type: 'image', src: img12 },
    { type: 'image', src: img13 },
    { type: 'image', src: img14 },
    { type: 'image', src: img15 },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage('');

  return (
    <div className="gallery">
      <div className="gallery-title">
        <h3>Clique nas imagens e explore a beleza deste grande projeto</h3>
      </div>

      <div className="gallery-carousel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          loop={true}
        >
          {mediaItems.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.src}
                onClick={() => openModal(item.src)}
                className="thumbnail"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="Zoomed" className="modal-content" />
        </div>
      )}
    </div>
  );
};

export default Gallery;