import axios from 'axios'

export default axios.create({
  baseURL: 'https://terapolis-db.firebaseio.com'
})
