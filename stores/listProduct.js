import { defineStore } from "pinia";

export const useListProductStore = defineStore("listProduct", {
  state: () => {
    return {
      listProduct: [
        {
          id: 1,
          name: "Produto 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla dapibus ante, at aliquam justo ultricies ut. In non diam nisl. Suspendisse ornare felis purus, nec posuere nisl mattis a. Morbi in eleifend mi. Nam feugiat fringilla risus, quis imperdiet augue rutrum sit amet. Nulla ut leo id felis lacinia faucibus. Duis sit amet porta turpis. Vestibulum euismod eget velit ac aliquam. Aenean vestibulum et nibh eget pharetra. Mauris pellentesque posuere enim, mattis venenatis arcu ultrices a. Suspendisse mollis quam est, bibendum interdum sem accumsan vel. Donec velit ante, malesuada eu ipsum ac, scelerisque elementum ligula. In vestibulum velit suscipit, viverra velit ultricies, facilisis urna.",
          price: 10,
          stock: 10,
          img: "https://dummyimage.com/600x400/483291/fff",
        },
        {
          id: 2,
          name: "Produto 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla dapibus ante, at aliquam justo ultricies ut. In non diam nisl. Suspendisse ornare felis purus, nec posuere nisl mattis a. Morbi in eleifend mi. Nam feugiat fringilla risus, quis imperdiet augue rutrum sit amet. Nulla ut leo id felis lacinia faucibus. Duis sit amet porta turpis. Vestibulum euismod eget velit ac aliquam. Aenean vestibulum et nibh eget pharetra. Mauris pellentesque posuere enim, mattis venenatis arcu ultrices a. Suspendisse mollis quam est, bibendum interdum sem accumsan vel. Donec velit ante, malesuada eu ipsum ac, scelerisque elementum ligula. In vestibulum velit suscipit, viverra velit ultricies, facilisis urna.",
          price: 20,
          stock: 15,
          img: "https://dummyimage.com/600x400/837635/fff",
        },
        {
          id: 3,
          name: "Produto 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla dapibus ante, at aliquam justo ultricies ut. In non diam nisl. Suspendisse ornare felis purus, nec posuere nisl mattis a. Morbi in eleifend mi. Nam feugiat fringilla risus, quis imperdiet augue rutrum sit amet. Nulla ut leo id felis lacinia faucibus. Duis sit amet porta turpis. Vestibulum euismod eget velit ac aliquam. Aenean vestibulum et nibh eget pharetra. Mauris pellentesque posuere enim, mattis venenatis arcu ultrices a. Suspendisse mollis quam est, bibendum interdum sem accumsan vel. Donec velit ante, malesuada eu ipsum ac, scelerisque elementum ligula. In vestibulum velit suscipit, viverra velit ultricies, facilisis urna.",
          price: 30,
          stock: 20,
          img: "https://dummyimage.com/600x400/203948/fff",
        },
        {
          id: 4,
          name: "Produto 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla dapibus ante, at aliquam justo ultricies ut. In non diam nisl. Suspendisse ornare felis purus, nec posuere nisl mattis a. Morbi in eleifend mi. Nam feugiat fringilla risus, quis imperdiet augue rutrum sit amet. Nulla ut leo id felis lacinia faucibus. Duis sit amet porta turpis. Vestibulum euismod eget velit ac aliquam. Aenean vestibulum et nibh eget pharetra. Mauris pellentesque posuere enim, mattis venenatis arcu ultrices a. Suspendisse mollis quam est, bibendum interdum sem accumsan vel. Donec velit ante, malesuada eu ipsum ac, scelerisque elementum ligula. In vestibulum velit suscipit, viverra velit ultricies, facilisis urna.",
          price: 40,
          stock: 25,
          img: "https://dummyimage.com/600x400/109654/fff",
        },
        {
          id: 5,
          name: "Produto 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla dapibus ante, at aliquam justo ultricies ut. In non diam nisl. Suspendisse ornare felis purus, nec posuere nisl mattis a. Morbi in eleifend mi. Nam feugiat fringilla risus, quis imperdiet augue rutrum sit amet. Nulla ut leo id felis lacinia faucibus. Duis sit amet porta turpis. Vestibulum euismod eget velit ac aliquam. Aenean vestibulum et nibh eget pharetra. Mauris pellentesque posuere enim, mattis venenatis arcu ultrices a. Suspendisse mollis quam est, bibendum interdum sem accumsan vel. Donec velit ante, malesuada eu ipsum ac, scelerisque elementum ligula. In vestibulum velit suscipit, viverra velit ultricies, facilisis urna.",
          price: 50,
          stock: 30,
          img: "https://dummyimage.com/600x400/132897/fff",
        },
        {
          id: 6,
          name: "Produto 6",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla dapibus ante, at aliquam justo ultricies ut. In non diam nisl. Suspendisse ornare felis purus, nec posuere nisl mattis a. Morbi in eleifend mi. Nam feugiat fringilla risus, quis imperdiet augue rutrum sit amet. Nulla ut leo id felis lacinia faucibus. Duis sit amet porta turpis. Vestibulum euismod eget velit ac aliquam. Aenean vestibulum et nibh eget pharetra. Mauris pellentesque posuere enim, mattis venenatis arcu ultrices a. Suspendisse mollis quam est, bibendum interdum sem accumsan vel. Donec velit ante, malesuada eu ipsum ac, scelerisque elementum ligula. In vestibulum velit suscipit, viverra velit ultricies, facilisis urna.",
          price: 60,
          stock: 35,
          img: "https://dummyimage.com/600x400/321890/fff",
        },
        {
          id: 7,
          name: "Produto 7",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla dapibus ante, at aliquam justo ultricies ut. In non diam nisl. Suspendisse ornare felis purus, nec posuere nisl mattis a. Morbi in eleifend mi. Nam feugiat fringilla risus, quis imperdiet augue rutrum sit amet. Nulla ut leo id felis lacinia faucibus. Duis sit amet porta turpis. Vestibulum euismod eget velit ac aliquam. Aenean vestibulum et nibh eget pharetra. Mauris pellentesque posuere enim, mattis venenatis arcu ultrices a. Suspendisse mollis quam est, bibendum interdum sem accumsan vel. Donec velit ante, malesuada eu ipsum ac, scelerisque elementum ligula. In vestibulum velit suscipit, viverra velit ultricies, facilisis urna.",
          price: 70,
          stock: 40,
          img: "https://dummyimage.com/600x400/574830/fff",
        },
      ],
    };
  },
  actions: {
    addOne(id) {
      this.listProduct.map((i) => {
        if (i.id === id) {
          i.stock = i.stock + 1;
        }
      })
    },
    removeOne(id) {
      this.listProduct.map((i) => {
        if (i.id === id) {
          i.stock = i.stock - 1;
        }
      })
    }
  },
});
