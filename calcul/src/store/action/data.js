import { ANSWER_REG, successAction } from "../types";

export function getAnswers(answer) {
  return dispatch =>
    dispatch({ type: successAction(ANSWER_REG), data: answer });
}
export function sumOp(first, second) {
  let s = first + second;
  return s;
}
export function divideOp(first, second) {
  return first / second;
}
export function remainderOp(first, second) {
  return first % second;
}
export function highestOp(first, second) {
  let n = second;
  let z = 0;
  nextPrime: for (let i = first; i <= n; i++) {
    for (let j = first; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }

    z = i;
  }
  return z;
}
