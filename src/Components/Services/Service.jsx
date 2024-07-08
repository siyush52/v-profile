import React, { useEffect, useRef, useState } from 'react';
import './Service.css';
import { FaCode, FaPaintBrush } from 'react-icons/fa';

const Service = () => {
  const [isVisible, setIsVisible] = useState({
    up: false,
    down: false
  });

  const upRef = useRef(null);
  const downRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (upRef.current && downRef.current) {
        const upRect = upRef.current.getBoundingClientRect();
        const downRect = downRef.current.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        setIsVisible({
          up: upRect.top <= viewHeight * 0.75,
          down: downRect.top <= viewHeight * 0.75
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bodyy">
      <div
        className={`card up ${isVisible.up ? 'fadeInLeft' : ''}`}
        id="upp"
        ref={upRef}
      >
        <div className="icon"><FaCode size={48} /></div>
        <h2>Web Development</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nisi hic fuga quidem iure velit corrupti odio, officia sed aliquam accusantium placeat beatae. Nobis optio ut et vel, perferendis nostrum?</p>
      </div>
      <div
        className={`card down ${isVisible.down ? 'fadeInRight' : ''}`}
        ref={downRef}
      >
        <div className="icon"><FaPaintBrush size={30} /></div>
        <h2>Web Design</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta corporis tenetur earum perspiciatis dolorem enim maxime cum beatae. Doloribus vel quisquam sequi ipsam. Esse culpa labore mollitia assumenda est architecto?</p>
      </div>
    </div>
  );
}

export default Service;
