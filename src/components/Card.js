import PropTypes from 'prop-types'
import '../styles/components/Card.modules.css'

export  function Card(props) {
  return (
    <div className="card">
      <div className="description">
        <h3>{props.name}</h3>
        <p>Clique para saber mais</p>
      </div>
      <img src= {props.img} alt={props.name} loading="lazy" />
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
