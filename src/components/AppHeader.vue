<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isCategoryOpen = ref(false)
const cartCount = ref(0)
const printCount = ref(0)
const searchQuery = ref('')
const searchType = ref('product')
const expandedCategories = ref<Record<string, boolean>>({})

const categories = [
  {
    id: 'may-van-phong',
    name: 'Máy văn phòng',
    subcategories: [
      { name: 'Máy photo đa năng', link: 'https://duclan.vn/may-photo-da-nang-47.cat' },
      { name: 'Máy In Laser', link: 'https://duclan.vn/may-in-laser-739.cat' },
      { name: 'Máy In Phun', link: 'https://duclan.vn/may-in-phun-702.cat' },
      { name: 'Máy Scan', link: 'https://duclan.vn/may-scan-822.cat' },
      { name: 'Máy hút bụi', link: 'https://duclan.vn/may-hut-bui-730.cat' },
      { name: 'Chân Máy', link: 'https://duclan.vn/chan-may-547.cat' },
    ],
  },
  {
    id: 'vat-tu-photocopy',
    name: 'Vật tư photocopy',
    subcategories: [
      { name: 'Mực', link: 'https://duclan.vn/muc-631.cat' },
      { name: 'Cụm Từ', link: 'https://duclan.vn/cum-tu-276.cat' },
      { name: 'Cụm Trống', link: 'https://duclan.vn/cum-drum-275.cat' },
      { name: 'Cụm Băng Tải', link: 'https://duclan.vn/cum-bang-tai-277.cat' },
      { name: 'Cụm Sấy', link: 'https://duclan.vn/cum-say-274.cat' },
      { name: 'Chíp', link: 'https://duclan.vn/chip-muc-747.cat' },
      { name: 'Dây Curoa', link: 'https://duclan.vn/day-curoa-143.cat' },
      { name: 'Lấy Giấy', link: 'https://duclan.vn/lay-giay-36.cat' },
      { name: 'Linh Kiện Khác', link: 'https://duclan.vn/linh-kien-khac-833.cat' },
    ],
  },
  {
    id: 'vat-tu-in-laser',
    name: 'Vật tư in laser',
    subcategories: [
      { name: 'Mực Nạp', link: 'https://duclan.vn/muc-nap-734.cat' },
      { name: 'Hộp Mực Máy In', link: 'https://duclan.vn/hop-muc-may-in-123.cat' },
      { name: 'Linh Kiện Máy in', link: 'https://duclan.vn/linh-kien-may-in-611.cat' },
      { name: 'Linh Kiện Hộp Mực', link: 'https://duclan.vn/linh-kien-hop-muc-93.cat' },
    ],
  },
  {
    id: 'vat-tu-in-phun',
    name: 'Vật tư in phun',
    subcategories: [
      { name: 'Mực Nước (Dye)', link: 'https://duclan.vn/muc-nuoc-689.cat' },
      { name: 'Mực Nhiệt (Sublimation)', link: 'https://duclan.vn/muc-nhiet-697.cat' },
      { name: 'Mực Dầu (Pigment)', link: 'https://duclan.vn/muc-dau-pigment-690.cat' },
      { name: 'Mực UV', link: 'https://duclan.vn/muc-uv-590.cat' },
    ],
  },
  {
    id: 'vat-tu-in-barcode',
    name: 'Vật tư in barcode',
    subcategories: [
      { name: 'Ruy Băng Mực', link: 'https://duclan.vn/ruy-bang-809.cat' },
      { name: 'Giấy In Barcode/ Bill', link: 'https://duclan.vn/giay-in-barcode-bill-810.cat' },
    ],
  },
  {
    id: 'vat-tu-in-kim',
    name: 'Vật tư in kim',
    subcategories: [
      { name: 'Ruy Băng', link: 'https://duclan.vn/ruy-bang-100.cat' },
      { name: 'Linh Kiện', link: 'https://duclan.vn/linh-kien-180.cat' },
    ],
  },
]

const brandList = [
  'Ricoh',
  'Toshiba',
  'Canon',
  'Sharp',
  'Fuji-Xerox',
  'Kyocera Mita',
  'Konica-Minolta',
  'HP',
  'SamSung',
  'Epson',
  'Brother',
  'Pantum',
]

