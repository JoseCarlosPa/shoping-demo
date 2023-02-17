import axios from 'axios'

export const getAllProducts = async (
  key:string = "d93488d2-bf4c-11ec-981d-005056ac3ab7",
  id:string = "e9121b00-305f-11ed-b59b-005056ac3ab7"
): Promise<unknown> => {

  const URL = 'http://timobile.dyndns-server.com/WsPedidos/RestService.svc/app/selectProductosProveedor'

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  }

  const payload = {
    "key": key,
    "ID": id
  }

  try {
    const response = await axios.post(URL,payload,options)
    return response.data
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}