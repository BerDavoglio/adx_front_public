<template>
  <div>
    <div class="mx-[10%] mt-10 text-4xl font-bold">
      Total: R${{ listCart.total.toFixed(2) }}
    </div>
    <div class="mx-[10%] my-6">
      <div v-for="(obj) in listCart.listCart" v-bind:key="obj">
        <CartCard :obj="obj" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useListCartStore } from '@/stores/listCart';
const listCart = useListCartStore();
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>