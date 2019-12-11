import { ANSWER_REG, successAction } from "../types";

export function getAnswers(answer) {
  return dispatch =>
    dispatch({ type: successAction(ANSWER_REG), data: answer });
}
