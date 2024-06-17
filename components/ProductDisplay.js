app.component('product-display', {
    // props
    props: {
        premium:{
            type: Boolean,
            required: true,
        }
    },
    template: 
    /*html*/
      `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!-- <img v-bind:src="image"> -->
                    <img :src="image">
                </div>
                <div class="product-info">
                   

                    <!-- Chained Conditional Logic-->
                    <!-- <p v-if="inventory > 10 && onSale"> In Stock</p>
                <p v-else-if="inventory <=10 && inventory >0">Almost sold out!</p>
                <p v-else>Out of Stock</p>

                <p v-show="onSale">On sale</p> -->

                    <!-- display list -->
                    <!-- <ul>
                    <li v-for="detail in details ">{{detail}}</li>
                </ul> -->

                    <!-- <ul>
                <li v-for="variant in variants" :key="variant.id">
                    {{variant.color}}
                </li>
                </ul> -->
                    <h1>{{ product }}</h1>

                     <!-- v-if and v-else-->
                     <p v-if="instock"> In Stock</p>
                     <p v-else> Out of Stock </p>
                     <!-- show and hide->
                     <!-- <p v-show="instock">In Stock</p> -->

                     <p> Shipping: {{shipping}}</p>
                    <!-- title product brand -->
                    <p>{{title}}</p>

                    <!-- v-if and v-else-->
                    <!-- <p v-if="instock"> In Stock</p>
                <p v-else> Out of Stock </p> -->

                    <!-- display list -->
                    <ul>
                        <li v-for="detail in details ">{{detail}}</li>
                    </ul>

                    <!-- Mouseover Events and style bindling  and mutltiple class names-->
                    <!-- <div v-for="variant in variants" :key="variant.id" 
                    @mouseover="updateImage(variant.image)" 
                    class="color-circle"
                    :class="{active: activeClass}"

                    :style="{'background-color': variant.color}">
                   
                </div> -->

                    <!-- Computing Image & Quantity -->
                    <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                        class="color-circle" :style="{backgroundColor: variant.color}">
                    </div>

                    <!-- event handling-->
                    <button class="button" @click="addToCart" :class="{disabledButton : !instock}"> Add to Cart</button>
                    <button class="button" @click="removeToCart">Remove</button>

                </div>
                
            </div>

        </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 1, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            cart: 0,
        };
    },
    methods: {
        // addToCart() {
        //     this.cart += 1;
        // },

        // Emitting the event
        addToCart(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },


    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        instock() {
            return this.variants[this.selectedVariant].quantity;
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 2.99
        }
    },
});
