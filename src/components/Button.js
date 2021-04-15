import '../styles/components/Button.modules.css'
import {useHistory} from 'react-router-dom'

export function Button() {
  const history = useHistory()
  const handleClick = () =>{
    history.push('/')
  }
  return (
    <button onClick={handleClick}>Frutas</button>
  )
}
