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
const imageErrors = ref<{ [key: number]: boolean }>({})
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
  <div
    style="position: relative; width: 100%; overflow: hidden; height: 300px; background: #1a8fd1"
  >
    <!-- Slides -->
    <div
      v-for="(banner, index) in banners"
      :key="banner.id"
      style="position: absolute; inset: 0; transition: opacity 0.7s ease"
      :style="{ opacity: currentIndex === index ? 1 : 0, zIndex: currentIndex === index ? 10 : 0 }"
    >
      <!-- Ảnh thật -->
      <img
        v-if="!imageErrors[banner.id]"
        :src="banner.image"
        :alt="banner.title"
        style="width: 100%; height: 100%; object-fit: cover; display: block"
        @error="onImageError(banner.id)"
      />

      <!-- Fallback: gradient đẹp y chang web thật khi ảnh không load -->
      <div
        v-if="imageErrors[banner.id]"
        style="
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0d6ebd 0%, #1a8fd1 40%, #0fa0c8 70%, #06b6d4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 60px;
        "
      >
        <!-- Giả lập banner có hình máy in bên trái + kho hàng bên phải -->
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1200px;
          "
        >
          <!-- Text trái -->
          <div style="color: white; text-align: left">
            <div
              style="
                font-size: 28px;
                font-weight: 900;
                margin-bottom: 8px;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
              "
            >
              {{
                index === 0 ? 'Sản phẩm nổi bật' : index === 1 ? 'Vật tư photocopy' : 'Giảm tận 30%'
              }}
            </div>
            <div style="font-size: 16px; opacity: 0.9; margin-bottom: 16px">
              {{
                index === 0
                  ? 'Máy văn phòng chính hãng – Giá tốt nhất'
                  : index === 1
                    ? 'Kho hàng đa dạng – Giao hàng nhanh'
                    : 'Khuyến mãi đặc biệt cho đơn lớn'
              }}
            </div>
            <a
              :href="banner.link || '#'"
              style="
                display: inline-block;
                background: white;
                color: #1a8fd1;
                font-weight: 800;
                font-size: 15px;
                padding: 10px 28px;
                border-radius: 6px;
                text-decoration: none;
              "
              >{{ banner.cta }}</a
            >
          </div>

          <!-- Decorative printer icons (SVG đơn giản) -->
          <div style="display: flex; gap: 16px; opacity: 0.7">
            <div
              v-for="n in 3"
              :key="n"
              style="
                width: 80px;
                height: 80px;
                background: rgba(255, 255, 255, 0.15);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
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

    <!-- Prev / Next arrows -->
    <button
      @click="prevSlide"
      style="
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.7);
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 20;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      "
      onmouseover="this.style.background='rgba(255,255,255,0.95)'"
      onmouseout="this.style.background='rgba(255,255,255,0.7)'"
    >
      ◄
    </button>
    <button
      @click="nextSlide"
      style="
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.7);
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 20;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      "
      onmouseover="this.style.background='rgba(255,255,255,0.95)'"
      onmouseout="this.style.background='rgba(255,255,255,0.7)'"
    >
      ►
    </button>

    <!-- Dots -->
    <div
      style="
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 6px;
        z-index: 20;
      "
    >
      <button
        v-for="(_, i) in banners"
        :key="i"
        @click="goToSlide(i)"
        :style="{
          height: '8px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          background: 'white',
          opacity: currentIndex === i ? 1 : 0.45,
          width: currentIndex === i ? '28px' : '8px',
          transition: 'all 0.3s',
        }"
      />
    </div>
  </div>
</template>
