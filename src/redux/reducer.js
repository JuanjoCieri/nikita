import * as actions from "./Actions/actionsTypes.js"

const initialState = {
    products: []
}

export default function rootReducer(state = initialState, {type: payload}) {
    switch (type) {
        case actions.GET_PRODUCTS:
        return {
            ...state,
            products: payload,
        }
    }
}