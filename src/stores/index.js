import { defineStore } from "pinia";

export const useShoppingStore = defineStore("shopping", {
  state: () => {
    return {
      products: [],
      cartItems: [],
    };
  },
  getters: {
    getProducts: (state) => state.products,

    countCartItems() {
      return this.cartItems.length;
    },
    getCartItems() {
      return this.cartItems;
    },
  },
  actions: {
    async fetchProducts() {
      return fetch("https://dummyjson.com/products", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.products = json.products;
        });
    },

    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.products[index].quantity += 1;
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== item.id
      );
    },
  },
});
