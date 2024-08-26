import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <div className={styles.marquee}>
          Sous la guidance éclairée de Sa Majesté le Roi Mohammed VI, nous avançons ensemble vers un avenir de prospérité et de progrès pour notre nation.
        </div>
      </div>
      <img 
        src="https://th.bing.com/th/id/R.9dd518139599bfbcea36c898deb64830?rik=8L0cfwfRY%2bVKQA&riu=http%3a%2f%2fwww.chu-fes.ma%2fwp-content%2fuploads%2f2017%2f12%2fimage8.png&ehk=JKNXdFW0rbIF1W4aCzQxzC4bTQFYI8UH%2fXfWFrXpkXc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" 
        alt="Right Logo"
        className={styles['logo-left']} 
      />
    </header>
  );
};

export default Header;
