<script setup lang="ts">
import { ref } from 'vue'
// import fontawesome icons

interface Product {
  id: number
  name: string
  code: string
  price: string
  image: string
  link?: string
}

defineProps<{
  title: string
  titleLink?: string
  products: Product[]
  subTabs?: { name: string; link: string }[]
}>()

const quantities = ref<Record<number, number>>({})
const showQuantity = ref<Record<number, boolean>>({})

const addToCart = (id: number) => {
  quantities.value[id] = 1
  showQuantity.value[id] = true
}

const increment = (id: number) => {
  quantities.value[id] = (quantities.value[id] || 1) + 1
}

const decrement = (id: number) => {
  if ((quantities.value[id] || 1) > 1) {
    quantities.value[id] = (quantities.value[id] || 1) - 1
  }
}
</script>

<template>
  <section class="mb-10 w-full bg-[#f2f3f4] px-1 py-4 sm:px-2 md:px-3">
    <div class="mb-4 flex items-center justify-between px-1">
      <h2 class="text-2xl font-bold text-[#4a4a4a]">
        <a v-if="titleLink" :href="titleLink" class="transition-all hover:text-[#1a8fd1]">{{
          title
        }}</a>
        <span v-else>{{ title }}</span>
      </h2>
      <div v-if="subTabs && subTabs.length" class="flex flex-wrap gap-2">
        <a
          v-for="tab in subTabs"
          :key="tab.name"
          :href="tab.link"
          class="rounded-full bg-[#1a8fd1] px-4 py-2 text-sm font-semibold text-white shadow transition-all hover:bg-[#0f75ad]"
        >
          {{ tab.name }}
        </a>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      <article
        v-for="product in products"
        :key="product.id"
        class="group relative overflow-hidden rounded-lg border border-gray-300 bg-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md"
      >
        <div
          class="relative bg-white overflow-hidden [perspective:1000px]"
          style="aspect-ratio: 1/1"
        >
          <a :href="product.link || '#'">
            <img
              :src="product.image"
              :alt="product.name"
              class="h-full w-full object-contain p-6 sm:p-4 transition-all duration-500 group-hover:scale-[1.14]"
            />
          </a>
          <div
            class="absolute bottom-0 left-1/2 z-10 flex h-12 -translate-x-1/2 items-center gap-3 rounded-t-lg bg-[#3b8fbd] px-6 text-white origin-bottom [transform:translateX(-50%)_rotateX(-90deg)] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:[transform:translateX(-50%)_rotateX(0deg)]"
          >
            <div class="relative group/icon">
              <button
                class="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-white text-white transition hover:bg-white hover:text-[#3b8fbd]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="h-4 w-4 fill-current"
                >
                  <path
                    d="M128 0C110.3 0 96 14.3 96 32V64H416V32C416 14.3 401.7 0 384 0H128zM96 96H64C28.7 96 0 124.7 0 160V320c0 35.3 28.7 64 64 64H96v64c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V384h32c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H416V96H96zm64 256H352v96H160V352z"
                  />
                </svg>
              </button>

              <span
                class="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-[#3b8fbd] px-3 py-1 text-xs text-white opacity-0 transition group-hover/icon:opacity-100"
              >
                In báo giá
              </span>
            </div>

            <div class="relative group/icon">
              <button
                class="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-white text-white transition hover:bg-white hover:text-[#3b8fbd]"
              >
                <i class="fa-regular fa-eye text-sm"></i>
              </button>

              <span
                class="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-[#3b8fbd] px-3 py-1 text-xs text-white opacity-0 transition group-hover/icon:opacity-100"
              >
                Xem nhanh
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-2 px-3 pb-4 pt-2">
          <a :href="product.link || '#'" class="block">
            <h3
              class="min-h-[48px] text-[13.5px] font-semibold leading-tight text-[#2f2f2f] transition-all hover:text-[#1a8fd1]"
            >
              {{ product.name }}
            </h3>
          </a>
          <div class="flex items-center justify-between text-[12px]">
            <span class="truncate text-gray-600">{{ product.code }}</span>
            <span class="whitespace-nowrap text-[14px] font-bold text-[#d60000]">{{
              product.price
            }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
