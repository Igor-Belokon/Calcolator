import { GET_DATA, successAction, failureAction } from "../types";
export function loadCards(id) {
  return dispatch =>
    fetch(`https://smida-dev.test.idoc.com.ua/api/registry/okpoCard?code=${id}`) // Redux Thunk handles these
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(GET_DATA), data }))
      .catch(err => dispatch({ type: failureAction(GET_DATA), err }));
}
