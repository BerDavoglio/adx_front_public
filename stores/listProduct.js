import { defineStore } from "pinia";

export const useListProductStore = defineStore("listProduct", {
  state: () => {
    return {
      listProduct: [],
    };
  },
  actions: {
    async loadData() {
      const { data } = await useFetch("https://adx-backend-berdavoglio.onrender.com/products/");
      this.listProduct = data.value;
    },
    async addOne(id) {
      let obj = this.listProduct.findIndex((x) => x._id === id);
      await useFetch("https://adx-backend-berdavoglio.onrender.com/products/" + id, {
        method: "PATCH",
        body: {
          stock: this.listProduct[obj].stock + 1,
        },
      });
    },
    async removeOne(id) {
      let obj = this.listProduct.findIndex((x) => x._id === id);
      await useFetch("https://adx-backend-berdavoglio.onrender.com/products/" + id, {
        method: "PATCH",
        body: {
          stock: this.listProduct[obj].stock - 1,
        },
      });   
    },
  },
});
