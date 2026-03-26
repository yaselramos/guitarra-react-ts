import Header from "./components/Header"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"

import useCarrito from "./hooks/useCarrito"

function App() {
    const {
        guitars,
        carrito,
        total,
        isEmpty,
        dispatch,
    } = useCarrito()

    return (
        <>
            <Header
                carrito={carrito}
                dispatch={dispatch}
                total={total}
                isEmpty={isEmpty}
            />


            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {
                        guitars.map(guitar => (
                            <Guitar key={guitar.id}
                                guitar={guitar}
                                dispatch={dispatch}

                            />
                        ))
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App
