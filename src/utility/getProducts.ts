import axios from 'axios'

export const getAllProducts = async (
  key:string,
  id:string
): Promise<unknown> => {

  const URL = 'http://timobile.dyndns-server.com/WsPedidos/RestService.svc/app/selectProductosProveedor'

  console.log('Pantufla',id)
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },

  }

  const payload = {
    "key": key,
    "ID": id
  }

  try {
    const response = await axios.post(URL, JSON.stringify(payload),options)
    return response.data
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}