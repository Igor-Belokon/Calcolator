import { ANSWER_REG, successAction } from "../types";
const initialState = {
  data: []
};

export default function Answer(state = initialState, action) {
  switch (action.type) {
    case successAction(ANSWER_REG):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };

    default:
      return state;
  }
}
