import axios, { AxiosRequestHeaders } from "axios"

const API = axios.create({
  baseURL: import.meta.env["VITE_API_SERVICE_URL"],
  responseType: "json",
  // withCredentials: true,
})

API.defaults.timeout = 20000
API.defaults.headers.post["Content-Type"] = "application/json"
// API.defaults.headers.common["ngrok-skip-browser-warning"] = "true"

API.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error?.response?.status === 401 && error?.response?.data?.code === 401)
      return Promise.reject(error)
  },
)

export const apiService = async (
  method: "post" | "put" | "get" | "delete" | "patch",
  url: string,
  params?: any,
  data?: any,
  headers?: AxiosRequestHeaders,
) => {
  try {
    const response = await API({
      method,
      url,
      headers: headers,
      params,
      data,
    })
    console.log(`${method} ${url}} success`)
    return response.data
  } catch (error: any) {
    console.log(`${method} ${url}} error`)
    throw new error()
  } finally {
    console.log(`${method} ${url}} finally`)
  }
}

export default apiService
