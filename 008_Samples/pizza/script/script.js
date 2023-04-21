
// const listOrder = [
//     {
//         imgUrl:"images/foto-pizza/easy-peasy.jpg",
//         name:" Чикен солодкий Чили",
//         ingridients:[
//             "Курка",
//             "Цибуля",
//             "Перець",
//             "Сир моцарклла"
//         ],
//         price:{
//             "small":100,
//             " medium":150,
//             "lounght":200
//         }
        

//     }
    // {
    //     imgUrl: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //     name: 'blue car1',
    //     price: 222,
    //     quality: 1
    // },
    // {
    //     imgUrl: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //     name: 'green car1',
    //     price: 211,
    //     quality: 1
    // },



// fetch('./script/pizza.json')
//     .then(res=>{
//        console.log(res);
// })



    //   class ProductForOrder {
    //     item =[];
    //      constructor(path){
    //        this.getProducts(path);
    //        this.render('.pizza-cards');
    // }
   
       
    
    //       render(container){
    //          const containerProducts = document.
    //          querySelector(container);
    //          this.items.forEach(element =>{
    //             const html = `
    //                          <div class="pizza-item">
    //                         <img src="${element.imgUrl}" alt="easy-peasy-pizza">
    //                         <b>${element.name}</b><br>
    //                         <span>${element. ingridients}</span>
    //                      <div>
    //                              <button class="buy-btn btn">
    //                                 Обрати
    //                             </button>
    //                              <span class="price">
    //                                  від ${element. price}грн
    //                              </span>
    //                         </div>
    //                     </div>`
    //                     containerProducts.insertAdjEstHTML('beforeend',html);

               
    //            });
            
    //    }

//         createCarInBasket(car, container){

//         const containerProducts = document.
//         querySelector(container);
//         console.log(container);
//         this.items.forEach(element => {
//             const html = `
//             <div class="pizza-item">
//             <img src="${element.imgUrl}" alt="easy-peasy-pizza">
//             <b>${element.name}</b><br>
//             <span>${element. ingridients}</span>
//             <div>
//                 <button class="buy-btn btn">
//                     Обрати
//                 </button>
//                 <span class="price">
//                     від ${element. price}грн
//                 </span>
//             </div>
//         </div>`
//             containerProducts.insertAdjEstHTML('beforeend',html);
            
//         });
//     }

    // getProducts(path){
  class ProductForOrder {
    constructor(path){
        fetch(path)
        .then(res=>{
            // console.log(res);
            return res.json()
        })
        .then(arrayItems=>{
            console.log(arrayItems);
            // this.items = arrayItems;
            // this.render('.pizza-cards')

        })
    }
}
 const pizza = new ProductForOrder('./scripts/pizza.json');