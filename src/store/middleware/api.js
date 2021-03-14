import axios from 'axios'

//actions
import * as actions from '../actions'

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  const { url, method, onStart, onSuccess, onError } = action.payload

  if (onStart) dispatch({ type: onstart })

  next(action)

  try {
    const response = await axios.request({
      baseURL: `https://pokeapi.co/api/v2`,
      url,
      method,
    })
    console.log(response)
    //dispatch(actions.apiCallSuccess(response.))
  } catch (error) {
    console.log(error)
  }
}

export default api
