import { useEffect, useMemo, useState } from "react"
import { arraydb, type interfaceGuitar } from "../data/db"

type CartItem = interfaceGuitar & { cantidad: number }

const useCarrito = () => {
  const [guitars] = useState<interfaceGuitar[]>(arraydb)

  const inicialCarrito = (): CartItem[] => {
    const localCarrito = localStorage.getItem("carrito")
    return localCarrito ? (JSON.parse(localCarrito) as CartItem[]) : []
  }

  const [carrito, setCarrito] = useState<CartItem[]>(inicialCarrito)

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  function addCarrito(item: interfaceGuitar) {
    const itemExist = carrito.findLastIndex((guitar: CartItem) => guitar.id === item.id)

    if (itemExist === -1) {
      setCarrito([...carrito, { ...item, cantidad: 1 }])
    } else {
      const updatedCarrito = [...carrito]
      updatedCarrito[itemExist].cantidad += 1
      setCarrito(updatedCarrito)
    }
  }

  function deletedGuitar(id: number) {
    const pos = carrito.findIndex((car: CartItem) => car.id === id)
    if (pos !== -1) {
      const updatedCarrito = [...carrito]
      updatedCarrito.splice(pos, 1)
      setCarrito(updatedCarrito)
    }
  }

  function vaciarCarrito() {
    setCarrito([])
  }

  function aumentarCantidad(id: number) {
    const pos = carrito.findIndex((car: CartItem) => car.id === id)
    if (pos !== -1) {
      const updatedCarrito = [...carrito]
      updatedCarrito[pos].cantidad += 1
      setCarrito(updatedCarrito)
    }
  }

  function disminuirCantidad(id: number) {
    const pos = carrito.findIndex((car: CartItem) => car.id === id)
    if (pos !== -1 && carrito[pos].cantidad > 1) {
      const updatedCarrito = [...carrito]
      updatedCarrito[pos].cantidad -= 1
      setCarrito(updatedCarrito)
    }
  }

  const total = useMemo(
    () => carrito.reduce((total: number, item: CartItem) => total + item.price * item.cantidad, 0),
    [carrito],
  )

  const isEmpty = useMemo(() => carrito.length === 0, [carrito])

  return {
    guitars,
    carrito,
    addCarrito,
    deletedGuitar,
    vaciarCarrito,
    aumentarCantidad,
    disminuirCantidad,
    total,
    isEmpty,
  }
}

export default useCarrito
