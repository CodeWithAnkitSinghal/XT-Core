import OverlayComponent from './OverlayComponent';
import ShoppingCartService from '../service/ShoppingCartService';
var self;
export default class CarouselComponent{
    constructor(parent){
        this.parent=parent;
        this.slideIndex=1;
        this.shoppingCartService = new ShoppingCartService();
        this.render();
        self=this;
    }
    render(){
        this.shoppingCartService.getDataCarousel().then((result)=>{
        let markUp=`<div class="slideshow-container">
        <header class="carouselHead">TAKE A LOOK AT</header>
        <div id="carouselImage"></div>
       
            <a class="prev" id="prevButton">&#10094;</a>
            <a class="next" id="nextButton">&#10095;</a>
            <div class ="viewDetailContainer">
                <button id="viewDetails" class="viewDetails">View Details</button>
            </div>
            
        </div>`;
        $(this.parent).append(markUp);

        result.forEach(carouselImage => {
            
            let html=`<div class="mySlides fade">
              <div class="imageDiv">
                <img  class="imageClass" src=${carouselImage.imgUrl} >
              </div>
            <div class="carouselPrice">$${carouselImage.price}</div>`;
            $('#carouselImage').append(html);
        });
        this.showSlides(1);
        $('#prevButton').on('click',{"counter":-1},self.plusSlides);
        $('#nextButton').on('click',{"counter":1},self.plusSlides);
        $('#viewDetails').on('click',self.openModal);
    });
    }

    openModal(){
        let dataCounter=self.slideIndex-1;
        new OverlayComponent("#overlay",dataCounter,"add");

    }
    plusSlides(n) {
        self.showSlides(self.slideIndex += n.data.counter);
        }
    currentSlide(n) {
        self.showSlides(self.slideIndex = n.data.counter);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {self.slideIndex = 1} 
        if (n < 1) {self.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[self.slideIndex-1].style.display = "block"; 
    }   
}