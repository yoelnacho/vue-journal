import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-journal-fe7b8-default-rtdb.firebaseio.com'
})

export default journalApi