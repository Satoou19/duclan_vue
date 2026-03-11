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
  <div style="background: #f0f0f0; padding: 14px 24px">
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px">
      <a
        v-for="cat in categories"
        :key="cat.id"
        :href="cat.link"
        style="
          background: #1a8fd1;
          color: white;
          border-radius: 6px;
          padding: 16px 8px;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          display: block;
        "
        onmouseover="this.style.background='#1565c0'"
        onmouseout="this.style.background='#1a8fd1'"
        >{{ cat.title }}</a
      >
    </div>
  </div>
</template>
