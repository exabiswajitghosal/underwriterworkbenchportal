import React from 'react';
import styles from './LocationComponent.module.css';

export function MapView() {
  return (
    <section className={styles.mapContainer}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a84c645835bc70de8bfdb81696feb950a4565a123693f6c338795e41ed8eb5a?placeholderIfAbsent=true&apiKey=d51d7313bdca4fcf802b81d20b6296aa" alt="Map view" className={styles.mapImage} height={"250 px"} width={"400px"}/>
      
    </section>
  );
}

export default MapView;