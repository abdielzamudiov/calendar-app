import { DISCARD_DATE, NEXT_MONTH, NEXT_YEAR, PREV_MONTH, PREV_YEAR, SELECT_DATE, TODAY_DATE } from './actions'
import { getWeeks } from '../helpers/Helpers'
import { initialState } from '../helpers/Helpers'

export const reducer  = (state, action) => {
  switch (action.type) {
    case NEXT_MONTH: {
      if (state.month.index === 11) {
        return {
          ...state,
          year: state.year + 1,
          month: {
            index: 0,
            name: new Date(state.year + 1, 0).toLocaleDateString("default", { month: "long"}),
            days: 32 - new Date(state.year + 1, 0, 32).getDate(),
            weeks: getWeeks(
              (new Date(state.year + 1, 0)).getDay(),
              32 - new Date(state.year + 1, 0, 32).getDate(),
              state.year + 1,
              0
            )
          }
        }
      }
      return {
        ...state,
        month: {
          index: state.month.index + 1,
          name: new Date(state.year, state.month.index + 1).toLocaleDateString("default", { month: "long"}),
          days: 32 - new Date(state.year, state.month.index + 1, 32).getDate(),
          weeks: getWeeks(
            (new Date(state.year, state.month.index + 1)).getDay(),
            32 - new Date(state.year, state.month.index + 1, 32).getDate(),
            state.year,
            state.month.index + 1
          )
        }
      }
    }

    case NEXT_YEAR: {
      
      return {
        ...state,
        year: state.year + 1,
        month: {
          ...state.month,
          weeks: getWeeks(
            (new Date(state.year + 1, state.month.index)).getDay(),
            32 - new Date(state.year + 1, state.month.index, 32).getDate(),
            state.year + 1,
            state.month.index
          )
        }
      }
    }

    case PREV_YEAR: {

      return {
        ...state,
        year: state.year - 1,
        month: {
          ...state.month,
          weeks: getWeeks(
            (new Date(state.year - 1, state.month.index)).getDay(),
            32 - new Date(state.year - 1, state.month.index, 32).getDate(),
            state.year - 1,
            state.month.index
          )
        }
      }
    }

    case PREV_MONTH: {
      if (state.month.index === 0) {
        return {
          ...state,
          year: state.year - 1,
          month: {
            index: 11,
            name: new Date(state.year - 1, 11).toLocaleDateString("default", { month: "long"}),
            days: 32 - new Date(state.year - 1, 11 , 32).getDate(),
            weeks: getWeeks(
              (new Date(state.year - 1, 11)).getDay(),
              32 - new Date(state.year - 1, 11, 32).getDate(),
              state.year - 1,
              11
            )
          }
        }
      }
      return {
        ...state,
        month: {
          index: state.month.index - 1,
          name: new Date(state.year, state.month.index - 1).toLocaleDateString("default", { month: "long"}),
          days: 32 - new Date(state.year, state.month.index -1, 32).getDate(),
          weeks: getWeeks(
            (new Date(state.year, state.month.index - 1)).getDay(),
            32 - new Date(state.year, state.month.index - 1, 32).getDate(),
            state.year,
            state.month.index - 1
          )
        }
      }
    }
    case SELECT_DATE: {
      return {
        ...state,
        selectedDate: action.payload.date
      }
    }
    
    case DISCARD_DATE: {
      return {
        ...state,
        selectedDate: null
      }
    }

    case TODAY_DATE: {
      return {
        ...state,
        ...initialState
      }
    }
    default: return {...state}
  }
}