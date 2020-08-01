import { ADD_FAQ } from "./types"

export const addFaqs = (faqData) => {
  // console.log("in actions: ", faqData)
  return {
    type: ADD_FAQ,
    payload: faqData.faqs,
  }
}
