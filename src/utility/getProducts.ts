import axios from 'axios'

export const getAllProducts = async (): Promise<unknown> => {
  try {

    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }

    const payload = {
      "key": "d93488d2-bf4c-11ec-981d-005056ac3ab7",
      "ID": "e9121b00-305f-11ed-b59b-005056ac3ab7"
    }

    const response = await axios.post('http://timobile.dyndns-server.com/WsPedidos/RestService.svc/app/selectProductosProveedor',payload,options)
    return response.data
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}