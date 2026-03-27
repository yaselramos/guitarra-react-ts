import type { interfaceGuitar } from "../data/db"
import { formatCurrency } from "../utils/formatCurrency"

type GuitarPropr = {
    guitar: interfaceGuitar,
    addToCart: (item: interfaceGuitar) => void
}

function Guitar({ guitar, addToCart }: GuitarPropr) {
    const { name, image, description, price } = guitar


    return (
        <div className="col-md-6 col-lg-4 my-4">
            <article className="guitar-card">
                <div className="guitar-card__image-wrapper">
                    <img className="img-fluid guitar-card__image" src={`/img/${image}.jpg`} alt={name} />
                </div>
                <div className="guitar-card__body">
                    <p className="guitar-card__tag">Edición destacada</p>
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p className="guitar-card__description">{description}</p>
                    <p className="fw-black text-primary fs-3 guitar-card__price">{formatCurrency(price)}</p>
                    <button
                        type="button"
                        className="btn btn-dark w-100 guitar-card__button"
                        onClick={() => addToCart(guitar)}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </article>
        </div>
    )
}

export default Guitar
