"use client"
import { useState, useEffect } from 'react';
import styles from '../Slide.module.css';

const images = [
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.nmY2o1MdUEMRBhFkRVxkyAHaGF%26pid%3DApi&f=1&ipt=2c795fc7c12944d63915f3defb82950c959fdf06c1a2414b5c5a88a8535edff8&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UL6VafYl6rih0khzN0yQ7AHaE8%26pid%3DApi&f=1&ipt=5ada061411eb2d64b32adb04805d3a0b306aad292580fcc5d0eaf9b0579d0a83&ipo=images',
  '/banner_1.png',
  // Add more image paths here
];

const Slide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Adjust the time for smooth transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slide}>
      <img src={`/images/${images[index]}`} alt={`Slide ${index + 1}`}  className='w-full'/>
    </div>
  );
};

export default Slide;