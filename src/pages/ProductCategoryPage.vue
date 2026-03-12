<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '@/components/AppHeader.vue'
import Footer from '@/components/AppFooter.vue'

interface Product {
  id: number
  name: string
  code: string
  price: string
  image: string
  link: string
}

const categories = [
  {
    id: 1,
    name: 'Máy văn phòng',
    icon: '🖨️',
    slug: 'may-van-phong',
    products: [
      {
        id: 1,
        name: 'Máy in HP LaserJet Enterprise M611dn (Nhập khẩu)',
        code: 'OEM_52447',
        price: '18.815.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/MAYINHM501DN-7585.jpg',
        link: 'https://duclan.vn/may-in-hp-laserjet-pro-m501dn-j8h61a--7585',
      },
      {
        id: 2,
        name: 'Máy in màu đa chức năng Canon Laser MF651CW (Nhập Khẩu)',
        code: 'OEM_50480',
        price: '9.275.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50480-8180.jpg',
        link: 'https://duclan.vn/may-in-mau-da-chuc-nang-canon-laser-mf651cw-8180',
      },
      {
        id: 3,
        name: 'Máy in màu đa chức năng Canon Laser MF754Cdw (Nhập khẩu)',
        code: 'OEM_52113',
        price: '12.720.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52113(1)-8399.jpg',
        link: 'https://duclan.vn/may-in-mau-da-chuc-nang-canon-laser-mf754cdw-8399',
      },
      {
        id: 4,
        name: 'Máy in đa chức năng HP LaserJet MFP M236sdw (9YG09A)- (Chính Hãng)',
        code: 'Chính Hãng_1289',
        price: '6.095.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/neverstop_laser_mfp_1200w-(1)-7624.jpg',
        link: 'https://duclan.vn/may-in-hp-neverstop-laser-mfp-1200a-7624',
      },
      {
        id: 5,
        name: 'Máy in đa chức năng HP laser Neverstop MFP 1200a(4QD21A)- (Chính Hãng)',
        code: 'Chính Hãng_51497',
        price: '3.180.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/neverstop_laser_mfp_1200w-(1)-7624.jpg',
        link: 'https://duclan.vn/may-in-hp-neverstop-laser-mfp-1200a-7624',
      },
      {
        id: 6,
        name: 'Máy in màu đa chức năng Canon Laser MF657CDW (Nhập Khẩu)',
        code: 'OEM_50346',
        price: '10.600.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50346-5375.jpg',
        link: 'https://duclan.vn/may-in-mau-da-chuc-nang-canon-laser-mf657cdw-5375',
      },
      {
        id: 7,
        name: 'Máy in màu Canon Laser LBP 722Cdw (Nhập khẩu)',
        code: 'OEM_52498',
        price: '9.805.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52498-1200x1200-8758.jpg',
        link: 'https://duclan.vn/may-in-mau-canon-laser-lbp-722cdw-8758',
      },
      {
        id: 8,
        name: 'Máy in màu đa chức năng Canon Laser MF752Cdw (Nhập khẩu)',
        code: 'OEM_50576',
        price: '11.660.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50576-8133.jpg',
        link: 'https://duclan.vn/may-in-mau-canon-laser-lbp-752cdw-8133',
      },
      {
        id: 9,
        name: 'Máy in đa chức năng Canon laser MF275dw (Nhập khẩu)',
        code: 'OEM_52561',
        price: '7.420.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52561-1200x1200-8819.jpg',
        link: 'https://duclan.vn/máy-in-da-chúc-nang-canon-laser-mf275dw-8819',
      },
      {
        id: 10,
        name: 'Máy in màu đa chức năng HP LaserJet Pro M283fdw (Nhập Khẩu)',
        code: 'OEM_50371',
        price: '13.515.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50371-8109.jpg',
        link: 'https://duclan.vn/may-in-mau-da-chuc-nang-hp-laserjet-pro-m283fdw-7kw75a--8109',
      },
      {
        id: 11,
        name: 'Máy in HP LaserJet Enterprise M507dn (1PV87A) (Nhập Khẩu)',
        code: 'OEM_50798',
        price: '14.045.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50798-7069.jpg',
        link: 'https://duclan.vn/may-in-hp-laserjet-enterprise-m507dn-7069',
      },
      {
        id: 12,
        name: 'Máy in màu Canon Laser LBP 633CDW (Nhập Khẩu)',
        code: 'OEM_50481',
        price: '6.572.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50481-1200x1200--8125.jpg',
        link: 'https://duclan.vn/may-in-mau-canon-laser-lbp-633cdw-8125',
      },
    ],
  },
  {
    id: 2,
    name: 'Vật tư photocopy',
    icon: '🖇️',
    slug: 'vat-tu-photocopy',
    products: [
      {
        id: 101,
        name: 'Mực gói Ricoh MP2554/3054/3554/4054/5054(1Kg)',
        code: 'WA_50892',
        price: '350.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50892-7290.jpg',
        link: 'https://duclan.vn/muc-goi-ricoh-6054-7290',
      },
      {
        id: 102,
        name: 'Mực gói Ricoh Aficio MPC 3002/4502/5502(M) 500g',
        code: 'WA_52316',
        price: '610.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52316-1200x1200-8577.jpg',
        link: 'https://duclan.vn/muc-goi-ricoh-mp-c-3002-3502-4502-5502-m-500g-8577',
      },
      {
        id: 103,
        name: 'Trống Ricoh MP C8002/C6502 (ES-MP8002)',
        code: 'ES_51577',
        price: '769.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/51577-7687.jpg',
        link: 'https://duclan.vn/trong-ricoh-mp-c8002-c6502-es-mp8002--7687',
      },
      {
        id: 104,
        name: 'Mực gói Ricoh E 4500C/5500C/ MP C6000/7500 -xanh',
        code: 'JJ_50983',
        price: '464.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50983-7254.jpg',
        link: 'https://duclan.vn/muc-goi-ricoh-e-4500c-5500c-mp-c6000-7500-xanh-7254',
      },
      {
        id: 105,
        name: 'Mực gói Ricoh MP2554/3054/3554/4054/5054 (1Kg)',
        code: 'HY_51792',
        price: '260.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/51792-7894.jpg',
        link: 'https://duclan.vn/muc-goi-rioch-mp2554-7894',
      },
      {
        id: 106,
        name: 'Trống Ricoh MP 4000/5000/4002/5002(PN61312)',
        code: 'Katun_52489',
        price: '583.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52489-1200x1200-8751.jpg',
        link: 'https://duclan.vn/trong-ricoh-aficio-mp-4000-8751',
      },
      {
        id: 107,
        name: 'Trống Toshiba E-Studio 550/650/810 (CET1893)',
        code: 'CET_8502',
        price: '782.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/8502-1200x1200-1-8824.jpg',
        link: 'https://duclan.vn/trong-toshiba-e-studio-550-650-810-cet1893--8824',
      },
      {
        id: 108,
        name: 'Gạt mực Minolta Bizhub C451/C452/C654/C754 - color',
        code: 'CET_52803',
        price: '68.900 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52803-1200x1200-9048.jpg',
        link: 'https://duclan.vn/gat-muc-minolta-bizhub-c451-c452-c654-c754-color-9048',
      },
      {
        id: 109,
        name: 'Mực gói Ricoh E 4500C/5500C/ MP C6000/7500 -vàng',
        code: 'JJ_50985',
        price: '464.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50985-7256.jpg',
        link: 'https://duclan.vn/muc-goi-ricoh-e-4500c-5500c-mp-c6000-7500-vang-7256',
      },
      {
        id: 110,
        name: 'Trống Ricoh Aficio 550/650/1060/1075',
        code: 'SI_4221',
        price: '689.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/4221_1200x1200-8231.jpg',
        link: 'https://duclan.vn/trong-ricoh-aficio-550-650-1060-1075-8231',
      },
      {
        id: 111,
        name: 'Mực gói Ricoh MPC 3503/4503/3504/4504/6004 M (500g)',
        code: 'JJ_4265',
        price: '464.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/4265--8144.jpg',
        link: 'https://duclan.vn/muc-goi-ricoh-mpc-3503-4503-3504-4504-6502-8002-m-500g--8144',
      },
      {
        id: 112,
        name: 'Trống Ricoh MPC 6000/7500 (Katun Access)',
        code: 'Katun_52229',
        price: '901.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52229_1200x1200-8500.jpg',
        link: 'https://duclan.vn/trong-ricoh-mpc-6000-7500-katun-access--8500',
      },
    ],
  },
  {
    id: 3,
    name: 'Vật tư in laser',
    icon: '📄',
    slug: 'vat-tu-in-laser',
    products: [
      {
        id: 201,
        name: 'Mực chai HP1300 Universal (140g)',
        code: 'CO_52214',
        price: '28.900 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52214_1200x1200-1-8487.jpg',
        link: 'https://duclan.vn/muc-chai-hp1300-universal-140g--8487',
      },
      {
        id: 202,
        name: 'Hộp mực in HP 1010 * Canon 2900 (Q2612A/CRG303/FX9) 2K',
        code: 'RT_52728',
        price: '124.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52728-1200x1200-8968.jpg',
        link: 'https://duclan.vn/hop-muc-in-hp-1010-canon-2900-q2612a-crg303-fx9-2k-8968',
      },
      {
        id: 203,
        name: 'Hộp mực in HP 1010*Canon 2900 (Q2612A/CRG303) 2K',
        code: 'OM_1084',
        price: '160.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/1084_01-24.jpg',
        link: 'https://duclan.vn/muc-cartridge-estar-q2612a-24',
      },
      {
        id: 204,
        name: 'Trống HP MFP E72525dn/E72530dn/E72425dn (W9006MC)',
        code: 'SG_52312',
        price: '159.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/523121200x1200-8574.jpg',
        link: 'https://duclan.vn/trong-hp-mfp-e72525dn-e72530dn-e72425dn-w9006mc--8574',
      },
      {
        id: 205,
        name: 'Mực chai Hp M402 (OEM/ 80g)',
        code: '52450',
        price: '25.400 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52450_1200x1200-2-8706.jpg',
        link: 'https://duclan.vn/muc-chai-hp-m402-oem-80g--8706',
      },
      {
        id: 206,
        name: 'Trống máy in HP MFP M150a/M178NW',
        code: 'SG_269',
        price: '305.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/269-1200x1200-8146.jpg',
        link: 'https://duclan.vn/trong-hp-mfp-m150a-8146',
      },
      {
        id: 207,
        name: 'Trống máy in HP Pro 4203dn/MFP 4303fdw',
        code: 'SG_52563',
        price: '58.300 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52563-1200x1200-8821.jpg',
        link: 'https://duclan.vn/trong-may-in-hp-pro-4203dn-mfp-4303fdw-8821',
      },
      {
        id: 208,
        name: 'Mực chai HP Premium Plus (140g)',
        code: '',
        price: '28.900 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52197_1200x1200-1-8485.jpg',
        link: 'https://duclan.vn/muc-chai-hp-premium-plus-140g--8485',
      },
      {
        id: 209,
        name: 'Mực chai HP Premium 1320CN (140g)',
        code: 'EH_52351',
        price: '26.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52351_1200x1200-2-8614.jpg',
        link: 'https://duclan.vn/muc-nap-hp-1320-cn-premium-new-140g--8614',
      },
      {
        id: 210,
        name: 'Trống máy in HP CP M553/M552 (ES-HPC553)',
        code: 'ES_50822',
        price: '68.900 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50822-7249.jpg',
        link: 'https://duclan.vn/trong-may-in-hp-cp-m553-7249',
      },
      {
        id: 211,
        name: 'Mực chai HP CP 1025/1518/M252/M452 C (40g)',
        code: 'FK_52241',
        price: '57.000 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52241_1200x1200-8509.jpg',
        link: 'https://duclan.vn/muc-chai-hp-cp-1025-1518-m252-m452-c-40g--8509',
      },
      {
        id: 212,
        name: 'Mực chai HP Premium (140g)',
        code: 'CO_52288',
        price: '29.900 đ',
        image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52288_1200x1200-3-8555.jpg',
        link: 'https://duclan.vn/muc-chai-hp-premium-140g--8555',
      },
    ],
  },
]

