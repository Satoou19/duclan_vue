<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)
const cartCount = ref(0)
const printCount = ref(0)
const searchQuery = ref('')
const searchType = ref('product')
const activeCategory = ref<string | null>(null)
const expandedCategories = ref<{ [key: string]: boolean }>({})
const showCategoryDropdown = ref(false)

const categories = [
  {
    id: 'may-van-phong',
    name: 'Máy văn phòng',
    subcategories: [
      'Máy photo đa năng',
      'Máy In Laser',
      'Máy In Phun',
      'Máy Scan',
      'Máy hút bụi',
      'Chân Máy',
    ],
  },
  {
    id: 'vat-tu-photocopy',
    name: 'Vật tư photocopy',
    subcategories: [
      'Mực',
      'Cụm Từ',
      'Cụm Trống',
      'Cụm Băng Tải',
      'Cụm Sấy',
      'Chíp',
      'Dây Curoa',
      'Lấy Giấy',
      'Linh Kiện Khác',
    ],
  },
  {
    id: 'vat-tu-in-laser',
    name: 'Vật tư in laser',
    subcategories: ['Mực Nạp', 'Hộp Mực Máy In', 'Linh Kiện Máy in', 'Linh Kiện Hộp Mực'],
  },
  {
    id: 'vat-tu-in-phun',
    name: 'Vật tư in phun',
    subcategories: ['Mực Nước (Dye)', 'Mực Nhiệt (Sublimation)', 'Mực Dầu (Pigment)', 'Mực UV'],
  },
]

const brands = [
  'Ricoh',
  'Toshiba',
  'Canon',
  'Sharp',
  'Fuji-Xerox',
  'Kyocera Mita',
  'Konica-Minolta',
  'HP',
  'Samsung',
  'Epson',
  'Brother',
  'Pantum',
]

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // In a real app, this would navigate to search results
    console.log('Search:', searchQuery.value, 'Type:', searchType.value)
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleCategory = (categoryId: string) => {
  expandedCategories.value[categoryId] = !expandedCategories.value[categoryId]
}

const navigateTo = (path: string) => {
  router.push(path)
  isMenuOpen.value = false
}
</script>

