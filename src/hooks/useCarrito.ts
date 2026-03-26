import { useEffect, useMemo, useReducer } from "react"
import {
  cartReducer,
  initialState,
  type CartItem,
  type CartState,
} from "../reducers/cart-reduces"

const STORAGE_KEY = "carrito"

const useCarrito = () => {
  const inicialCarrito = (): CartState => {
    if (typeof window === "undefined") {
      return initialState
    }

    try {
      const localCarrito = window.localStorage.getItem(STORAGE_KEY)
      if (!localCarrito) {
        return initialState
      }

      const parsedCarrito = JSON.parse(localCarrito)
      if (!Array.isArray(parsedCarrito)) {
        return initialState
      }

      return {
        ...initialState,
        cart: parsedCarrito as CartItem[],
      }
    } catch {
      return initialState
    }
  }

  const [state, dispatch] = useReducer(cartReducer, initialState, inicialCarrito)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart))
  }, [state.cart])

  const total = useMemo(
    () => state.cart.reduce((total: number, item: CartItem) => total + item.price * item.cantidad, 0),
    [state.cart],
  )

  const isEmpty = useMemo(() => state.cart.length === 0, [state.cart])

  return {
    guitars: state.data,
    carrito: state.cart,
    total,
    isEmpty,
    dispatch,
  }
}

export default useCarrito
