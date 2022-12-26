import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
})

const startSearch = async() => {
    try {
        const data = await instance.get('/apps')
        console.log(data);
        return data
    } catch (error) {
        throw new Error('Failed to get apps data' + error)
    }
}

export { startSearch }