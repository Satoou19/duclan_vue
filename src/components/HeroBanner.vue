<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Banner {
  id: number
  image: string
  title: string
  cta: string
  link?: string
}

const props = defineProps<{ banners: Banner[] }>()

const currentIndex = ref(0)
let autoplay: any

onMounted(() => {
  autoplay = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.banners.length
  }, 5000)
})

onUnmounted(() => clearInterval(autoplay))
</script>

<template>
  <div class="relative w-full h-[320px] overflow-hidden bg-blue-500">
    <div
      v-for="(banner, index) in banners"
      :key="banner.id"
      class="absolute inset-0 transition-opacity duration-700"
      :class="index === currentIndex ? 'opacity-100' : 'opacity-0'"
    >
      <img :src="banner.image" class="w-full h-full object-cover" />

      <div class="absolute inset-0 flex flex-col justify-center items-start px-10 bg-black/30">
        <h2 class="text-white text-2xl md:text-3xl font-bold mb-3">
          {{ banner.title }}
        </h2>

        <a
          :href="banner.link"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {{ banner.cta }}
        </a>
      </div>
    </div>
  </div>
</template>