<template>
  <div class="w-full bg-white border-b border-gray-200">
    <!-- Top Bar -->
    <div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
        <div>Kính chào quý khách</div>
        <div class="flex gap-6">
          <a href="tel:0283930646" class="hover:opacity-80">Tổng đài: 028.39306464</a>
          <a href="#" class="hover:opacity-80">Tuyển dụng</a>
          <a href="#" class="hover:opacity-80">Theo dõi đơn hàng</a>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
      <div class="flex items-center justify-between gap-2 md:gap-4 mb-3 md:mb-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-bold text-blue-600">ĐỨCCLAN</h1>
        </div>

        <!-- Search Bar (hidden on mobile) -->
        <div class="hidden md:flex flex-1 gap-2 mx-4">
          <!-- Danh mục sản phẩm dropdown -->
          <div class="relative">
            <button
              @click.stop="showCategoryDropdown = !showCategoryDropdown"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition whitespace-nowrap flex items-center gap-2"
            >
              ☰ Danh mục sản phẩm
            </button>

            <!-- Category Dropdown Menu -->
            <div
              v-if="showCategoryDropdown"
              class="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
              @click.stop
              @mouseleave="showCategoryDropdown = false"
            >
              <div class="py-2">
                <div
                  v-for="category in categories"
                  :key="category.id"
                  class="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    @click="toggleCategory(category.id)"
                    class="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 transition text-gray-800 font-semibold text-sm"
                  >
                    <span>{{ category.name }}</span>
                    <span class="text-lg">{{ expandedCategories[category.id] ? '−' : '+' }}</span>
                  </button>

                  <!-- Subcategories -->
                  <div
                    v-if="expandedCategories[category.id]"
                    class="bg-gray-50 border-t border-gray-100"
                  >
                    <a
                      v-for="(subcat, idx) in category.subcategories"
                      :key="idx"
                      href="#"
                      class="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-white transition"
                    >
                      {{ subcat }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <select
            v-model="searchType"
            class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm"
          >
            <option value="product">Tìm sản phẩm</option>
            <option value="machine">Tìm mã máy</option>
          </select>
          <input
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            type="text"
            placeholder="Nhập sản phẩm cần tìm kiếm..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            @click="handleSearch"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            🔍
          </button>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-2">
          <button
            class="hidden md:flex items-center gap-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition font-semibold"
          >
            <span>👤</span>
            <span>Tài khoản</span>
          </button>
          <button
            class="flex items-center gap-2 px-4 py-2 text-gray-800 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 rounded-lg text-sm transition relative font-semibold"
          >
            <span>📄</span>
            <span class="hidden md:inline">In báo giá</span>
            <span
              v-if="printCount > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
              >{{ printCount }}</span
            >
          </button>
          <button
            class="flex items-center gap-2 px-4 py-2 text-gray-800 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 rounded-lg text-sm transition relative font-semibold"
          >
            <span>🛒</span>
            <span class="hidden md:inline">Giỏ hàng</span>
            <span
              v-if="cartCount > 0"
              class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
              >{{ cartCount }}</span
            >
          </button>
          <button @click="toggleMenu" class="md:hidden p-2 hover:bg-gray-100 rounded-lg">☰</button>
        </div>
      </div>

      <!-- Search Bar (mobile) -->
      <div class="md:hidden flex gap-2 mb-4">
        <select
          v-model="searchType"
          class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm"
        >
          <option value="product">Tìm sản phẩm</option>
          <option value="machine">Tìm mã máy</option>
        </select>
        <input
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Tìm kiếm..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="handleSearch"
          class="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          🔍
        </button>
      </div>
    </div>

    <!-- Navigation Bar -->
    <nav class="bg-gray-100 border-t border-gray-200 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="hidden md:flex items-center gap-6 py-3 text-sm font-medium text-gray-700">
          <router-link to="/" class="hover:text-blue-600 transition">🏠 Trang chủ</router-link>
          <div class="group relative cursor-pointer">
            <button class="py-3 hover:text-blue-600 transition">Sản phẩm</button>
            <div
              class="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
            >
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sản phẩm mới</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sản phẩm nổi bật</a>
            </div>
          </div>
          <div class="group relative cursor-pointer">
            <button class="py-3 hover:text-blue-600 transition">Thương hiệu</button>
            <div
              class="absolute left-0 mt-0 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-4"
            >
              <div class="grid grid-cols-3 gap-3">
                <div
                  v-for="brand in brands"
                  :key="brand"
                  class="text-center hover:bg-gray-100 p-2 rounded cursor-pointer transition"
                >
                  {{ brand }}
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="hover:text-blue-600 transition">Chính sách bán hàng</a>
          <a href="#" class="hover:text-blue-600 transition">Chính sách mua hàng</a>
          <a href="#" class="hover:text-blue-600 transition">Tin tức</a>
          <a href="#" class="hover:text-blue-600 transition">Báo giá</a>
          <router-link to="/lien-he" class="hover:text-blue-600 transition">Liên hệ</router-link>
          <a href="#" class="hover:text-blue-600 transition">Đội ngũ kinh doanh</a>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden bg-white border-t border-gray-200 max-h-96 overflow-y-auto"
    >
      <div class="px-4 py-3 space-y-2 text-sm">
        <router-link
          to="/"
          @click="isMenuOpen = false"
          class="block py-2 hover:bg-gray-100 rounded px-2 transition"
        >
          🏠 Trang chủ
        </router-link>
        <a href="#" class="block py-2 hover:bg-gray-100 rounded px-2 transition">Sản phẩm</a>
        <a href="#" class="block py-2 hover:bg-gray-100 rounded px-2 transition">Thương hiệu</a>
        <a href="#" class="block py-2 hover:bg-gray-100 rounded px-2 transition"
          >Chính sách bán hàng</a
        >
        <a href="#" class="block py-2 hover:bg-gray-100 rounded px-2 transition"
          >Chính sách mua hàng</a
        >
        <a href="#" class="block py-2 hover:bg-gray-100 rounded px-2 transition">Tin tức</a>
        <a href="#" class="block py-2 hover:bg-gray-100 rounded px-2 transition">Báo giá</a>
        <router-link
          to="/lien-he"
          @click="isMenuOpen = false"
          class="block py-2 hover:bg-gray-100 rounded px-2 transition"
        >
          Liên hệ
        </router-link>
        <a href="#" class="block py-2 hover:bg-gray-100 rounded px-2 transition"
          >Đội ngũ kinh doanh</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
