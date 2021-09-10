import { NEXT_MONTH, NEXT_YEAR, PREV_MONTH, PREV_YEAR } from './actions'

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
            days: 32 - new Date(state.year + 1, 0, 32).getDate()
          }
        }
      }
      return {
        ...state,
        month: {
          index: state.month.index + 1,
          name: new Date(state.year, state.month.index + 1).toLocaleDateString("default", { month: "long"}),
          days: 32 - new Date(state.year, state.month.index + 1, 32).getDate()
        }
      }
    }

    case NEXT_YEAR: {
      
      return {
        ...state,
        year: state.year + 1
      }
    }

    case PREV_YEAR: {

      return {
        ...state,
        year: state.year - 1
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
            days: 32 - new Date(state.year - 1, 11 , 32).getDate()
          }
        }
      }
      return {
        ...state,
        month: {
          index: state.month.index - 1,
          name: new Date(state.year, state.month.index - 1).toLocaleDateString("default", { month: "long"}),
          days: 32 - new Date(state.year, state.month.index -1, 32).getDate()
        }
      }
    }
    default: return {...state}
  }
}