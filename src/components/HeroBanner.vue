<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Banner {
  id: number
  image: string
  title: string
  cta: string
  link?: string
}

const props = defineProps<{ banners: Banner[] }>()

const currentIndex = ref(0)
const imageErrors = ref<Record<number, boolean>>({})
let autoplayInterval: ReturnType<typeof setInterval>

onMounted(() => {
  autoplayInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.banners.length
  }, 5000)
})

onUnmounted(() => clearInterval(autoplayInterval))

const goToSlide = (i: number) => {
  currentIndex.value = i
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.banners.length) % props.banners.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.banners.length
}

const onImageError = (id: number) => {
  imageErrors.value[id] = true
}
</script>

<template>
  <div class="relative h-[300px] w-full overflow-hidden bg-[#1a8fd1]">
    <div
      v-for="(banner, index) in banners"
      :key="banner.id"
      class="absolute inset-0 transition-opacity duration-700"
      :class="currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >
      <img
        v-if="!imageErrors[banner.id]"
        :src="banner.image"
        :alt="banner.title || 'Banner'"
        class="h-full w-full object-cover"
        @error="onImageError(banner.id)"
      />

      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0d6ebd] via-[#1a8fd1] via-50% via-[#0fa0c8] to-[#06b6d4] px-6 md:px-16"
      >
        <div class="flex w-full max-w-5xl items-center justify-between gap-6">
          <div class="max-w-md space-y-3 text-white">
            <div class="text-2xl font-black drop-shadow-sm md:text-[28px]">
              {{
                index === 0 ? 'Sản phẩm nổi bật' : index === 1 ? 'Vật tư photocopy' : 'Giảm tận 30%'
              }}
            </div>
            <p class="text-[15px] opacity-90 md:text-base">
              {{
                index === 0
                  ? 'Máy văn phòng chính hãng – Giá tốt nhất'
                  : index === 1
                    ? 'Kho hàng đa dạng – Giao hàng nhanh'
                    : 'Khuyến mãi đặc biệt cho đơn lớn'
              }}
            </p>
            <a
              :href="banner.link || '#'"
              class="inline-flex items-center rounded-md bg-white px-6 py-2.5 text-[15px] font-extrabold text-[#1a8fd1] shadow-sm transition hover:bg-gray-50"
              >{{ banner.cta }}</a
            >
          </div>

          <div class="hidden items-center gap-4 opacity-80 md:flex">
            <div
              v-for="n in 3"
              :key="n"
              class="flex h-20 w-20 items-center justify-center rounded-lg bg-white/20"
            >
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="white"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <button
      type="button"
      @click="prevSlide"
      class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-700 shadow-md transition hover:bg-white"
      aria-label="Banner trước"
    >
      ◀
    </button>
    <button
      type="button"
      @click="nextSlide"
      class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-700 shadow-md transition hover:bg-white"
      aria-label="Banner sau"
    >
      ▶
    </button>

    <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
      <button
        v-for="(_, i) in banners"
        :key="i"
        @click="goToSlide(i)"
        class="h-2 rounded-full bg-white transition-all"
        :class="currentIndex === i ? 'w-7 opacity-100' : 'w-2 opacity-60'"
        aria-label="Đi tới banner"
      />
    </div>
  </div>
</template>
