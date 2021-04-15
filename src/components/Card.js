import PropTypes from 'prop-types'
import '../styles/components/Card.modules.css'
import {useHistory} from 'react-router-dom'
export function Card(props) {
  const history = useHistory()
  const handleClick = () =>{
    history.push(`/fruta/${props.name}`)
  }
  return (
    <div className="card" onClick={handleClick}>
      <div className="description">
        <h3>{props.name}</h3>
        <p>Clique para saber mais</p>
      </div>
      <img src={props.img} alt={props.name} loading="lazy" />
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
