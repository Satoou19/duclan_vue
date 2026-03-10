<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Banner {
  id: number
  image: string
  title: string
  cta: string
}

defineProps<{
  banners: Banner[]
}>()

const currentIndex = ref(0)

let autoplayInterval: NodeJS.Timeout

onMounted(() => {
  // Auto-rotate banners every 5 seconds
  autoplayInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 3
  }, 5000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + 3) % 3
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % 3
}
</script>

<template>
  <div class="relative w-full h-64 md:h-96 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden">
    <!-- Slides -->
    <div class="relative w-full h-full">
      <div
        v-for="(banner, index) in banners"
        :key="banner.id"
        class="absolute inset-0 transition-opacity duration-500"
        :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
      >
        <img :src="banner.image" :alt="banner.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ banner.title }}</h2>
            <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              {{ banner.cta }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full w-10 h-10 flex items-center justify-center transition z-10"
      aria-label="Previous slide"
    >
      ◄
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full w-10 h-10 flex items-center justify-center transition z-10"
      aria-label="Next slide"
    >
      ►
    </button>

    <!-- Dots -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
      <button
        v-for="(_, index) in banners"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-all"
        :class="{ 'bg-white w-8': currentIndex === index, 'bg-white bg-opacity-50': currentIndex !== index }"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>
  </div>
</template>

<style scoped></style>
