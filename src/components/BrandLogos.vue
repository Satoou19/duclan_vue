<script setup lang="ts">
const brands = [
  { name: 'Ricoh', logo: 'RICOH' },
  { name: 'Toshiba', logo: 'TOSHIBA' },
  { name: 'Canon', logo: 'Canon' },
  { name: 'Sharp', logo: 'SHARP' },
  { name: 'Fuji-Xerox', logo: 'FUJIFILM' },
  { name: 'Kyocera', logo: 'KYOCERA' },
  { name: 'Konica-Minolta', logo: 'KONICA MINOLTA' },
  { name: 'HP', logo: 'HP' },
  { name: 'Samsung', logo: 'SAMSUNG' },
  { name: 'Epson', logo: 'EPSON' },
  { name: 'Brother', logo: 'Brother' },
  { name: 'Pantum', logo: 'PANTUM' },
]
</script>

<template>
  <div class="bg-white py-6 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 items-center justify-center">
        <a
          v-for="brand in brands"
          :key="brand.name"
          href="#"
          class="flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition cursor-pointer"
        >
          <span class="text-xs font-bold text-center text-gray-700">{{ brand.logo }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
