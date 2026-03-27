import { formatCurrency } from "../utils/formatCurrency"

type HeaderProps = {
        total: number,
        itemCount: number,
    }

function Header({
    total,
    itemCount,
}: HeaderProps) {
    const productLabel = itemCount === 1 ? "producto" : "productos"

    return (
        <header className="header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between align-items-center header-topbar">
                    <div className="col-8 col-md-3 header-brand">
                        <a href="index.html">
                            <img className="img-fluid header-logo" src="img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 d-flex align-items-start justify-content-end header-cart header-cart-wrapper">
                        <div className="header-mini-stats">
                            <span>{itemCount} {productLabel} en tu carrito</span>
                            <strong>{formatCurrency(total)}</strong>
                        </div>
                    </nav>
                </div>

                <div className="header-grid">
                    <div className="header-copy">
                        <p className="header-tag">Colección 2026</p>
                        <h1 className="text-white">Encuentra la guitarra que combine con tu estilo.</h1>
                        <p className="header-description">
                            Modelos seleccionados para estudio, escenario y sesiones creativas. Diseño atractivo,
                            gran sonido y compra rápida desde un carrito mucho más claro.
                        </p>

                        <div className="header-actions">
                            <a className="header-cta" href="#coleccion">Ver colección</a>
                        </div>
                    </div>

                    <div className="header-highlight-list">
                        <article className="header-highlight">
                            <p className="header-highlight__label">Selección</p>
                            <strong>12 guitarras</strong>
                            <span>Modelos listos para inspirarte.</span>
                        </article>
                        <article className="header-highlight">
                            <p className="header-highlight__label">Experiencia</p>
                            <strong>Carrito optimizado</strong>
                            <span>Más visual, más ordenado y fácil de usar.</span>
                        </article>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header