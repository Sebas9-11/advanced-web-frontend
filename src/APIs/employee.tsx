import axios from 'axios'
import { employee } from '../types/types'

export default function HttpEmployeeApiService() {
  const path = 'http://127.0.0.1:5000/'

  const getEmployees = async (setData: any) => {
    axios({
      method: 'get',
      url: path + 'employees',
    })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
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
    addEmployee,
    updateEmployee,
  }
}
