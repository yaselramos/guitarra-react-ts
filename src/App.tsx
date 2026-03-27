import Header from "./components/Header"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Carrito from "./components/Carrito"

import useCarrito from "./hooks/useCarrito"

function App() {
    const {
        guitars,
        carrito,
        total,
        isEmpty,
        itemCount,
        addToCart,
        deleteGuitar,
        vaciarCarrito,
        aumentarCantidad,
        disminuirCantidad,
    } = useCarrito()

    return (
        <>
            <Header
                total={total}
                itemCount={itemCount}
            />


            <main id="coleccion" className="container-xl mt-5 collection-section">
                <p className="section-eyebrow text-center">Edición premium</p>
                <h2 className="text-center">Nuestra Colección</h2>
                <p className="collection-copy text-center">
                    Encuentra guitarras con carácter, diseño icónico y el sonido perfecto para tu próximo riff.
                </p>

                <div className="collection-layout mt-5">
                    <section className="collection-content">
                        <div className="row g-4">
                            {
                                guitars.map(guitar => (
                                    <Guitar
                                        key={guitar.id}
                                        guitar={guitar}
                                        addToCart={addToCart}
                                    />
                                ))
                            }
                        </div>
                    </section>

                    <aside className="collection-cart" aria-label="Resumen del carrito">
                        <Carrito
                            carrito={carrito}
                            total={total}
                            isEmpty={isEmpty}
                            itemCount={itemCount}
                            deleteGuitar={deleteGuitar}
                            vaciarCarrito={vaciarCarrito}
                            aumentarCantidad={aumentarCantidad}
                            disminuirCantidad={disminuirCantidad}
                        />
                    </aside>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App
