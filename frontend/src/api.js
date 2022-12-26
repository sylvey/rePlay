import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

const startSearch = async() => {
    try {
        const data = await instance.get('/apps')
        console.log('api data: ', data.data);
        return data
    } catch (error) {
        throw new Error('Failed to get apps data' + error)
    }
}

const searchKeyword = async(keyword) => {
    try {
        const data = await instance.get(`/apps/${keyword}`)
        console.log('search keyword : ', keyword + data);
        return data
    } catch (error) {
        throw new Error('Failed to get seaching keyword data')
    }
}

export { startSearch, searchKeyword }