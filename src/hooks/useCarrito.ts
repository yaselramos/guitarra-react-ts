import { useEffect, useMemo, useReducer } from "react"
import {
  cartReducer,
  initialState,
  type CartAction,
  type CartItem,
  type CartState,
} from "../reducers/cart-reduces"
import type { interfaceGuitar } from "../data/db"

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

  const dispatchCartAction = (action: CartAction) => dispatch(action)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart))
  }, [state.cart])

  const total = useMemo(
    () => state.cart.reduce((total: number, item: CartItem) => total + item.price * item.cantidad, 0),
    [state.cart],
  )

  const isEmpty = useMemo(() => state.cart.length === 0, [state.cart])
  const itemCount = useMemo(
    () => state.cart.reduce((count: number, item: CartItem) => count + item.cantidad, 0),
    [state.cart],
  )

  const addToCart = (item: interfaceGuitar) => {
    dispatchCartAction({ type: "add-to-cart", payload: { item } })
  }

  const deleteGuitar = (id: interfaceGuitar["id"]) => {
    dispatchCartAction({ type: "remove-from-cart", payload: { id } })
  }

  const vaciarCarrito = () => {
    dispatchCartAction({ type: "clear-cart" })
  }

  const aumentarCantidad = (id: interfaceGuitar["id"]) => {
    dispatchCartAction({ type: "increase-quantity", payload: { id } })
  }

  const disminuirCantidad = (id: interfaceGuitar["id"]) => {
    dispatchCartAction({ type: "decrease-quantity", payload: { id } })
  }

  return {
    guitars: state.data,
    carrito: state.cart,
    total,
    isEmpty,
    itemCount,
    addToCart,
    deleteGuitar,
    vaciarCarrito,
    aumentarCantidad,
    disminuirCantidad,
  }
}

export default useCarrito
