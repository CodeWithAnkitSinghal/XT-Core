import OverlayComponent from './OverlayComponent';

export default class ItemComponent{
    constructor(parent,item){
      this.parent=parent;
        this.imgUrl=item.imgUrl;
        this.title= item.title;
        this.style=item.style;
        this.color=item.color;
        this.quantity=item.quantity;
        this.size=item.size;
        this.price=item.price;
        this.id = item.id;

        this.render();
    }
    render(){
      const self={context: this};
      let markUp =
      `<li class="items">
        <div class="infoWrap">
          <div class="cartSection">
              <img src="${this.imgUrl}" alt="" class="itemImg" />
              <h2 class="itemName">${this.title}</h2>
              <h3 class="itemNumber">Style #: <span>${this.style}</span></h3>
              <h3 class="itemColor">Colour: <span>${this.color}</span></h3>
              <p class="border_right" id="edit_${this.id}"><a href="#">EDIT</a></p>
              <p class="border_right" id="remove_${this.id}"><a href="#">X REMOVE</a></p>
              <p><a href="#">SAVE FOR LATER</a></p>
          </div>

          <div class="prodTotal size">
              <p>${this.size}</p>
          </div>

          <div class="prodTotal quantity">
              <input type="number" for="quantity" value="${this.quantity}">
          </div>


          <div class="prodTotal price">
              <p>$${this.price}</p>
          </div>
      </div>
  </li>`;

      $(this.parent).append(markUp); 
      
      let openModal=function(){
        new OverlayComponent("#overlay",this.context.id,"edit");
      }

      let boundFunc=openModal.bind(self);

      $('#edit_'+`${this.id}`).on('click',boundFunc);

      $('#remove_'+`${this.id}`).click(function () {
        event.preventDefault();
        $(this).parent().parent().parent().hide(400);

        var total = '$' + (parseInt($('#subTotal')[0].innerHTML.slice(1)) - parseInt($('#remove_1').parent().parent().find('.price p')[0].innerText.slice(1))); 
        $('#subTotal')[0].innerHTML = total;
        $('#finalTotal')[0].innerHTML = total;
      })
      
    }
}