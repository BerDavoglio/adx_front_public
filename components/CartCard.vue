<template>
  <div>
    <div
      class="border-gray-400 border-2 rounded-md w-[95%] h-[10rem] mx-auto mt-6">
      <div class="m-4 grid grid-cols-5">
        <img :src="obj.img" class="rounded-md max-h-[8rem]">
        <div class="w-fit m-auto font-semibold text-xl my-auto">{{ obj.name }}</div>
        <div class="w-fit m-auto font-semibold text-xl my-auto">R${{ obj.price.toFixed(2) }}</div>
        <div class="w-fit m-auto font-semibold text-xl my-auto">Quantidade: {{ obj.quantity }}</div>
        <div class="w-fit m-auto my-auto">
          <div @click="addCartFunc(obj)" class="cursor-pointer rounded-sm w-24 h-10 bg-green-500 m-4">
            <div class="w-fit pt-2 m-auto">Adicionar</div>
          </div>
          <div @click="removeCartFunc(obj)" class="cursor-pointer rounded-sm w-24 h-10 bg-red-500 m-4">
            <div class="w-fit pt-2 m-auto">Remover</div>
          </div>
        </div>
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