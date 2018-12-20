!function(i){var t={};function n(e){if(t[e])return t[e].exports;var s=t[e]={i:e,l:!1,exports:{}};return i[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=i,n.c=t,n.d=function(i,t,e){n.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},n.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,t){if(1&t&&(i=n(i)),8&t)return i;if(4&t&&"object"==typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var s in i)n.d(e,s,function(t){return i[t]}.bind(null,s));return e},n.n=function(i){var t=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(t,"a",t),t},n.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},n.p="",n(n.s=0)}([function(i,t,n){"use strict";n.r(t);var e,s=class{constructor(){this.shoppingUrl="http://localhost:3000/items",this.carouselUrl="http://localhost:3000/Carousel"}async getDataShoppingCart(){try{return(await fetch(this.shoppingUrl)).json()}catch(i){console.log(i)}}async getDataCarousel(){try{return(await fetch(this.carouselUrl)).json()}catch(i){console.log(i)}}async getDataShoppingCartById(i){try{return(await fetch(`${this.shoppingUrl}?id=${i}`)).json()}catch(i){console.log(i)}}async addData(i){try{const t=Math.floor(100*Math.random());return i.id=t,(await fetch(this.shoppingUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()}catch(i){console.log(i)}}async editData(i){try{return(await fetch(`${this.shoppingUrl}/${i.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()}catch(i){console.log(i)}}};class a{constructor(i,t,n){console.log("Overlay window constructor"),this.parent=i,this.dataCounter=t,this.operation=n,this.shoppingCartService=new s,this.render(),self=this}render(){this.getData().then(i=>{let t,n,e;"add"==this.operation?(e="ADD TO BAG",t=i[this.dataCounter]):(e="EDIT",t=i[0]),n=`<button class="overlayButton">${e}</button>`;let s=`<div class="overlay">\n            \n            <div class="overlay-content">\n            <span class="close">&times;</span>\n            <div class="overlaySections">\n                    <section class="overlayLeft">\n                    <div class="overlayLeftContent"> \n                        <div class="overlayTitle">${t.title}</div>\n                        <div class="overlayPrice">\n                            <div>$</div>${t.price}\n                        </div>\n                        <div class="sizeandqty">\n                            <div class="overlaySize">SIZE\n                            <select id="size_${this.id}">\n                                <option value="Small">Small</option>\n                                <option value="Medium">Medium</option>\n                                <option value="Large">Large</option>\n                            </select>\n                            </div>\n                            <div class="overlayQty">QTY\n                                <select id="quantity_${this.id}">\n                                    <option>1</option>\n                                    <option>2</option>\n                                    <option>3</option>\n                                    <option>4</option>\n                                </select>\n                            </div>\n                        </div>\n                        \n                        <div class="overlayOperationButton">\n                            ${n}\n                        </div>\n                        \n                        <div>\n                            <a class="overlayAnchor">See product details</a>\n                        </div>\n                        </div>\n                    </section>\n                    <section class="overlayRight">\n                        <div class= "overlayImage">\n                            <img src="${t.imgUrl}"></img>\n                        </div>\n                    </section>\n                    </div>\n                    </div>\n                </div>`;$(this.parent)[0].innerHTML=s,"add"==this.operation?$(".overlayButton").on("click",{obj:t},this.addProduct):$(".overlayButton").on("click",{obj:t},this.editProduct),$(".close").on("click",function(){$(".overlay")[0].style.display="none"})})}addProduct(i){i.data.obj.size=$("#size_"+`${self.id}`).val(),i.data.obj.quantity=$("#quantity_"+`${self.id}`).val(),self.shoppingCartService.addData(i.data.obj).then()}editProduct(i){i.data.obj.size=$("#size_"+`${self.id}`).val(),i.data.obj.quantity=$("#quantity_"+`${self.id}`).val(),self.shoppingCartService.editData(i.data.obj,this.dataCounter)}getData(){return"add"==this.operation?this.shoppingCartService.getDataCarousel():this.shoppingCartService.getDataShoppingCartById(this.dataCounter)}}class o{constructor(i,t){this.parent=i,this.imgUrl=t.imgUrl,this.title=t.title,this.style=t.style,this.color=t.color,this.quantity=t.quantity,this.size=t.size,this.price=t.price,this.id=t.id,this.render()}render(){const i={context:this};let t=`<li class="items">\n        <div class="infoWrap">\n          <div class="cartSection">\n              <img src="${this.imgUrl}" alt="" class="itemImg" />\n              <h2 class="itemName">${this.title}</h2>\n              <h3 class="itemNumber">Style #: <span>${this.style}</span></h3>\n              <h3 class="itemColor">Colour: <span>${this.color}</span></h3>\n              <p class="border_right" id="edit_${this.id}"><a href="#">EDIT</a></p>\n              <p class="border_right" id="remove_${this.id}"><a href="#">X REMOVE</a></p>\n              <p><a href="#">SAVE FOR LATER</a></p>\n          </div>\n\n          <div class="prodTotal size">\n              <p>${this.size}</p>\n          </div>\n\n          <div class="prodTotal quantity">\n              <input type="number" for="quantity" value="${this.quantity}">\n          </div>\n\n\n          <div class="prodTotal price">\n              <p>$${this.price}</p>\n          </div>\n      </div>\n  </li>`;$(this.parent).append(t);let n=function(){new a("#overlay",this.context.id,"edit")}.bind(i);$("#edit_"+`${this.id}`).on("click",n),$("#remove_"+`${this.id}`).click(function(){event.preventDefault(),$(this).parent().parent().parent().hide(400);var i="$"+(parseInt($("#subTotal")[0].innerHTML.slice(1))-parseInt($("#remove_1").parent().parent().find(".price p")[0].innerText.slice(1)));$("#subTotal")[0].innerHTML=i,$("#finalTotal")[0].innerHTML=i})}}class l{constructor(i){this.parent=i,this.slideIndex=1,this.shoppingCartService=new s,this.render(),e=this}render(){this.shoppingCartService.getDataCarousel().then(i=>{$(this.parent).append('<div class="slideshow-container">\n        <header class="carouselHead">TAKE A LOOK AT</header>\n        <div id="carouselImage"></div>\n       \n            <a class="prev" id="prevButton">&#10094;</a>\n            <a class="next" id="nextButton">&#10095;</a>\n            <div class ="viewDetailContainer">\n                <button id="viewDetails" class="viewDetails">View Details</button>\n            </div>\n            \n        </div>'),i.forEach(i=>{let t=`<div class="mySlides fade">\n              <div class="imageDiv">\n                <img  class="imageClass" src=${i.imgUrl} >\n              </div>\n            <div class="carouselPrice">$${i.price}</div>`;$("#carouselImage").append(t)}),this.showSlides(1),$("#prevButton").on("click",{counter:-1},e.plusSlides),$("#nextButton").on("click",{counter:1},e.plusSlides),$("#viewDetails").on("click",e.openModal)})}openModal(){let i=e.slideIndex-1;new a("#overlay",i,"add")}plusSlides(i){e.showSlides(e.slideIndex+=i.data.counter)}currentSlide(i){e.showSlides(e.slideIndex=i.data.counter)}showSlides(i){var t,n=document.getElementsByClassName("mySlides");for(i>n.length&&(e.slideIndex=1),i<1&&(e.slideIndex=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[e.slideIndex-1].style.display="block"}}class r{constructor(i,t){this.parent=i,this.billingAmount=t,this.render()}render(){$(this.parent).append(`\n        <section id="payment">\n        <section id="promotion">\n            <div class="labelContainer">\n                <label>ENTER PROMOTION CODE OR GIFT CARD</label>\n            </div>\n            <input type="textbox">\n            <button>Apply</button>\n        </section>\n        <section class="pricebox">\n                <div class="insidePrice">\n                    <div class="leftCol">SUBTOTAL</div>\n                    <div class="rightCol" id="subTotal">$${this.billingAmount}</div>\n                </div>\n                <div class="insidePrice">\n                    <div class="leftCol" >PROMOTION CODE JF10 APPLIED</div>\n                    <div class="rightCol">-$0.0</div>\n                </div>\n                <div class="insidePrice borderB1">\n                    <div class="leftCol"><p>ESTIMATED SHIPPING*</p>\n                        <p class="ship-text">You qualify for free shipping because your order is over $50*.\n                        </p>\n                    </div>\n                    <div class="rightCol">FREE</div>\n                </div>\n                <div class="insidePrice">\n                    <div class="leftCol borderB5">\n                        <p>Estimated Total</p>\n                        <p class="ship-text">Tax will be applied during checkout</p>\n                    </div>\n                    <div class="rightCol borderB5" id="finalTotal">$${this.billingAmount}</div>\n                </div>\n                        <div class="footerButtons">\n                                <div class="btnwrap">\n                                    <a href="#" class="checkout">CHECKOUT</a>\n                                    <a href="#" class="Shipping">Continue Shopping</a>\n                                </div>\n                                <p><img src="src/images/lock.jpeg"></img>Secure Checkout Shopping is always safe &amp; Secure</p>\n                            </div>\n        </section>\n    </section>\n        `)}}class d{constructor(i){this.parent=i,this.shoppingCartService=new s,this.billingAmount=0,this.render()}render(){this.shoppingCartService.getDataShoppingCart().then(i=>{let t=`<div class="wrap cf">\n            <div class="table-cell">\n                <h1 class="projTitle">Your shopping Bag</h1>\n                <div class="heading cf">\n                <h1>My Cart</h1>\n                \x3c!--<a href="#" class="continue" id="previewModal">Preview Cart</a>--\x3e\n            </div>\n                <div class="cart">\n                    <ul class="tableHead">\n                        <li class="prodHeader"><span id="totalItem">${i.length}</span> Items</li>\n                        <li>SIZE</li>\n                        <li>QTY</li>\n                        <li>PRICE</li>\n                    </ul>\n                    <ul class="cartWrap" id="itemsDiv">\n                    </ul>\n                </div>\n    \n                <div class="help">\n                    <div>\n                        <p>Need help</p>\n                        <p>Or have questions?</p>\n                    </div>\n                    <div>\n                        Call Customer Service at <br />1-800-555-5555\n                    </div>\n                    <div>\n                        <a href="#">Chat with one of <br />our stylists</a>\n                    </div>\n                    <div>\n                        <a href="#">See return <br />& exchange policy</a>\n                    </div>\n                </div>\n    \n                <div class="subtotal cf" id="billing">\n                </div>\n            </div>\n\n            <div class="table-cell right-side">\n            <section id="carousel" class="suggestions">\n            </section>\n            <div>\n            </div>\n\n            <div id="overlay"><div>\n        </div>`;$(this.parent).html(t);i.forEach(i=>{new o("#itemsDiv",i),function(i){this.billingAmount+=i.quantity*i.price}.call(this,i)}),new r("#billing",this.billingAmount),new l("#carousel")})}}new class{constructor(){this.shoppingCart=new d(".container")}}}]);