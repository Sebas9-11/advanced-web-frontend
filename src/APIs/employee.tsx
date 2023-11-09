import axios from 'axios'

export default function HttpEmployeeApiService() {
  const path = import.meta.env.API_URL

  const get = () => {
    return axios({
      method: 'get',
      url: path + 'empleados',
    })
  }

  return {
    get,
  }
}
