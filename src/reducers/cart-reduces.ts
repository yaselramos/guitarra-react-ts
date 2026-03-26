import type { interfaceGuitar } from "../data/db"
import { arraydb } from "../data/db"

export type CartItem = interfaceGuitar & { cantidad: number }

export type CartAction =
  | { type: "add-to-cart"; payload: { item: interfaceGuitar } }
  | { type: "delete-to-cart"; payload: { id: interfaceGuitar["id"] } }
  | { type: "clear-to-cart" }
  | { type: "plus-to-cart"; payload: { id: interfaceGuitar["id"] } }
  | { type: "rest-to-cart"; payload: { id: interfaceGuitar["id"] } }

export type CartState = {
  cart: CartItem[]
  data: interfaceGuitar[]
}

export const initialState: CartState = {
  cart: [],
  data: arraydb,
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  if (action.type === "add-to-cart") {
    const itemExist = state.cart.find((guitar) => guitar.id === action.payload.item.id)

    return {
      ...state,
      cart: itemExist
        ? state.cart.map((item) =>
            item.id === action.payload.item.id ? { ...item, cantidad: item.cantidad + 1 } : item,
          )
        : [...state.cart, { ...action.payload.item, cantidad: 1 }],
    }
  }

  if (action.type === "delete-to-cart") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    }
  }

  if (action.type === "plus-to-cart") {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, cantidad: item.cantidad + 1 } : item,
      ),
    }
  }

  if (action.type === "rest-to-cart") {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item,
      ),
    }
  }

  if (action.type === "clear-to-cart") {
    return {
      ...state,
      cart: [],
    }
  }

  return state
}