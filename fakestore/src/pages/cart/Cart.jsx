import "./cart.css"
const Cart = () => {
    return (
        <>
            <header>
        <nav>

            <div className="lolo">
                <a href=""><i class="fas fa-bars"/></a>
                <a href="">MyStore</a>
            </div>

            <div className="lili">
                <a>03</a>
                <a href=""><i class="fas fa-cart-arrow-down"></i></a>

            </div>
        </nav>

    </header>

    <h1>
        <a>My cart</a>
    </h1>
    <section>

        <article>
            <img src="/html/download (1).png" alt="img"/>
            <p>Product 1</p>
            <p>90$</p>

        </article>
        <article>
            <img src="/html/download (1).png" alt="img"/>
            <p>Product 2</p>
            <p>80$</p>
        </article>
        <article>
            <img src="/html/download (1).png" alt="img"/>
            <p>Product 3</p>
            <p>70$</p>
        </article>
    </section>
    <hr />

    <section class="footer">
        <p>Total:270£</p>
    </section>
        </>
    )
}

export default Cart;