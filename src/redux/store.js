import { createStore } from 'redux';
import { reducer } from './reducers'

const date = new Date();

const initialState = {
  year: date.getFullYear(),
  month: {
    index: date.getMonth(),
    name: date.toLocaleDateString("default", { month: "long"}),
    days: 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate()
  },
  day: date.getDate()
}


export const configureStore = () => createStore(reducer, initialState);