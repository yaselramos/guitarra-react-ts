import type { interfaceGuitar } from "../data/db"
import { arraydb } from "../data/db"

export type CartItem = interfaceGuitar & { cantidad: number }

export type CartAction =
  | { type: "add-to-cart"; payload: { item: interfaceGuitar } }
  | { type: "remove-from-cart"; payload: { id: interfaceGuitar["id"] } }
  | { type: "clear-cart" }
  | { type: "increase-quantity"; payload: { id: interfaceGuitar["id"] } }
  | { type: "decrease-quantity"; payload: { id: interfaceGuitar["id"] } }

export type CartState = {
  cart: CartItem[]
  data: interfaceGuitar[]
}

export const initialState: CartState = {
  cart: [],
  data: arraydb,
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "add-to-cart": {
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

    case "remove-from-cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }

    case "increase-quantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, cantidad: item.cantidad + 1 } : item,
        ),
      }

    case "decrease-quantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 }
            : item,
        ),
      }

    case "clear-cart":
      return {
        ...state,
        cart: [],
      }

    default:
      return state
  }
}