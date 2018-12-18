import ItemComponent from './itemComponent';
import CarouselComponent from './CarouselComponent';
import ShoppingCartService from '../service/ShoppingCartService';
import BillingComponent from './BillingComponent';

export default class ShoppingCartComponent {
    constructor(parent) {
        this.parent = parent;
        this.shoppingCartService = new ShoppingCartService();
        this.billingAmount = 0;
        this.render();
    }

    render() {
        this.shoppingCartService.getDataShoppingCart().then((result) => {

            let markup =
                `<div class="wrap cf">
            <div class="table-cell">
                <h1 class="projTitle">Your shopping Bag</h1>
                <div class="heading cf">
                <h1>My Cart</h1>
                <!--<a href="#" class="continue" id="previewModal">Preview Cart</a>-->
            </div>
                <div class="cart">
                    <ul class="tableHead">
                        <li class="prodHeader"><span id="totalItem">${result.length}</span> Items</li>
                        <li>SIZE</li>
                        <li>QTY</li>
                        <li>PRICE</li>
                    </ul>
                    <ul class="cartWrap" id="itemsDiv">
                    </ul>
                </div>
    
                <div class="help">
                    <div>
                        <p>Need help</p>
                        <p>Or have questions?</p>
                    </div>
                    <div>
                        Call Customer Service at <br />1-800-555-5555
                    </div>
                    <div>
                        <a href="#">Chat with one of <br />our stylists</a>
                    </div>
                    <div>
                        <a href="#">See return <br />& exchange policy</a>
                    </div>
                </div>
    
                <div class="subtotal cf" id="billing">
                </div>
            </div>

            <div class="table-cell right-side">
            <section id="carousel" class="suggestions">
            </section>
            <div>
            </div>

            <div id="overlay"><div>
        </div>`;
            $(this.parent).html(markup);

            let doBilling = function (res) {
                this.billingAmount += res.quantity * res.price;
            }

            result.forEach(item => {
                new ItemComponent('#itemsDiv', item);
                doBilling.call(this, item);
            });
            new BillingComponent('#billing', this.billingAmount);
            new CarouselComponent('#carousel');
        });

    }
}