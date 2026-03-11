<script setup lang="ts">
const categories = [
  { id: 1, title: 'Máy các loại', link: 'https://duclan.vn/tim-kiem?k==may&c=3' },
  { id: 2, title: 'Mực - Từ', link: 'https://duclan.vn/tim-kiem?k==btu,muc,mgi,mci&c=1' },
  { id: 3, title: 'Hộp mực - Cụm trống', link: 'https://duclan.vn/tim-kiem?k==mct,dct&c=4' },
  { id: 4, title: 'Linh kiện', link: 'https://duclan.vn/tim-kiem?k==bsy,tro,gmc&c=5' },
  { id: 5, title: 'Chip', link: 'https://duclan.vn/tim-kiem?k==chi&c=6' },
  { id: 6, title: 'In phun', link: 'https://duclan.vn/vat-tu-in-phun-4.cat' },
]
</script>
<template>
  <div class="bg-gray-100 py-4 px-6">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      <a
        v-for="cat in categories"
        :key="cat.id"
        :href="cat.link"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-center rounded-md py-3 transition"
      >
        {{ cat.title }}
      </a>
    </div>
  </div>
</template>
