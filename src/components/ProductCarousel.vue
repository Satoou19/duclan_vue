<script setup lang="ts">
import { ref } from 'vue'

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

const quantities = ref<{ [key: number]: number }>({})
const showQuantity = ref<{ [key: number]: boolean }>({})

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
  <div class="mb-10">
    <!-- Section Title -->
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-lg md:text-xl font-bold text-gray-800">
        <a v-if="titleLink" :href="titleLink" class="hover:text-blue-600 transition">{{ title }}</a>
        <span v-else>{{ title }}</span>
      </h2>
      <div class="flex gap-1.5">
        <button
          class="px-3 py-1.5 border border-gray-300 rounded hover:border-blue-500 hover:text-blue-600 transition text-xs font-medium"
        >
          ◄ Trước
        </button>
        <button
          class="px-3 py-1.5 border border-gray-300 rounded hover:border-blue-500 hover:text-blue-600 transition text-xs font-medium"
        >
          Sau ►
        </button>
      </div>
    </div>

    <!-- Sub tabs if any -->
    <div v-if="subTabs && subTabs.length" class="flex gap-2 mb-4 flex-wrap">
      <a
        v-for="tab in subTabs"
        :key="tab.name"
        :href="tab.link"
        class="px-3 py-1 text-xs border border-gray-300 rounded hover:border-blue-500 hover:text-blue-600 transition"
        >{{ tab.name }}</a
      >
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-all group"
      >
        <!-- Product Image -->
        <div class="relative bg-gray-50 overflow-hidden" style="aspect-ratio: 1">
          <a :href="product.link || '#'">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-300"
            />
          </a>
          <!-- Hover overlay -->
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2"
          >
            <button
              class="bg-white text-gray-800 p-2 rounded hover:bg-blue-500 hover:text-white transition text-sm"
              title="In báo giá"
            >
              📄
            </button>
            <button
              class="bg-white text-gray-800 p-2 rounded hover:bg-blue-500 hover:text-white transition text-sm"
              title="Xem nhanh"
            >
              👁️
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="p-2.5">
          <a :href="product.link || '#'" class="block">
            <h3
              class="text-xs font-semibold text-gray-800 line-clamp-3 mb-2 hover:text-blue-600 cursor-pointer transition min-h-9"
            >
              {{ product.name }}
            </h3>
          </a>

          <div
            class="flex justify-between items-center gap-1 mb-2 pb-2 border-b border-gray-100 text-xs"
          >
            <span class="text-gray-400 truncate text-xs">{{ product.code }}</span>
            <span class="font-bold text-gray-800 text-right whitespace-nowrap text-xs">{{
              product.price
            }}</span>
          </div>

          <!-- Add to Cart -->
          <div v-if="!showQuantity[product.id]">
            <button
              @click="addToCart(product.id)"
              class="w-full py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded hover:from-blue-600 hover:to-blue-700 transition text-xs font-bold flex items-center justify-center gap-1"
            >
              + Thêm
            </button>
          </div>

          <!-- Quantity Control -->
          <div v-else class="flex items-center gap-1">
            <button
              @click="decrement(product.id)"
              class="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100 transition font-bold text-sm flex items-center justify-center"
            >
              −
            </button>
            <input
              type="text"
              :value="quantities[product.id] || 1"
              class="flex-1 h-7 text-center border border-gray-300 rounded text-xs font-semibold"
              readonly
            />
            <button
              @click="increment(product.id)"
              class="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100 transition font-bold text-sm flex items-center justify-center"
            >
              +
            </button>
            <button
              class="flex-1 h-7 bg-blue-500 text-white rounded hover:bg-blue-600 transition font-bold text-xs"
            >
              ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
