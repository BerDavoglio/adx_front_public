import { useListProductStore } from "@/stores/listProduct";

export default defineNuxtRouteMiddleware (async (to, from) => {
  await useListProductStore().loadData()
})
