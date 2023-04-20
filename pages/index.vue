<template>
  <div class="grid grid-cols-3 mx-[10%] my-6">
    <div v-for="(obj) in listProduct" v-bind:key="obj">
      <ProductCard :obj="obj" />
    </div>
  </div>
</template>

<script setup>
import { useListProductStore } from '@/stores/listProduct';
const listProduct = useListProductStore().listProduct;
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>