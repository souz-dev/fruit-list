import Axios from 'axios'

const api = Axios.create({

    baseURL:'http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json'
})

export default api