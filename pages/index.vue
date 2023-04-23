<template>
  <div class="grid grid-cols-3 mx-[10%] my-6">
    <div v-for="(obj) in listProduct" v-bind:key="listProduct">
      <ProductCard :obj="obj" />
    </div>
  </div>
</template>

<script setup>
import { useListProductStore } from '@/stores/listProduct';
const listProduct = useListProductStore().listProduct;

definePageMeta({
  middleware: ['product-guard']
})
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>