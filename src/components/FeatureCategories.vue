<script setup lang="ts">
const categories = [
  {
    id: 1,
    title: 'Máy các loại',
    link: '#',
  },
  {
    id: 2,
    title: 'Mực - Từ',
    link: '#',
  },
  {
    id: 3,
    title: 'Hộp mực - Cụm trống',
    link: '#',
  },
  {
    id: 4,
    title: 'Linh kiện',
    link: '#',
  },
  {
    id: 5,
    title: 'Chip',
    link: '#',
  },
  {
    id: 6,
    title: 'In phun',
    link: '#',
  },
]
</script>

<template>
  <div class="bg-white py-8 mb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
        <a
          v-for="category in categories"
          :key="category.id"
          :href="category.link"
          class="p-4 md:p-6 rounded-lg text-white text-center font-semibold text-xs md:text-sm hover:opacity-90 transition bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md"
        >
          {{ category.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
