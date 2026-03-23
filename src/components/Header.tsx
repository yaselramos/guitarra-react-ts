import type { interfaceGuitar } from "../data/db"
import Carrito from "./Carrito"

function Header({ carrito, deletedGuitar,
    vaciarCarrito, aumentarCantidad, disminuirCantidad
    , total, isEmpty }: {
        carrito: interfaceGuitar[],
        deletedGuitar: (id: number) => void,
        vaciarCarrito: () => void,
        aumentarCantidad: (id: number) => void,
        disminuirCantidad: (id: number) => void,
        total: number,
        isEmpty: boolean
    }) {
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <Carrito
                            carrito={carrito}
                            deletedGuitar={deletedGuitar}
                            vaciarCarrito={vaciarCarrito}
                            aumentarCantidad={aumentarCantidad}
                            disminuirCantidad={disminuirCantidad}
                            total={total}
                            isEmpty={isEmpty}
                        />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header