import React, { useState, useEffect } from 'react';
import styles from './HeroBar.module.css';

const images = [
  'https://res.cloudinary.com/dkrpginfm/image/upload/v1748455716/soft_chicken_md270i.png',
  'https://res.cloudinary.com/dkrpginfm/image/upload/v1748455625/sharwa_igdosg.png',
  'https://res.cloudinary.com/dkrpginfm/image/upload/v1748455606/chicken_wings_yhnm4w.png',
  'https://res.cloudinary.com/dkrpginfm/image/upload/v1748455581/kotefish_ejugi8.png',
  'https://res.cloudinary.com/dkrpginfm/image/upload/v1748455541/titus_xhgclf.png',
  'https://res.cloudinary.com/dkrpginfm/image/upload/v1748455742/orobo_chicken_gr52mj.png',
];


const text = "MOVICKS CREATIONS";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <h1 className={styles.heading}>
        {text.split("").map((letter, index) => (
          <span key={index} className={styles.letter}>
            {letter}
          </span>
        ))}
      </h1>
      <button className={styles.button}>Order Now</button>
    </div>
  );
};

export default Hero;