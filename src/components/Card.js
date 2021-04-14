import React, { useEffect }  from 'react';
import styles from '../styles/components/Card.modules.css'
import api from '../services/api'
export  function Card() {
  return (
    
    <div className="card">

      <div className="description">
        <h3>nome</h3>
        <p>Clique para saber mais</p>
      </div>
      <img src= 'img' alt='name' loading="lazy" />
    </div>



  )
}