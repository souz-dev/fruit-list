import Axios from 'axios'

const apiFruit = Axios.create({

    baseURL:'http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json'
})

export default apiFruit