<template>
  <div>
    <div class="grid py-4 grid-cols-2 m-2">
      <div class="mx-auto">
        <div class="text-2xl">
          <div class="font-semibold">Mini E-Commerce</div>
        </div>
        <div class="w-10 m-auto">ADX</div>
      </div>
      <div class='grid m-auto cursor-pointer grid-cols-4'>
        <NuxtLink to="/">
          <div class="
          w-24 px-[25%]
          border-r-2 font-bold
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white
          py-4
          border-l-2">
            Home
          </div>
        </NuxtLink>
        <NuxtLink to="/products">
          <div class="
          w-24 px-[15%]
          border-r-2 font-bold
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white
          py-4">
            Produtos
          </div>
        </NuxtLink>
        <NuxtLink to="/cart">
          <div class="
          w-24 px-[18%]
          border-r-2 font-bold
          hover:bg-gray-300
          active:bg-gray-400
          active:text-white
          py-4">
            Carrinho
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="h-0.5 bg-gray-500 w-[80%] mx-auto mb-4" />
    <slot />
  </div>
</template>

<script setup>
</script>