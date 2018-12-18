export default class BillingComponent {
    constructor(parent, billingAmount) {
        this.parent = parent;
        this.billingAmount = billingAmount;
        this.render();
    }

    render() {
        $(this.parent).append(`
        <section id="payment">
        <section id="promotion">
            <div class="labelContainer">
                <label>ENTER PROMOTION CODE OR GIFT CARD</label>
            </div>
            <input type="textbox">
            <button>Apply</button>
        </section>
        <section class="pricebox">
                <div class="insidePrice">
                    <div class="leftCol">SUBTOTAL</div>
                    <div class="rightCol" id="subTotal">$${this.billingAmount}</div>
                </div>
                <div class="insidePrice">
                    <div class="leftCol" >PROMOTION CODE JF10 APPLIED</div>
                    <div class="rightCol">-$0.0</div>
                </div>
                <div class="insidePrice borderB1">
                    <div class="leftCol"><p>ESTIMATED SHIPPING*</p>
                        <p class="ship-text">You qualify for free shipping because your order is over $50*.
                        </p>
                    </div>
                    <div class="rightCol">FREE</div>
                </div>
                <div class="insidePrice">
                    <div class="leftCol borderB5">
                        <p>Estimated Total</p>
                        <p class="ship-text">Tax will be applied during checkout</p>
                    </div>
                    <div class="rightCol borderB5" id="finalTotal">$${this.billingAmount}</div>
                </div>
                        <div class="footerButtons">
                                <div class="btnwrap">
                                    <a href="#" class="checkout">CHECKOUT</a>
                                    <a href="#" class="Shipping">Continue Shopping</a>
                                </div>
                                <p><img src="src/images/lock.jpeg"></img>Secure Checkout Shopping is always safe &amp; Secure</p>
                            </div>
        </section>
    </section>
        `);
    }
}