<script setup lang="ts">
import { computed, ref, watch } from 'vue'

type Brand = {
  id: string
  name: string
  logo: string
  link: string
}

type Family = {
  id: string
  brandId: string
  name: string
  models: string[]
}

const brands: Brand[] = [
  {
    id: 'ricoh',
    name: 'Ricoh',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Ricoh.png',
    link: 'https://duclan.vn/ricoh-3.manu',
  },
  {
    id: 'toshiba',
    name: 'Toshiba',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/TOSHIBA.png',
    link: 'https://duclan.vn/toshiba-1.manu',
  },
  {
    id: 'canon',
    name: 'Canon',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Canon.png',
    link: 'https://duclan.vn/canon-4.manu',
  },
  {
    id: 'sharp',
    name: 'Sharp',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/sharp.png',
    link: 'https://duclan.vn/sharp-6.manu',
  },
  {
    id: 'fuji',
    name: 'Fuji-Xerox',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/FUJI-XEROX.png',
    link: 'https://duclan.vn/fuji-xerox-7.manu',
  },
  {
    id: 'kyocera',
    name: 'Kyocera Mita',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/KYOCERA.png',
    link: 'https://duclan.vn/kyocera-mita-8.manu',
  },
  {
    id: 'konica',
    name: 'Konica Minolta',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/minolta.png',
    link: 'https://duclan.vn/konica-minolta-11.manu',
  },
  {
    id: 'hp',
    name: 'HP',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/hp.png',
    link: 'https://duclan.vn/hp-5.manu',
  },
  {
    id: 'samsung',
    name: 'SamSung',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/SAMSUNG.png',
    link: 'https://duclan.vn/samsung-13.manu',
  },
  {
    id: 'epson',
    name: 'Epson',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/EPSON.png',
    link: 'https://duclan.vn/epson-10.manu',
  },
  {
    id: 'brother',
    name: 'Brother',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Brother.png',
    link: 'https://duclan.vn/brother-16.manu',
  },
  {
    id: 'pantum',
    name: 'Pantum',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/PANTUM-1.png',
    link: 'https://duclan.vn/pantum-180.manu',
  },
]

const brandFamilies: Family[] = [
  {
    id: 'ricoh-mp',
    brandId: 'ricoh',
    name: 'Ricoh MP',
    models: ['Ricoh MP 2554/3054', 'Ricoh MP 4002/5002', 'Ricoh MP C3003'],
  },
  {
    id: 'ricoh-im',
    brandId: 'ricoh',
    name: 'Ricoh IM',
    models: ['Ricoh IM C300', 'Ricoh IM C300F', 'Ricoh IM 2702', 'Ricoh IM 3500'],
  },
  {
    id: 'ricoh-aficio',
    brandId: 'ricoh',
    name: 'Ricoh Aficio',
    models: ['Aficio MP 3351', 'Aficio MP 5500'],
  },
  {
    id: 'ricoh-laser',
    brandId: 'ricoh',
    name: 'Ricoh B&W Laser Printers',
    models: ['SP 325DNw', 'SP 8400DN'],
  },
  {
    id: 'toshiba-estudio',
    brandId: 'toshiba',
    name: 'Toshiba e-Studio',
    models: ['e-Studio 2329A', 'e-Studio 2523A', 'e-Studio 3518A'],
  },
  {
    id: 'canon-imageclass',
    brandId: 'canon',
    name: 'Canon imageCLASS',
    models: ['MF657Cdw', 'MF754Cdw', 'MF275dw'],
  },
  {
    id: 'hp-laserjet',
    brandId: 'hp',
    name: 'HP LaserJet',
    models: ['M236sdw', 'M283fdw', 'M507dn'],
  },
  {
    id: 'epson-ecotank',
    brandId: 'epson',
    name: 'Epson EcoTank',
    models: ['L3110', 'L3150', 'L8050', 'L18050'],
  },
]

const selectedBrand = ref('')
const selectedFamily = ref('')
const selectedModel = ref('')

const filteredFamilies = computed(() =>
  brandFamilies.filter((item) => item.brandId === selectedBrand.value),
)

const filteredModels = computed(() => {
  const family = filteredFamilies.value.find((item) => item.id === selectedFamily.value)
  return family ? family.models : []
})

const displayedBrands = brands

watch(selectedBrand, () => {
  selectedFamily.value = ''
  selectedModel.value = ''
})

watch(selectedFamily, () => {
  selectedModel.value = ''
})

const submitFilter = () => {
  console.log('Filter selections', {
    brand: selectedBrand.value,
    family: selectedFamily.value,
    model: selectedModel.value,
  })
}
</script>

<template>
  <div class="bg-white p-5">
    <div class="flex flex-wrap gap-5">
      <aside class="w-full flex-shrink-0 rounded-xl border border-gray-200 bg-white p-4 md:w-64">
        <div class="mb-4 flex items-center gap-2 text-base font-bold text-red-700">
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

        <div class="space-y-3">
          <div class="relative">
            <select
              v-model="selectedBrand"
              class="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-[#1a8fd1] focus:outline-none focus:ring-1 focus:ring-[#1a8fd1]"
            >
              <option value="">-- Chọn thương hiệu --</option>
              <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                {{ brand.name }}
              </option>
            </select>
            <svg
              class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              width="12"
              height="12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </div>

          <div class="relative">
            <select
              v-model="selectedFamily"
              :disabled="!filteredFamilies.length"
              class="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-[#1a8fd1] focus:outline-none focus:ring-1 focus:ring-[#1a8fd1] disabled:cursor-not-allowed disabled:bg-gray-100"
            >
              <option value="">-- Chọn phần tử --</option>
              <option v-for="family in filteredFamilies" :key="family.id" :value="family.id">
                {{ family.name }}
              </option>
            </select>
            <svg
              class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              width="12"
              height="12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </div>

          <div class="relative">
            <select
              v-model="selectedModel"
              :disabled="!filteredModels.length"
              class="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-[#1a8fd1] focus:outline-none focus:ring-1 focus:ring-[#1a8fd1] disabled:cursor-not-allowed disabled:bg-gray-100"
            >
              <option value="">-- Chọn phần tử --</option>
              <option v-for="model in filteredModels" :key="model" :value="model">
                {{ model }}
              </option>
            </select>
            <svg
              class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              width="12"
              height="12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </div>

          <button
            type="button"
            @click="submitFilter"
            class="w-full rounded-md bg-[#1a8fd1] py-2 text-center text-sm font-bold text-white transition hover:bg-[#1565c0]"
          >
            Tìm kiếm
          </button>
        </div>
      </aside>

      <div class="flex-1">
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          <a
            v-for="brand in displayedBrands"
            :key="brand.id"
            :href="brand.link"
            class="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#1a8fd1] hover:shadow"
          >
            <img :src="brand.logo" :alt="brand.name" class="max-h-12 max-w-full object-contain" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