const navMenus = [
  {
    label: 'Sản phẩm',
    items: [
      { label: 'Sản phẩm mới', href: 'https://duclan.vn/san-pham-moi' },
      { label: 'Sản phẩm nổi bật', href: 'https://duclan.vn/san-pham-noi-bat' },
    ],
  },
  { label: 'Thương hiệu', items: brandList.map((label) => ({ label, href: '#' })) },
  {
    label: 'Chính Sách Bán Hàng',
    items: [
      { label: 'Tiêu Chí Bán Hàng', href: 'https://duclan.vn/tieu-chi-ban-hang-31.cat.html' },
      { label: 'Bảo Mật Thông Tin', href: 'https://duclan.vn/bao-mat-thong-tin-34.cat.html' },
      { label: 'Hệ thống phân phối', href: 'https://duclan.vn/he-thong-phan-phoi-33.cat.html' },
      { label: 'Chính sách đổi trả', href: 'https://duclan.vn/chinh-sach-doi-tra-32.cat.html' },
    ],
  },
  {
    label: 'Chính Sách Mua Hàng',
    items: [
      { label: 'Hỗ Trợ Khách Hàng', href: 'https://duclan.vn/ho-tro-khach-hang-14.cat.html' },
      { label: 'Hỗ Trợ Đặt Hàng', href: 'https://duclan.vn/ho-tro-dat-hang-15.cat.html' },
      { label: 'Bảng Tra Mã Hàng', href: 'https://duclan.vn/bang-tra-ma-hang-27.cat.html' },
    ],
  },
  {
    label: 'Tin Tức',
    items: [
      {
        label: 'Thông Tin Về Công Nghệ',
        href: 'https://duclan.vn/thong-tin-ve-cong-nghe-20.cat.html',
      },
    ],
  },
]

const navLinks = [
  { label: 'Báo Giá', href: 'https://duclan.vn/bao-gia' },
  { label: 'Liên hệ', href: '/lien-he' },
  { label: 'Đội ngũ kinh doanh', href: 'https://duclan.vn/lien-he-kinh-doanh' },
]

const toggleCategory = (id: string) => {
  expandedCategories.value[id] = !expandedCategories.value[id]
}

const handleSearch = () => {
  if (searchQuery.value.trim()) console.log('Search:', searchQuery.value)
}

const toggleCategoryPanel = () => {
  isCategoryOpen.value = !isCategoryOpen.value
}

const openCategoryPanel = () => {
  isCategoryOpen.value = true
}

const closeCategoryPanel = () => {
  isCategoryOpen.value = false
}
</script>

