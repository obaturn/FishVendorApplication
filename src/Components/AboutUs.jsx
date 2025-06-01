import React from 'react';
import styles from './AboutStyle.module.css';
import ownerImage from '../Assets/kotefish.PNG'; // Replace with your actual image path

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={ownerImage} alt="Owner of Movicks Creation" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2>About Us</h2>
        <p>
          <strong>Movicks Creation</strong> was born out of passion, curiosity, and a deep love for wholesome food.
          Meet the visionary behind it all — a dedicated woman who works as a full-time banker by profession, but whose
          heart found unexpected joy in something far from the office desk — selling fish and chicken.
        </p>
        <p>
          Her journey didn’t start in a marketplace. It began in her kitchen. Being a fish lover, she constantly
          explored new recipes and ways to enjoy healthy, delicious meals with her family. But one day, she asked
          herself a simple question: <em>"Why not share this love with others?"</em> What started as a weekend hobby —
          sourcing fresh fish, preserving it with care, and preparing it for close friends and neighbors — gradually
          grew into something much bigger.
        </p>
        <p>
          She saw a gap in the market — people wanted quality, affordable protein without having to compromise on
          freshness or hygiene. So, she stepped in, armed not just with skills, but with heart and intention.
        </p>
        <p>
          Behind the scenes, her husband, a dedicated physiotherapist, became her biggest supporter. Whether it was
          helping with delivery logistics or cheering her on during market fairs, he stood by her every step of the
          way.
        </p>
        <p>
          Today, <strong>Movicks Creation</strong> is more than a small business — it’s a story of resilience, passion,
          and family. Every pack of fish or chicken you buy carries a piece of that story — one woman’s journey of
          stepping out of her comfort zone, and creating something meaningful for her community.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
