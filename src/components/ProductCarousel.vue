<script setup lang="ts">
import { ref } from 'vue'

interface Product {
  id: number
  name: string
  code: string
  price: string
  image: string
}

defineProps<{
  title: string
  products: Product[]
}>()

const showQuantity = ref<{ [key: number]: boolean }>({})

const toggleQuantity = (id: number) => {
  showQuantity.value[id] = !showQuantity.value[id]
}
</script>

<template>
  <div class="mb-12">
    <!-- Section Title -->
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800">{{ title }}</h2>
      <div class="flex gap-2">
        <button class="px-4 py-2 border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-600 transition text-xs md:text-sm font-medium">
          ◄ Trước
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-600 transition text-xs md:text-sm font-medium">
          Sau ►
        </button>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 mb-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-xl transition-all group"
      >
        <!-- Product Image -->
        <div class="relative bg-gray-100 h-40 md:h-48 overflow-hidden">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />

          <!-- Action Overlay -->
          <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
            <button class="bg-white text-gray-800 p-2.5 rounded-md hover:bg-blue-500 hover:text-white transition text-lg" title="Print Quote">
              📄
            </button>
            <button class="bg-white text-gray-800 p-2.5 rounded-md hover:bg-blue-500 hover:text-white transition text-lg" title="Quick View">
              👁️
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="p-3">
          <h3 class="text-xs md:text-sm font-semibold text-gray-800 line-clamp-3 mb-2 hover:text-blue-600 cursor-pointer transition min-h-8">
            {{ product.name }}
          </h3>

          <!-- Info Row -->
          <div class="flex justify-between items-start gap-1 mb-3 pb-2 border-b border-gray-200 text-xs">
            <span class="text-gray-500 truncate">{{ product.code }}</span>
            <span class="font-bold text-gray-800 text-right whitespace-nowrap ml-1">{{ product.price }}</span>
          </div>

          <!-- Add to Cart -->
          <div v-if="!showQuantity[product.id]">
            <button
              @click="toggleQuantity(product.id)"
              class="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition text-xs font-bold shadow-sm hover:shadow-md"
            >
              🛒 Thêm vào giỏ
            </button>
          </div>

          <!-- Quantity Control -->
          <div v-else class="flex items-center justify-between gap-1 text-xs">
            <button class="px-1.5 py-1 border border-gray-300 rounded-sm hover:bg-gray-100 transition font-semibold">−</button>
            <input type="text" value="1" class="w-7 h-7 text-center border border-gray-300 rounded-sm text-xs font-semibold" />
            <button class="px-1.5 py-1 border border-gray-300 rounded-sm hover:bg-gray-100 transition font-semibold">+</button>
            <button class="flex-1 px-2 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition font-bold">✓</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand Logos Row (after each section) -->
    <div class="bg-gray-50 rounded-md p-4 md:p-5 mb-8 border border-gray-200">
      <div class="text-center text-gray-600 text-xs md:text-sm">
        <span class="font-semibold">Thương hiệu nổi bật: </span>
        <span>Ricoh • Toshiba • Canon • Sharp • Fuji-Xerox • Kyocera • HP • Samsung • Epson • Brother • Pantum</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
