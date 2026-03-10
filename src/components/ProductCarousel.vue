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
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-gray-800">{{ title }}</h2>
      <div class="flex gap-2">
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm">
          ◄ Trước
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm">
          Sau ►
        </button>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 mb-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group"
      >
        <!-- Product Image -->
        <div class="relative bg-gray-100 h-32 md:h-40 overflow-hidden">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-110 transition" />

          <!-- Action Overlay -->
          <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
            <button class="bg-white bg-opacity-90 text-gray-800 p-2 rounded-lg hover:bg-opacity-100 transition text-lg" title="Print Quote">
              📄
            </button>
            <button class="bg-white bg-opacity-90 text-gray-800 p-2 rounded-lg hover:bg-opacity-100 transition text-lg" title="Quick View">
              👁️
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="p-2 md:p-3">
          <h3 class="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 mb-2 hover:text-blue-600 cursor-pointer transition">
            {{ product.name }}
          </h3>

          <!-- Info Row -->
          <div class="flex justify-between items-start gap-2 mb-3 pb-3 border-b border-gray-200 text-xs text-gray-600">
            <span class="text-gray-500">{{ product.code }}</span>
            <span class="font-bold text-gray-800">{{ product.price }}</span>
          </div>

          <!-- Add to Cart -->
          <div v-if="!showQuantity[product.id]" class="text-xs">
            <button
              @click="toggleQuantity(product.id)"
              class="w-full px-2 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-xs font-semibold"
            >
              🛒 Thêm vào giỏ
            </button>
          </div>

          <!-- Quantity Control -->
          <div v-else class="flex items-center justify-between gap-2 text-xs">
            <button class="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition">-</button>
            <input type="text" value="1" class="w-8 text-center border border-gray-300 rounded text-xs" />
            <button class="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition">+</button>
            <button class="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">✓</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand Logos Row (after each section) -->
    <div class="bg-gray-50 rounded-lg p-6 mb-4">
      <div class="text-center text-gray-500 text-sm">
        <span>Thương hiệu nổi bật | </span>
        <span>Ricoh | Toshiba | Canon | Sharp | Fuji-Xerox | Kyocera | HP | Samsung | Epson | Brother | Pantum</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
