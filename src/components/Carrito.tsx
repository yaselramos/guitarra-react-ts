import type { interfaceGuitar } from "../data/db";

function Carrito({ carrito ,deletedGuitar,vaciarCarrito,
    aumentarCantidad,disminuirCantidad,total,isEmpty}:
    {carrito:interfaceGuitar[],
    deletedGuitar:(id:number) => void,
vaciarCarrito:() => void,
aumentarCantidad:(id:number) => void,
disminuirCantidad:(id:number) => void,
total:number,
isEmpty:boolean}) {
   


    return (
        <div className="carrito">
            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

            <div id="carrito" className="bg-white p-3">

                {
                   isEmpty ? (
                        <p className="text-center">El carrito esta vacio</p>
                    ) : (


                        <table className="w-100 table">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carrito.map(car => (
                                        <tr key={car.id}>
                                            <td>
                                                <img className="img-fluid" src={`/img/${car.image}.jpg`} alt="imagen guitarra" />
                                            </td>
                                            <td>{car.name}</td>
                                            <td className="fw-bold">
                                                ${car.price}
                                            </td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() => disminuirCantidad(car.id)}
                                                >
                                                    -
                                                </button>
                                                {car.cantidad}
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() => aumentarCantidad(car.id)}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                    onClick={() =>deletedGuitar(car.id)}
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>))
                                }
                            </tbody>
                        </table>
                    )

                }
                <p className="text-end">Total pagar: <span className="fw-bold">$ {total}</span></p>
                <button type="button" className="btn btn-dark w-100 mt-3 p-2" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Carrito;