// State
const selectedCategory = ref(categories[0])
const searchQuery = ref('')
const sortBy = ref('newest')
const itemsPerPage = ref(12)
const currentPage = ref(1)

// Filter products based on search
const filteredProducts = computed(() => {
  return selectedCategory.value.products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    product.code.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// Sort products
const sortedProducts = computed(() => {
  const products = [...filteredProducts.value]
  if (sortBy.value === 'price-asc') {
    return products.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ''))
      const priceB = parseInt(b.price.replace(/[^\d]/g, ''))
      return priceA - priceB
    })
  } else if (sortBy.value === 'price-desc') {
    return products.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ''))
      const priceB = parseInt(b.price.replace(/[^\d]/g, ''))
      return priceB - priceA
    })
  }
  return products
})

// Paginate products
const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  return sortedProducts.value.slice(startIndex, startIndex + itemsPerPage.value)
})

const totalPages = computed(() => Math.ceil(sortedProducts.value.length / itemsPerPage.value))

// Reset to first page when filters change
const onFilterChange = () => {
  currentPage.value = 1
}

// Handle category selection
const selectCategory = (category: any) => {
  selectedCategory.value = category
  onFilterChange()
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Header />

    <main class="flex-grow bg-gray-50">
      <!-- Category Banner -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 py-8 text-white">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-3xl font-bold">{{ selectedCategory.name }}</h1>
          <p class="text-blue-100 mt-2">
            {{ sortedProducts.length }} sản phẩm được tìm thấy
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- Sidebar -->
          <div class="md:col-span-1">
            <!-- Category Filter -->
            <div class="bg-white rounded-lg shadow p-6 mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Danh mục</h3>
              <div class="space-y-2">
                <button
                  v-for="cat in categories"
                  :key="cat.id"
                  @click="selectCategory(cat)"
                  :class="[
                    'w-full text-left px-4 py-2 rounded-lg transition-colors',
                    selectedCategory.id === cat.id
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                  ]"
                >
                  {{ cat.icon }} {{ cat.name }}
                </button>
              </div>
            </div>

            <!-- Price Filter -->
            <div class="bg-white rounded-lg shadow p-6 mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Sắp xếp theo</h3>
              <select
                v-model="sortBy"
                @change="onFilterChange"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="newest">Mới nhất</option>
                <option value="price-asc">Giá: Thấp → Cao</option>
                <option value="price-desc">Giá: Cao → Thấp</option>
              </select>
            </div>
          </div>

          <!-- Products Grid -->
          <div class="md:col-span-3">
            <!-- Search & Filter Bar -->
            <div class="bg-white rounded-lg shadow p-4 mb-6">
              <input
                v-model="searchQuery"
                @input="onFilterChange"
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <!-- Products -->
            <div
              v-if="paginatedProducts.length > 0"
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <div
                v-for="product in paginatedProducts"
                :key="product.id"
                class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
              >
                <div class="relative overflow-hidden bg-gray-100 h-48">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div class="p-4">
                  <p class="text-xs text-blue-600 font-semibold mb-2">{{ product.code }}</p>
                  <h3 class="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
                    {{ product.name }}
                  </h3>
                  <p class="text-lg font-bold text-blue-600 mb-4">{{ product.price }}</p>
                  <div class="flex gap-2">
                    <a
                      :href="product.link"
                      target="_blank"
                      class="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                    >
                      Xem Chi Tiết
                    </a>
                    <button
                      class="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold"
                    >
                      Báo Giá
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else class="bg-white rounded-lg shadow p-12 text-center">
              <p class="text-gray-500 text-lg">Không tìm thấy sản phẩm nào.</p>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-8">
              <button
                @click="currentPage--"
                :disabled="currentPage === 1"
                class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                ← Trước
              </button>
              <div class="flex gap-1">
                <button
                  v-for="page in totalPages"
                  :key="page"
                  @click="currentPage = page"
                  :class="[
                    'px-3 py-2 rounded-lg transition-colors',
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-100',
                  ]"
                >
                  {{ page }}
                </button>
              </div>
              <button
                @click="currentPage++"
                :disabled="currentPage === totalPages"
                class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                Tiếp →
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
