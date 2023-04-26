import axios from "axios";

import * as actions from "./actionsTypes";

export function getProducts() {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/product/getAll")
      .then((json) =>
        dispatch({ type: actions.GET_PRODUCTS, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}
