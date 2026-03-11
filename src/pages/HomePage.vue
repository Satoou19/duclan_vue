<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/AppHeader.vue'
import Footer from '@/components/AppFooter.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import FeatureCategories from '@/components/FeatureCategories.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import BlogSection from '@/components/BlogSection.vue'

const currentBannerIndex = ref(0)

const banners = [
  {
    id: 1,
    image: 'https://via.placeholder.com/1200x400/3399CC/FFFFFF?text=Banner+1',
    title: 'Máy văn phòng chất lượng cao',
    cta: 'Xem ngay',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/1200x400/0099FF/FFFFFF?text=Banner+2',
    title: 'Vật tư photocopy giá tốt',
    cta: 'Mua ngay',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/1200x400/00CCFF/FFFFFF?text=Banner+3',
    title: 'Các sản phẩm mới nhất',
    cta: 'Gọi Ngay',
  },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Header />

    <main class="flex-grow">
      <!-- Hero Banner -->
      <HeroBanner :banners="banners" />

      <!-- Feature Categories -->
      <FeatureCategories />

      <!-- Product Sections -->
      <div class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Máy văn phòng section -->
          <ProductCarousel
            title="Máy văn phòng"
            :products="[
              {
                id: 1,
                name: 'Máy in màu đa chức năng Canon Laser MF754Cdw',
                code: 'OEM_52113',
                price: '12.720.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Canon+MF754',
              },
              {
                id: 2,
                name: 'Máy in màu Canon Laser LBP 722Cdw',
                code: 'OEM_52498',
                price: '9.805.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Canon+LBP722',
              },
              {
                id: 3,
                name: 'Máy in màu Canon Laser LBP 631Cw',
                code: 'OEM_710',
                price: '6.758.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Canon+LBP631',
              },
              {
                id: 4,
                name: 'Máy in HP LaserJet Pro 4003dn',
                code: 'OEM_52692',
                price: '5.883.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=HP+Pro+4003',
              },
              {
                id: 5,
                name: 'Máy in HP LaserJet Enterprise M611dn',
                code: 'OEM_52447',
                price: '18.815.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=HP+M611',
              },
              {
                id: 6,
                name: 'Máy in HP LaserJet Enterprise M507dn',
                code: 'OEM_50798',
                price: '14.045.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=HP+M507',
              },
            ]"
          />

          <!-- Vật tư photocopy section -->
          <ProductCarousel
            title="Vật tư photocopy"
            :products="[
              {
                id: 7,
                name: 'Mực Ricoh MPC2500',
                code: 'OEM_MIC2500',
                price: '450.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Muc+Ricoh',
              },
              {
                id: 8,
                name: 'Cụm từ Toshiba',
                code: 'OEM_CUM001',
                price: '2.500.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Cum+Toshiba',
              },
              {
                id: 9,
                name: 'Cụm Trống Canon',
                code: 'OEM_CTR001',
                price: '1.800.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Cum+Trong',
              },
              {
                id: 10,
                name: 'Chip máy in',
                code: 'OEM_CHIP001',
                price: '85.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Chip+May+In',
              },
              {
                id: 11,
                name: 'Dây curoa máy photocopy',
                code: 'OEM_DC001',
                price: '350.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Day+Curoa',
              },
              {
                id: 12,
                name: 'Lấy giấy máy photocopy',
                code: 'OEM_LG001',
                price: '450.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Lay+Giay',
              },
            ]"
          />

          <!-- Vật tư in laser section -->
          <ProductCarousel
            title="Vật tư in laser"
            :products="[
              {
                id: 13,
                name: 'Mực nạp HP Premium Plus',
                code: 'OEM_MN001',
                price: '150.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Muc+HP',
              },
              {
                id: 14,
                name: 'Hộp mực HP 23K',
                code: 'OEM_HM001',
                price: '650.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Hop+Muc+HP',
              },
              {
                id: 15,
                name: 'Linh kiện máy in Canon',
                code: 'OEM_LK001',
                price: '280.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Linh+Kien',
              },
              {
                id: 16,
                name: 'Linh kiện hộp mực',
                code: 'OEM_LKH001',
                price: '120.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Linh+Kien+Hop',
              },
              {
                id: 17,
                name: 'Mực Nạp Epson',
                code: 'OEM_MNE001',
                price: '180.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Muc+Epson',
              },
              {
                id: 18,
                name: 'Toner Samsung',
                code: 'OEM_TS001',
                price: '580.000 đ',
                image: 'https://via.placeholder.com/200x250/E0E0E0/666666?text=Toner+Samsung',
              },
            ]"
          />
        </div>
      </div>

      <!-- Blog Section -->
      <BlogSection />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
