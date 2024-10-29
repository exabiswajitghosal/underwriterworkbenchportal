import React from 'react';
import styles from './LocationComponent.module.css';

export function MapView() {
  return (
    <section className={styles.mapContainer}  style={{ marginLeft: '30px' }}>
      <iframe
        title="Google Map"
        width="400px"
        height="250px"
        className={styles.mapImage}
        
        src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15467.96368517827!2d88.363892!3d22.5726464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02707df3481931%3A0x9c9b4c09f0a37e6!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1634485201153`}
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default MapView;
