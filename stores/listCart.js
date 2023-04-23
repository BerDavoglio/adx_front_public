import { defineStore } from "pinia";

export const useListCartStore = defineStore("listCart", {
  state: () => {
    return {
      listCart: [],
    };
  },
  getters: {
    total: (state) => {
      let totalValue = 0;
      state.listCart.map((i) => {
        totalValue += (i.price * i.stock);
      });
      return totalValue;
    },
  },
  actions: {
    addItem(objectSelected) {
      let obj = this.listCart.findIndex((x) => x._id === objectSelected._id);
      if (obj === -1) {
        this.listCart.push({
          _id: objectSelected._id,
          name: objectSelected.name,
          description: objectSelected.description,
          price: objectSelected.price,
          img: objectSelected.img,
          stock: 1,
        });
      } else {
        this.listCart[obj]["stock"] = this.listCart[obj]["stock"] + 1;
      }
    },
    removeItem(objectSelected) {
      let obj = this.listCart.findIndex((x) => x._id === objectSelected._id);
      this.listCart[obj]["stock"] = this.listCart[obj]["stock"] - 1;
      if (this.listCart[obj]["stock"] == 0) {
        this.listCart.splice(obj, 1);
      }
    },
  },
});
