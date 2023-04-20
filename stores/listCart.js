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
        totalValue += (i.price * i.quantity);
      });
      return totalValue;
    },
  },
  actions: {
    addItem(objectSelected) {
      let obj = this.listCart.findIndex((x) => x.id === objectSelected.id);
      if (obj === -1) {
        this.listCart.push({
          id: objectSelected.id,
          name: objectSelected.name,
          description: objectSelected.description,
          price: objectSelected.price,
          img: objectSelected.img,
          quantity: 1,
        });
      } else {
        this.listCart[obj]["quantity"] = this.listCart[obj]["quantity"] + 1;
      }
    },
    removeItem(objectSelected) {
      let obj = this.listCart.findIndex((x) => x.id === objectSelected.id);
      this.listCart[obj]["quantity"] = this.listCart[obj]["quantity"] - 1;
      if (this.listCart[obj]["quantity"] == 0) {
        this.listCart.splice(obj, 1);
      }
    },
  },
});
