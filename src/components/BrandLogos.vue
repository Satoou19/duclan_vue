<script setup lang="ts">
import { ref } from 'vue'

const brands = [
  {
    name: 'Ricoh',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Ricoh.png',
    link: 'https://duclan.vn/ricoh-3.manu',
  },
  {
    name: 'Toshiba',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/TOSHIBA.png',
    link: 'https://duclan.vn/toshiba-1.manu',
  },
  {
    name: 'Canon',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Canon.png',
    link: 'https://duclan.vn/canon-4.manu',
  },
  {
    name: 'Sharp',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/sharp.png',
    link: 'https://duclan.vn/sharp-6.manu',
  },
  {
    name: 'Fuji-Xerox',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/FUJI-XEROX.png',
    link: 'https://duclan.vn/fuji-xerox-7.manu',
  },
  {
    name: 'Kyocera Mita',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/KYOCERA.png',
    link: 'https://duclan.vn/kyocera-mita-8.manu',
  },
  {
    name: 'Konica Minolta',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/minolta.png',
    link: 'https://duclan.vn/konica-minolta-11.manu',
  },
  {
    name: 'HP',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/hp.png',
    link: 'https://duclan.vn/hp-5.manu',
  },
  {
    name: 'SamSung',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/SAMSUNG.png',
    link: 'https://duclan.vn/samsung-13.manu',
  },
  {
    name: 'Epson',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/EPSON.png',
    link: 'https://duclan.vn/epson-10.manu',
  },
  {
    name: 'Brother',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Brother.png',
    link: 'https://duclan.vn/brother-16.manu',
  },
  {
    name: 'Pantum',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/PANTUM-1.png',
    link: 'https://duclan.vn/pantum-180.manu',
  },
]

const brokenLogos = ref<string[]>([])

const handleLogoError = (event: Event, brand: { name: string }) => {
  const img = event.target as HTMLImageElement | null
  if (!img) return

  if (!brokenLogos.value.includes(brand.name)) {
    brokenLogos.value.push(brand.name)
  }
}
</script>

<template>
  <div class="bg-white p-5">
    <div class="flex flex-wrap gap-5">
      <aside class="w-full md:w-64 flex-shrink-0 border border-gray-200 rounded-xl p-4 bg-white">
        <div class="flex items-center gap-2 mb-4 text-red-700 text-base font-bold">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="#d32f2f"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          <span>Tìm theo máy</span>
        </div>

        <div class="relative mb-3">
          <select
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 appearance-none pr-8"
          >
            <option>-- Chọn thương hiệu--</option>
            <option>Ricoh</option>
            <option>Toshiba</option>
            <option>Canon</option>
            <option>Sharp</option>
            <option>Fuji-Xerox</option>
            <option>Kyocera Mita</option>
            <option>Konica-Minolta</option>
            <option>HP</option>
            <option>SamSung</option>
            <option>Epson</option>
            <option>Brother</option>
            <option>Pantum</option>
          </select>
          <svg
            class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            width="12"
            height="12"
            fill="#888"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>

        <div class="relative mb-3">
          <select
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 appearance-none pr-8"
          >
            <option>-- Chọn phần tử --</option>
          </select>
          <svg
            class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            width="12"
            height="12"
            fill="#888"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>

        <div class="relative mb-4">
          <select
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 appearance-none pr-8"
          >
            <option>-- Chọn phần tử --</option>
          </select>
          <svg
            class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            width="12"
            height="12"
            fill="#888"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>

        <button
          class="w-full bg-[#1a8fd1] hover:bg-[#1565c0] text-white font-bold rounded-md py-2 transition"
        >
          Tìm kiếm
        </button>
      </aside>

      <div class="flex-1">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          <a
            v-for="brand in brands"
            :key="brand.name"
            :href="brand.link"
            class="flex items-center justify-center border border-gray-200 rounded-lg p-4 bg-white transition hover:border-[#1a8fd1] hover:shadow-lg"
          >
            <template v-if="!brokenLogos.includes(brand.name)">
              <img
                :src="brand.logo"
                :alt="brand.name"
                class="max-h-12 max-w-full object-contain"
                @error="(event) => handleLogoError(event, brand)"
              />
            </template>
            <template v-else>
              <span class="text-sm font-bold text-gray-600">{{ brand.name }}</span>
            </template>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
