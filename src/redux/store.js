import { createStore } from 'redux';
import { reducer } from './reducers'
import { initialState } from '../helpers/Helpers';


export const configureStore = () => createStore(reducer, initialState);