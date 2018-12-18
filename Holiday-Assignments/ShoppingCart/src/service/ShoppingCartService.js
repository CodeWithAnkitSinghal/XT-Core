class ShoppingCartService{
    constructor(){
        this.shoppingUrl='http://localhost:3000/items';
        this.carouselUrl = 'http://localhost:3000/Carousel';
    }
    async getDataShoppingCart(){
        try{
            const res = await fetch(this.shoppingUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async getDataCarousel(){
        try{
            const res = await fetch(this.carouselUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async getDataShoppingCartById(id){
        try{
            const res = await fetch(`${this.shoppingUrl}?id=${id}`);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async addData(item){
        try{
            const id= Math.floor(Math.random() * 100);
            item.id=id;
            
            const response = await fetch(this.shoppingUrl,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item) 
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }

    async editData(item){
        try{
            const response=await fetch(`${this.shoppingUrl}/${item.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }
}

export default ShoppingCartService;