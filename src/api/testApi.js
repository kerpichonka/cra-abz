import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1'


const getUsers = ({ offset, count } = {}) => {
  return axios.get(`${BASE_URL}/users?count=${count}&offset=${offset}`)
}



const getPositions = () => {
  return axios.get(`${BASE_URL}/positions`)
}

const getToken = () => {
  return axios.get(`${BASE_URL}/token`).then(response => response.data.token)
}

 
const registerUser = ({user, token }) => {
  var formData = new FormData(); 

  formData.append('position_id', user.position);
  formData.append('name', user.name);
  formData.append('email', user.email);
  formData.append('phone', user.phone);
  formData.append('photo', user.photo);

  return axios.post(`${BASE_URL}/users`, formData, 
    {
      headers: {
        'Token': token
      },
    }
  )
}

export default {
  getUsers,
  getPositions,
  getToken,
  registerUser
}