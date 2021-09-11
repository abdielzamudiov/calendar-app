export const NEXT_MONTH = 'NEXT_MONTH';

export const NEXT_YEAR = 'NEXT_YEAR';

export const PREV_MONTH = 'PREV_MONTH';

export const PREV_YEAR = 'PREV_YEAR';

export const SELECT_DATE = 'SELECT_DATE';

export const DISCARD_DATE = 'DISCARD_DATE';

export const TODAY_DATE = 'TODAY_DATE';

export const nextMonth = () => ({
  type: NEXT_MONTH
});

export const nextYear = () => ({
  type: NEXT_YEAR
});

export const selectDate = (date) => ({
  type: SELECT_DATE,
  payload: { 
    date
  },
});

export const prevMonth = () => ({
  type: PREV_MONTH
});

export const prevYear = () => ({
  type: PREV_YEAR
});

export const discardDate = () => ({
  type: DISCARD_DATE
});

export const todayDate = () => ({
  type: TODAY_DATE
});