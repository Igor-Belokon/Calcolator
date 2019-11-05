import { USER_LOGIN, successAction, failureAction } from "../types";
export function loginUser(card) {
  return dispatch =>
    fetch("http://68.183.119.148/api/test/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }) // Redux Thunk handles these
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(USER_LOGIN), data }))
      .catch(err => dispatch({ type: failureAction(USER_LOGIN), err }));
}
