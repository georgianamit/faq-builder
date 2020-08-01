import { ADD_FAQ } from "../actions/types"

const initialState = {
  faqs: [],
}

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAQ:
      return {
        ...state,
        faqs: [...state.faqs, ...action.payload],
      }

    default:
      return state
  }
}

export default faqReducer
