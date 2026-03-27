import type { CartItem } from "../reducers/cart-reduces"
import type { interfaceGuitar } from "../data/db"
import { formatCurrency } from "../utils/formatCurrency"

type CarritoProps = {
    carrito: CartItem[],
    total: number,
    isEmpty: boolean,
    itemCount: number,
    deleteGuitar: (id: interfaceGuitar["id"]) => void,
    vaciarCarrito: () => void,
    aumentarCantidad: (id: interfaceGuitar["id"]) => void,
    disminuirCantidad: (id: interfaceGuitar["id"]) => void,
}

function Carrito({
    carrito,
    total,
    isEmpty,
    itemCount,
    deleteGuitar,
    vaciarCarrito,
    aumentarCantidad,
    disminuirCantidad,
}: CarritoProps) {
    const itemLabel = itemCount === 1 ? "artículo" : "artículos"

    return (
        <div className="carrito">
            <div className="cart-quick-view" aria-live="polite">
                <div className="cart-quick-view__left">
                    <img className="img-fluid" src="/img/carrito.png" alt="Carrito" />
                    <span className="cart-badge">{itemCount}</span>
                    <span>{itemCount} {itemLabel}</span>
                </div>
                <strong>{formatCurrency(total)}</strong>
            </div>

            <div id="carrito" className="bg-white p-3 cart-panel">
                <div className="cart-panel__header">
                    <div>
                        <p className="cart-panel__eyebrow">Tu selección</p>
                        <h3 className="cart-panel__title">Carrito</h3>
                    </div>
                    <span className="cart-panel__count">{itemCount} {itemLabel}</span>
                </div>

                {
                   isEmpty ? (
                        <div className="cart-empty">
                            <p className="cart-empty__icon">🎸</p>
                            <p className="text-center cart-empty__title">Tu carrito está vacío</p>
                            <p className="text-center cart-empty__copy">
                                Agrega una guitarra y aquí verás un resumen rápido de tu compra.
                            </p>
                        </div>
                    ) : (
                        <div className="cart-list">
                            {
                                carrito.map(car => (
                                    <article className="cart-item" key={car.id}>
                                        <img
                                            className="cart-item__image"
                                            src={`/img/${car.image}.jpg`}
                                            alt={`imagen de ${car.name}`}
                                        />

                                        <div className="cart-item__content">
                                            <div className="cart-item__top">
                                                <div>
                                                    <h4 className="cart-item__name">{car.name}</h4>
                                                    <p className="cart-item__price">{formatCurrency(car.price)}</p>
                                                </div>

                                                <button
                                                    className="remove-button"
                                                    type="button"
                                                    onClick={() => deleteGuitar(car.id)}
                                                    aria-label={`Eliminar ${car.name} del carrito`}
                                                >
                                                    ×
                                                </button>
                                            </div>

                                            <div className="cart-item__footer">
                                                <div className="quantity-control">
                                                    <button
                                                        type="button"
                                                        className="quantity-button"
                                                        onClick={() => disminuirCantidad(car.id)}
                                                        aria-label={`Disminuir cantidad de ${car.name}`}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="quantity-value">{car.cantidad}</span>
                                                    <button
                                                        type="button"
                                                        className="quantity-button"
                                                        onClick={() => aumentarCantidad(car.id)}
                                                        aria-label={`Aumentar cantidad de ${car.name}`}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <p className="cart-item__subtotal">{formatCurrency(car.price * car.cantidad)}</p>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    )

                }
                <div className="cart-summary">
                    <p className="text-end">Total pagar</p>
                    <span className="fw-bold">{formatCurrency(total)}</span>
                </div>
                <button
                    type="button"
                    className="btn btn-dark w-100 mt-3 p-2 clear-cart-button"
                    onClick={vaciarCarrito}
                    disabled={isEmpty}
                >
                    Vaciar Carrito
                </button>
            </div>
        </div>
    )
}

export default Carrito
