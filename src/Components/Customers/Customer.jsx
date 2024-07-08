import React, { useState } from 'react';
import './Customer.css';

const testimonials = [
  {
    image: 'https://assets.bbhub.io/dotorg/sites/64/2023/09/BillGates-Headshot-2022.jpg',
    name: 'John Doe',
    text: 'This product is amazing! Highly recommended.'
  },
  {
    image: 'https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg',
    name: 'Jane Smith',
    text: 'A fantastic experience from start to finish.'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/35._ISC-Symposium-Ratan_N._Tata_in_der_Pause-HSGN_028-01812.JPG/330px-35._ISC-Symposium-Ratan_N._Tata_in_der_Pause-HSGN_028-01812.JPG',
    name: 'Sam Wilson',
    text: 'Great service and excellent quality!'
  }
];

const Customer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="gg">
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="carousel-image" />
        <div className="carousel-content">
          <h3 className='oo'>{testimonials[currentIndex].name}</h3>
          <p>{testimonials[currentIndex].text}</p>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default Customer;
