import axios from 'axios'
import { employee } from '../types/types'

export default function HttpEmployeeApiService() {
  const path = 'https://shoes-maker-78e124fd97e0.herokuapp.com/'

  function getRoles() {
    return axios.get(path + 'roles')
  }

  function getEmployees() {
    return axios.get(path + 'employees')
  }

  function deleteEmployee(id: number) {
    return axios.delete(path + 'employees/' + id)
  }

  const addEmployee = async (data: employee) => {
    axios({
      method: 'post',
      url: path + 'employees',
      data: data,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateEmployee = async (data: employee, id: any) => {
    axios({
      method: 'put',
      url: path + 'employees/' + id,
      data: data,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    getEmployees,
    deleteEmployee,
    getRoles,
    addEmployee,
    updateEmployee,
  }
}
