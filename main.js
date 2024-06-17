const app = Vue.createApp({
    data() {
        return {
            premium: true,
        //     product: 'Socks',
        //     brand: 'Vue Mastery',
        //     // Solution
        //     description: 'A warm fuzzy pair of socks.',
        // //    instock: true,
        //     inventory: 15,
        //     onSale: true,
        //     details: ['50% cotton','30% wool','20% polyester'],
        //     // variants: [
        //     //     { id: 1,color: 'green'},
        //     //     { id: 2,color: 'red'}
        //     // ],
            // cart : 0,
            cart: [],

        //     variants:[
        //         {
        //             id: 1, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50
        //         },
        //         {
        //             id: 2, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0
        //         }
        //     ],

        //     activeClass: false,
        //     selectedVariant: 0,

        }
    },
    methods: {
        // Emitting the event
        // updateCart(){
            // this.cart +=1

        // add id in cart
        updateCart(id){
            this.cart.push(id)
        },
    //     addToCart(){
    //         this.cart +=1
    //     },
    //     removeToCart(){
    //         if(this.cart > 0){
    //             this.cart -=1
    //         }
            
    //     },
    //     updateImage(variantImage){
    //         this.image = variantImage
    //     },
    //     updateVariant(index){
    //         this.selectedVariant = index
    //     }

    // },
    // computed:{
    //     title(){
    //         return this.brand + ' '+ this.product
    //     },

    //     image(){
    //         return this.variants[this.selectedVariant].image
    //     },
    //     // check quantity  if quantiy > 0 ? instock : ou-of-stock
    //     instock(){
    //         return this.variants[this.selectedVariant].quantity 
    //     }
     }
        
})
