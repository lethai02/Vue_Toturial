const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            // Solution
            description: 'A warm fuzzy pair of socks.',
            // Solution
            image: './assets/images/socks_blue.jpg',
            instock: true,
            inventory: 15,
            onSale: true,
            details: ['50% cotton','30% wool','20% polyester'],
            variants: [
                { id: 1,color: 'green'},
                { id: 2,color: 'red'}
            ],
            cart : 0,
        }
    },
    methods: {
        addToCart(){
            this.cart +=1
        }
    }
})
