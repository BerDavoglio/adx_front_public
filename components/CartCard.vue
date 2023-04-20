<template>
  <div>
    <div @click="removeCartFunc(obj)"
      class="border-gray-400 hover:bg-red-500 cursor-pointer border-2 rounded-md w-[95%] h-[10rem] mx-auto mt-6">
      <div class="m-4 grid grid-cols-4">
        <img :src="obj.img" class="rounded-md max-h-[8rem]">
        <div class="w-fit m-auto font-semibold text-xl my-auto">{{ obj.name }}</div>
        <div class="w-fit m-auto font-semibold text-xl my-auto">R${{ obj.price.toFixed(2) }}</div>
        <div class="w-fit m-auto font-semibold text-xl my-auto">Quantidade: {{ obj.quantity }}</div>
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

function removeCartFunc(objectSelected) {
  listCart.removeItem(objectSelected);
  listProduct.addOne(objectSelected.id);
  snackbar.add({
    type: 'error',
    text: 'Item removido com Sucesso!'
})
};

</script>
<script>
export default {
  name: 'CartCard',
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