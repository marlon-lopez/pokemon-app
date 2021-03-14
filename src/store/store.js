import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import api from './middleware/api'
import reducer from './pokemons'

export default function store() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  })
}
