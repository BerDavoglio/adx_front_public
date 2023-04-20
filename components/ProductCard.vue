<template>
  <div>
    <div
      class="border-gray-400 hover:bg-gray-200 cursor-pointer border-2 rounded-md w-[24rem] h-[28rem] mx-auto mt-6 p-4">
      <img :src="obj.img" class="rounded-md">
      <div class="w-fit m-auto font-semibold text-xl my-2">{{ obj.name }}</div>
      <div class=" h-[6rem] m-auto text-justify overflow-y-scroll">
        {{ obj.description }}
      </div>
      <div class="mt-2 mx-auto w-fit">R${{ obj.price.toFixed(2) }} | Estoque: {{ obj.stock }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['obj'],
  data() {
    return {}
  },
}
</script>

<style scoped></style>