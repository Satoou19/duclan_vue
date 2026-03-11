<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '@/components/AppHeader.vue'
import Footer from '@/components/AppFooter.vue'

const route = useRoute()
const pageName = route.name || 'Page'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow bg-gray-50 py-12">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ pageName }}</h1>
        <p class="text-gray-600 text-lg">
          Trang này đang được phát triển. Vui lòng quay lại sau hoặc liên hệ với chúng tôi để biết
          thêm chi tiết.
        </p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
