<template>
  <div>
    <div @click="addCartFunc(obj)"
      :class="['border-gray-400 cursor-pointer border-2 rounded-md w-[24rem] mx-auto mt-6 ' + (obj.stock === 0 ? 'bg-red-500' : 'hover:bg-green-500')]">
      <div class="m-4">
        <img :src="obj.img" class="rounded-md">
        <div class="w-fit m-auto font-semibold text-xl my-2">{{ obj.name }}</div>
        <div class="mt-2 mx-auto w-fit">R${{ obj.price.toFixed(2) }} | Estoque: {{ obj.stock }}</div>
        <div class="mt-2 mx-auto w-fit">Tamanhos: <strong>{{ obj.size }}</strong></div>
        <div class="mt-2 mx-auto w-fit">Cores: <strong>{{ obj.color }}</strong></div>
        <div class="mt-2 mx-auto w-fit">Materiais: <strong>{{ obj.material }}</strong></div>
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

async function addCartFunc(objectSelected) {
  if (objectSelected.stock > 0) {
    listCart.addItem(objectSelected);
    await listProduct.removeOne(objectSelected._id)
      .then(async () => { 
        await useListProductStore().loadData();
      });
    snackbar.add({
      type: 'success',
      text: 'Item adicionado com Sucesso!'
    })
  } else {
    snackbar.add({
      type: 'error',
      text: 'Produto fora de estoque!'
    })
  }
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