const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            product_link: 'https://www.camt.cmu.ac.th',
            product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut cum delectus? Dignissimos culpa ex ipsum sapiente corrupti dolore consectetur, dolor eos incidunt nesciunt velit fuga quia repellat ab. Repudiandae!',
            inStock: true,
            inventory: 11,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { 
                    id: 2234, 
                    color: 'green',
                    image: './assets/images/socks_green.jpg'
                },
                { 
                    id: 2235, 
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg'
                }
            ],
            cart: 0,
            sizes: ['S', 'M', 'L'],

            image: './assets/images/socks_green.jpg'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        buyProduct(){
            if(this.cart > this.inventory) 
                this.cart = this.inventory
                return alert('no more product: '+ this.inventory)
            this.inventory -= this.cart
            this.inStock = this.inventory > 0
        }
    }
})