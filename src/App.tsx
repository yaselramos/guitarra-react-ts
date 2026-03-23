import Header from "./components/Header"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"

import useCarrito from "./hooks/useCarrito"

function App() {
  const {
    guitars, 
    carrito, 
    addCarrito, 
    deletedGuitar,
     vaciarCarrito, 
     aumentarCantidad, 
     disminuirCantidad ,
     total,
     isEmpty
    } = useCarrito()

    return (
        <>
            <Header 
            carrito={carrito} 
             deletedGuitar={deletedGuitar}
             vaciarCarrito={vaciarCarrito}
             aumentarCantidad={aumentarCantidad}
             disminuirCantidad={disminuirCantidad}
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
                                addCarrito={addCarrito}
                               
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
