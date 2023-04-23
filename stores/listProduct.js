import { defineStore } from "pinia";

export const useListProductStore = defineStore("listProduct", {
  state: () => {
    return {
      listProduct: [],
    };
  },
  actions: {
    async loadData() {
      const { data } = await useFetch("http://127.0.0.1:3000/products/");
      this.listProduct = data.value;
    },
    async addOne(id) {
      let obj = this.listProduct.findIndex((x) => x._id === id);
      await useFetch("http://127.0.0.1:3000/products/" + id, {
        method: "PATCH",
        body: {
          stock: this.listProduct[obj].stock + 1,
        },
      });
    },
    async removeOne(id) {
      let obj = this.listProduct.findIndex((x) => x._id === id);
      await useFetch("http://127.0.0.1:3000/products/" + id, {
        method: "PATCH",
        body: {
          stock: this.listProduct[obj].stock - 1,
        },
      });   
    },
  },
});
