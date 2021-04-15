import axios from 'axios'

const apiFruit = axios.create({
 baseURL: 'https://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json'
})

export default apiFruit