<template>
  <header class="w-full bg-white text-[14px] text-gray-800">
    <!-- Row 1 -->
    <div
      class="flex items-center justify-between bg-[#1a8fd1] px-6 py-2 text-sm font-semibold text-white"
    >
      <span>Kính chào quý khách</span>
      <a href="tel:02839306464" class="font-bold hover:underline">028.39306464 (Tổng đài)</a>
    </div>

    <!-- Row 2 -->
    <div class="flex items-center gap-0 border-b border-gray-200 px-6 py-2 text-sm text-gray-700">
      <a
        href="https://duclan.vn/tuyen-dung-24.cat.html"
        class="mr-4 border-r border-gray-300 pr-4 font-bold text-gray-900 whitespace-nowrap hover:text-[#1a8fd1]"
        >Thông Tin Tuyển Dụng</a
      >
      <span class="flex-1 whitespace-nowrap">
        Thứ 2 đến Thứ 6: 7h45 – 17h30, Thứ 7: 7h45 – 12h5
      </span>
      <a href="#" class="whitespace-nowrap hover:text-[#1a8fd1]">Theo dõi trạng thái đơn hàng</a>
    </div>

    <!-- Row 3 -->
    <div class="flex items-center gap-4 border-b border-gray-200 px-6 py-4">
      <!-- Logo -->
      <a href="/" class="flex flex-shrink-0 items-center gap-2 text-[#d32f2f]">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-md bg-[#d32f2f] text-2xl font-black text-white"
        >
          M
        </div>
        <span class="text-[32px] font-black tracking-[0.12em] whitespace-nowrap">ĐỨC LAN</span>
      </a>

      <!-- Category button -->
      <div
        class="relative hidden flex-shrink-0 md:block"
        @mouseenter="openCategoryPanel"
        @mouseleave="closeCategoryPanel"
      >
        <button
          class="flex h-[54px] min-w-[190px] items-center gap-3 rounded-md border-2 border-[#1a8fd1] px-4 text-left text-[15px] font-bold text-[#1a8fd1] leading-tight shadow-sm transition hover:bg-[#e8f4fd]"
          @click="toggleCategoryPanel"
        >
          <svg
            width="20"
            height="16"
            fill="none"
            stroke="#1a8fd1"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Danh mục sản<br />phẩm</span>
        </button>

        <div
          v-show="isCategoryOpen"
          class="absolute left-0 top-full z-40 mt-2 w-72 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
        >
          <div
            v-for="cat in categories"
            :key="cat.id"
            class="border-b border-gray-100 last:border-b-0"
          >
            <button
              @click="toggleCategory(cat.id)"
              class="flex w-full items-center justify-between px-4 py-3 text-left text-[14px] font-semibold text-gray-800 transition hover:bg-[#e8f4fd] hover:text-[#1a8fd1]"
            >
              <span>{{ cat.name }}</span>
              <span class="text-lg font-normal text-gray-400">
                {{ expandedCategories[cat.id] ? '−' : '+' }}
              </span>
            </button>
            <div v-if="expandedCategories[cat.id]" class="bg-gray-50">
              <a
                v-for="sub in cat.subcategories"
                :key="sub.name"
                :href="sub.link"
                class="block px-6 py-2.5 text-[13.5px] text-gray-600 transition hover:bg-white hover:text-[#1a8fd1]"
                >{{ sub.name }}</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div
        class="flex flex-1 items-stretch overflow-hidden rounded-md border border-gray-300 shadow-sm max-w-[540px] h-[54px]"
      >
        <div class="relative">
          <select
            v-model="searchType"
            class="h-full min-w-[150px] appearance-none bg-white px-3 pr-9 text-[15px] text-gray-700 outline-none focus:border-[#1a8fd1] focus:ring-1 focus:ring-[#1a8fd1]"
          >
            <option value="product">Tìm sản phẩm</option>
            <option value="machine">Tìm mã máy</option>
          </select>
          <svg
            class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            width="13"
            height="13"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>
        <input
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Nhập sản phẩm cần tìm kiếm..."
          class="flex-1 border-l border-gray-200 px-3 text-[15px] outline-none focus:border-l-[#1a8fd1] focus:ring-0"
        />
        <button
          @click="handleSearch"
          class="flex items-center gap-2 bg-[#1a8fd1] px-7 text-[15px] font-bold text-white transition hover:bg-[#1565c0]"
        >
          Tìm
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      <!-- Actions -->
      <div class="ml-auto flex flex-wrap items-center gap-2 md:flex-nowrap md:gap-2">
        <a
          href="https://duclan.vn/dang-nhap"
          class="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 font-semibold text-gray-800 transition hover:bg-gray-50"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Tài khoản
        </a>

        <a
          href="https://duclan.vn/xem-bao-gia"
          class="relative flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 font-semibold text-gray-800 transition hover:bg-gray-50"
        >
          <div class="relative">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            <span
              class="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#1a8fd1] text-[11px] font-extrabold text-white"
              >{{ printCount }}</span
            >
          </div>
          In báo giá
        </a>

        <button
          class="relative flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 font-semibold text-gray-800 transition hover:bg-gray-50"
        >
          <div class="relative">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span
              class="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#1a8fd1] text-[11px] font-extrabold text-white"
              >{{ cartCount }}</span
            >
          </div>
          Giỏ hàng
        </button>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="ml-1 inline-flex items-center rounded-md border border-gray-300 p-2.5 text-gray-700 md:hidden"
          aria-label="Mở menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Nav -->
    <nav class="sticky top-0 z-30 border-y border-gray-300 bg-[#eeeeee]">
      <div class="flex items-center px-6">
        <router-link
          to="/"
          class="flex flex-shrink-0 items-center px-3 py-3 text-gray-800 transition hover:text-[#1a8fd1]"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
        </router-link>

        <div v-for="menu in navMenus" :key="menu.label" class="group relative">
          <button
            class="flex items-center gap-1 px-4 py-3 text-[15px] font-bold text-gray-900 transition hover:text-[#1a8fd1]"
          >
            {{ menu.label }}
            <svg width="11" height="11" fill="#666" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            class="absolute left-0 top-full hidden w-56 rounded-md border border-gray-200 bg-white shadow-lg group-hover:block"
          >
            <a
              v-for="item in menu.items"
              :key="item.label"
              :href="item.href"
              class="block px-4 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-[#1a8fd1]"
            >
              {{ item.label }}
            </a>
          </div>
        </div>

        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="px-4 py-3 text-[15px] font-bold text-gray-900 whitespace-nowrap transition hover:text-[#1a8fd1]"
          >{{ link.label }}</a
        >

        <div class="ml-auto flex h-[50px] flex-shrink-0">
          <div
            class="flex items-center rounded-l-md bg-[#1565c0] px-5 text-sm font-extrabold uppercase text-white"
          >
            Giảm tận 30%
          </div>
          <div
            class="-ml-1 flex items-center rounded-r-md bg-[#1a8fd1] px-5 text-sm font-extrabold uppercase text-white"
          >
            Khuyến mãi
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden max-h-[350px] overflow-y-auto border-t border-gray-200 bg-white"
    >
      <div class="px-4 py-2">
        <router-link
          to="/"
          @click="isMenuOpen = false"
          class="block border-b border-gray-100 px-2 py-3 text-[15px] text-gray-800 hover:text-[#1a8fd1]"
          >🏠 Trang chủ</router-link
        >
        <a
          href="https://duclan.vn/san-pham-moi"
          class="block border-b border-gray-100 px-2 py-3 text-[15px] text-gray-800 hover:text-[#1a8fd1]"
          >Sản phẩm mới</a
        >
        <a
          href="https://duclan.vn/san-pham-noi-bat"
          class="block border-b border-gray-100 px-2 py-3 text-[15px] text-gray-800 hover:text-[#1a8fd1]"
          >Sản phẩm nổi bật</a
        >
        <a
          href="https://duclan.vn/bao-gia"
          class="block border-b border-gray-100 px-2 py-3 text-[15px] text-gray-800 hover:text-[#1a8fd1]"
          >Báo giá</a
        >
        <a
          href="/lien-he"
          class="block border-b border-gray-100 px-2 py-3 text-[15px] text-gray-800 hover:text-[#1a8fd1]"
          >Liên hệ</a
        >
      </div>
    </div>
  </header>
</template>
