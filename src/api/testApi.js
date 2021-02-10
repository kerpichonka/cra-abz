import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1'

export const getUsers = ({ count = 10, link } = {}) => {
  let url  = link ? link : `${BASE_URL}/users?count=${count}`
  return axios.get(url)
  // if (link) {
  //   return axios.get(link);
  // }

  // return axios.get(`${BASE_URL}/users?count=${count}`);
}


export const getImage = ({id, url}) => {
  console.log(url)
  return axios.get(url).catch(err => ({error: true, id}))
}