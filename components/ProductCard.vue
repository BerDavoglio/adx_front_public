<template>
  <div>
    <div @click="addCartFunc(obj)"
      class="border-gray-400 hover:bg-green-500 cursor-pointer border-2 rounded-md w-[24rem] h-[28rem] mx-auto mt-6">
      <div class="m-4">
        <img :src="obj.img" class="rounded-md">
        <div class="w-fit m-auto font-semibold text-xl my-2">{{ obj.name }}</div>
        <div class="h-[6rem] m-auto text-justify overflow-y-scroll">
          {{ obj.description }}
        </div>
        <div class="mt-2 mx-auto w-fit">R${{ obj.price.toFixed(2) }} | Estoque: {{ obj.stock }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useListProductStore } from '@/stores/listProduct';
import { useListCartStore } from '@/stores/listCart';
const listProduct = useListProductStore();
const listCart = useListCartStore();

const snackbar = useSnackbar();

function addCartFunc(objectSelected) {
  listCart.addItem(objectSelected);
  listProduct.removeOne(objectSelected.id);
  snackbar.add({
    type: 'success',
    text: 'Item adicionado com Sucesso!'
})
};

</script>
<script>
export default {
  name: 'ProductCard',
  props: ['obj'],
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped></style>