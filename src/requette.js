
import axios from 'axios'

const b = 
document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => 
({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {} );

export default axios.create({
    baseURL:"http://localhost:3000/api",
    headers:{"Content-type" : "application/json",
    Authorization: 'Bearer ' + b.token}
    
})
